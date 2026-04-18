/**
 * Weather service using Open-Meteo API (free, no API key required)
 * Docs: https://open-meteo.com/en/docs
 */

import type { WeatherDay } from '../data/mockData';
import type { CurrentWeatherData, DailyForecast } from '../data/weatherTypes';
import { mapWmoToCondition, mapWmoToIcon } from '../data/weatherMappings';

// Murray, UT coordinates (approximate center of Salt Lake Valley golf)
const SALT_LAKE_LAT = 40.766539;
const SALT_LAKE_LON = -111.891102;

// Cache for weather data
let weatherCache: {
  current: CurrentWeatherData | null;
  daily: DailyForecast[];
  timestamp: number;
} | null = null;

const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch current weather and 7-day forecast from Open-Meteo
 */
export async function fetchWeather(): Promise<{
  current: CurrentWeatherData;
  daily: DailyForecast[];
}> {
  const now = Date.now();
  
  // Return cached data if still fresh
  if (weatherCache && now - weatherCache.timestamp < CACHE_DURATION_MS) {
    return {
      current: weatherCache.current!,
      daily: weatherCache.daily,
    };
  }

  const queryParams = new URLSearchParams({
    latitude: SALT_LAKE_LAT.toString(),
    longitude: SALT_LAKE_LON.toString(),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',
    timezone: 'auto',
    forecast_days: '7',
  });

  const url = `https://api.open-meteo.com/v1/forecast?${queryParams}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data = await response.json();

  // Estimate visibility based on weather conditions (Open-Meteo free tier doesn't include visibility)
  const weatherCode = data.current.weather_code;
  const visibility = estimateVisibility(weatherCode);

  // Convert Celsius to Fahrenheit
  const cToF = (c: number) => Math.round(c * 9/5 + 32);

  // Parse current weather
  const current: CurrentWeatherData = {
    temp: cToF(data.current.temperature_2m),
    feelsLike: cToF(data.current.apparent_temperature),
    humidity: data.current.relative_humidity_2m,
    windMph: Math.round(data.current.wind_speed_10m * 0.621371), // Convert km/h to mph
    windDir: getWindDirection(data.current.wind_direction_10m),
    uvIndex: Math.round(data.current.uv_index),
    condition: mapWmoToCondition(weatherCode),
    conditionIcon: mapWmoToIcon(weatherCode),
    updated: new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }),
    location: 'Salt Lake Valley',
    visibility,
  };

  // Format date as "Apr 18" style
  const formatDateShort = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  // Parse daily forecast
  const daily: DailyForecast[] = data.daily.time.map((date: string, i: number) => {
    const weatherCode = data.daily.weather_code[i];
    const jsDate = new Date(date);
    const dayOfWeek = jsDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return {
      date: formatDateShort(jsDate),
      dayFull: jsDate.toLocaleDateString('en-US', { weekday: 'long' }),
      dayShort: jsDate.toLocaleDateString('en-US', { weekday: 'short' }),
      high: cToF(data.daily.temperature_2m_max[i]),
      low: cToF(data.daily.temperature_2m_min[i]),
      precipPct: data.daily.precipitation_probability_max[i],
      windMph: Math.round(data.daily.wind_speed_10m_max[i] * 0.621371),
      condition: mapWmoToCondition(weatherCode),
      conditionIcon: mapWmoToIcon(weatherCode),
      isWeekend,
    };
  });

  // Cache the results
  weatherCache = {
    current,
    daily,
    timestamp: now,
  };

  return { current, daily };
}

/**
 * Convert wind direction degrees to compass direction
 */
function getWindDirection(degrees: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

/**
 * Estimate visibility based on weather conditions
 */
function estimateVisibility(code: number): string {
  if (code >= 95) return 'Poor';
  if (code >= 71) return 'Moderate';
  if (code >= 51) return 'Moderate';
  if (code >= 45) return 'Poor';
  return 'Good';
}

/**
 * Convert DailyForecast to WeatherDay[] for backward compatibility
 */
export function toWeatherDays(daily: DailyForecast[]): WeatherDay[] {
  return daily.map(day => ({
    date: day.date,
    dayFull: day.dayFull,
    dayShort: day.dayShort,
    high: day.high,
    low: day.low,
    precipPct: day.precipPct,
    windMph: day.windMph,
    condition: day.condition,
    conditionIcon: day.conditionIcon,
    isWeekend: day.isWeekend,
  }));
}

/**
 * Clear weather cache and force refresh
 */
export function clearWeatherCache(): void {
  weatherCache = null;
}