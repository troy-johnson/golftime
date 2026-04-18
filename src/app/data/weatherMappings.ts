/**
 * WMO Weather code mappings for Open-Meteo
 * Reference: https://open-meteo.com/en/docs
 * 
 * Maps WMO weather codes (0-99) to human-readable conditions and icons
 */

// Mapping from WMO code to condition text
export function mapWmoToCondition(code: number): string {
  const conditions: Record<number, string> = {
    0: 'Clear',
    1: 'Mostly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Fog',
    51: 'Light Drizzle',
    53: 'Drizzle',
    55: 'Heavy Drizzle',
    56: 'Freezing Drizzle',
    57: 'Freezing Drizzle',
    61: 'Light Rain',
    63: 'Rain',
    65: 'Heavy Rain',
    66: 'Freezing Rain',
    67: 'Freezing Rain',
    71: 'Light Snow',
    73: 'Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Light Showers',
    81: 'Showers',
    82: 'Heavy Showers',
    85: 'Light Snow Showers',
    86: 'Snow Showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm',
    99: 'Severe Thunderstorm',
  };
  return conditions[code] ?? 'Unknown';
}

// Mapping from WMO code to weather icon name (matches our icon naming convention)
export function mapWmoToIcon(code: number): string {
  const icons: Record<number, string> = {
    0: 'sun',
    1: 'sun',
    2: 'partly-cloudy',
    3: 'cloudy',
    45: 'fog',
    48: 'fog',
    51: 'drizzle',
    53: 'drizzle',
    55: 'drizzle',
    56: 'sleet',
    57: 'sleet',
    61: 'rain',
    63: 'rain',
    65: 'rain',
    66: 'sleet',
    67: 'sleet',
    71: 'snow',
    73: 'snow',
    75: 'snow',
    77: 'snow',
    80: 'rain',
    81: 'rain',
    82: 'rain',
    85: 'snow',
    86: 'snow',
    95: 'thunderstorm',
    96: 'thunderstorm',
    99: 'thunderstorm',
  };
  return icons[code] ?? 'cloudy';
}

/**
 * Get wind speed description
 */
export function getWindDescription(mph: number): string {
  if (mph < 5) return 'Calm';
  if (mph < 10) return 'Light';
  if (mph < 20) return 'Moderate';
  if (mph < 30) return 'Breezy';
  return 'Windy';
}

/**
 * Get UV index description
 */
export function getUvDescription(uv: number): string {
  if (uv <= 2) return 'Low';
  if (uv <= 5) return 'Moderate';
  if (uv <= 7) return 'High';
  if (uv <= 10) return 'Very High';
  return 'Extreme';
}

/**
 * Get precipitation description
 */
export function getPrecipDescription(pct: number): string {
  if (pct < 10) return 'Dry';
  if (pct < 30) return 'Low';
  if (pct < 50) return 'Chance';
  if (pct < 70) return 'Likely';
  return 'Rain Expected';
}