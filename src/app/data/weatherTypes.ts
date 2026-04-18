/**
 * Weather type definitions for Open-Meteo integration
 */

export interface CurrentWeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windMph: number;
  windDir: string;
  uvIndex: number;
  condition: string;
  conditionIcon: string;
  updated: string;
  location: string;
  // Visibility isestimated since Open-Meteo free tier doesn't include it
  visibility: string;
}

export interface DailyForecast {
  date: string;
  dayFull: string;
  dayShort: string;
  high: number;
  low: number;
  precipPct: number;
  windMph: number;
  condition: string;
  conditionIcon: string;
  isWeekend: boolean;
}