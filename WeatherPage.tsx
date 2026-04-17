export interface TeeTime {
  id: string;
  time: string;
  timeSort: number; // minutes from midnight for sorting
  period: 'morning' | 'midday' | 'afternoon';
  holes: 9 | 18;
  available: number; // spots available (1-4)
  walkingPrice: number;
  cartPrice: number;
}

export interface Course {
  id: string;
  name: string;
  city: string;
  state: string;
  distance: number; // miles from search location
  holes: number[]; // [9, 18] or [9] or [18]
  imageId: string; // maps to courseImages
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  website: string;
  par: number;
  yards: number;
  description: string;
  teeTimes: TeeTime[];
}

export interface WeatherDay {
  dayShort: string;
  dayFull: string;
  date: string;
  condition: string;
  conditionIcon: 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy' | 'windy' | 'thunderstorm' | 'snow';
  high: number;
  low: number;
  windMph: number;
  precipPct: number;
  isWeekend: boolean;
}

function makeTime(hour: number, minute: number, holes: 9 | 18, available: number, walkPrice: number): TeeTime {
  const h12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const minStr = minute.toString().padStart(2, '0');
  const timeSort = hour * 60 + minute;
  let period: 'morning' | 'midday' | 'afternoon' = 'morning';
  if (timeSort >= 600 && timeSort < 840) period = 'morning';   // 10am = 600, wait, 10*60=600
  if (timeSort >= 600 && timeSort < 840) period = 'morning';   // 6am-10am = 360-600
  // Actually: morning = 5am(300) - 10am(600), midday = 10am-2pm (600-840), afternoon = 2pm(840) - 7pm(1140)
  if (timeSort < 600) period = 'morning';
  else if (timeSort < 840) period = 'midday';
  else period = 'afternoon';

  return {
    id: `tt-${hour}-${minute}-${holes}`,
    time: `${h12}:${minStr} ${ampm}`,
    timeSort,
    period,
    holes,
    available,
    walkingPrice: walkPrice,
    cartPrice: walkPrice + Math.round(walkPrice * 0.4),
  };
}

const murrayParkwayTimes: TeeTime[] = [
  makeTime(7, 0, 18, 4, 29),
  makeTime(7, 8, 18, 2, 29),
  makeTime(7, 16, 18, 4, 29),
  makeTime(7, 32, 18, 3, 29),
  makeTime(7, 48, 18, 1, 29),
  makeTime(8, 4, 18, 4, 29),
  makeTime(8, 20, 18, 2, 29),
  makeTime(8, 36, 18, 4, 29),
  makeTime(9, 0, 18, 4, 32),
  makeTime(9, 24, 18, 3, 32),
  makeTime(10, 0, 18, 4, 38),
  makeTime(10, 16, 18, 2, 38),
  makeTime(10, 40, 18, 4, 38),
  makeTime(11, 8, 18, 4, 38),
  makeTime(11, 32, 18, 3, 38),
  makeTime(12, 0, 18, 4, 38),
  makeTime(12, 24, 18, 2, 38),
  makeTime(13, 0, 18, 4, 35),
  makeTime(13, 32, 18, 4, 35),
  makeTime(14, 0, 18, 3, 35),
  makeTime(14, 32, 18, 4, 30),
  makeTime(15, 0, 18, 4, 30),
  makeTime(15, 32, 18, 2, 28),
  makeTime(16, 0, 18, 4, 25),
  makeTime(16, 32, 18, 4, 25),
  makeTime(7, 0, 9, 4, 16),
  makeTime(7, 30, 9, 2, 16),
  makeTime(8, 0, 9, 4, 16),
  makeTime(12, 0, 9, 4, 18),
  makeTime(15, 0, 9, 4, 14),
];

const mickRileyTimes: TeeTime[] = [
  makeTime(6, 30, 18, 4, 24),
  makeTime(6, 48, 18, 3, 24),
  makeTime(7, 6, 18, 4, 24),
  makeTime(7, 24, 18, 2, 24),
  makeTime(7, 42, 18, 4, 27),
  makeTime(8, 0, 18, 4, 27),
  makeTime(8, 18, 18, 1, 27),
  makeTime(8, 36, 18, 4, 27),
  makeTime(9, 6, 18, 3, 30),
  makeTime(9, 30, 18, 4, 30),
  makeTime(10, 0, 18, 4, 34),
  makeTime(10, 24, 18, 2, 34),
  makeTime(11, 0, 18, 4, 34),
  makeTime(11, 30, 18, 4, 34),
  makeTime(12, 6, 18, 3, 32),
  makeTime(12, 42, 18, 4, 32),
  makeTime(13, 18, 18, 4, 30),
  makeTime(14, 0, 18, 2, 28),
  makeTime(14, 30, 18, 4, 26),
  makeTime(15, 12, 18, 4, 24),
  makeTime(16, 0, 18, 3, 22),
  makeTime(6, 30, 9, 4, 14),
  makeTime(8, 0, 9, 4, 14),
  makeTime(13, 0, 9, 4, 16),
];

const oldMillTimes: TeeTime[] = [
  makeTime(7, 0, 18, 4, 45),
  makeTime(7, 10, 18, 2, 45),
  makeTime(7, 20, 18, 4, 45),
  makeTime(7, 40, 18, 3, 45),
  makeTime(8, 0, 18, 4, 48),
  makeTime(8, 20, 18, 4, 48),
  makeTime(8, 40, 18, 2, 48),
  makeTime(9, 0, 18, 4, 52),
  makeTime(9, 30, 18, 4, 52),
  makeTime(10, 0, 18, 3, 58),
  makeTime(10, 20, 18, 4, 58),
  makeTime(10, 50, 18, 4, 58),
  makeTime(11, 20, 18, 2, 58),
  makeTime(12, 0, 18, 4, 55),
  makeTime(12, 30, 18, 4, 55),
  makeTime(13, 0, 18, 3, 52),
  makeTime(13, 30, 18, 4, 50),
  makeTime(14, 10, 18, 4, 48),
  makeTime(15, 0, 18, 4, 44),
  makeTime(15, 40, 18, 2, 40),
  makeTime(16, 20, 18, 4, 36),
];

const riverOaksTimes: TeeTime[] = [
  makeTime(7, 15, 18, 4, 32),
  makeTime(7, 30, 18, 2, 32),
  makeTime(7, 45, 18, 4, 32),
  makeTime(8, 15, 18, 4, 35),
  makeTime(8, 45, 18, 3, 35),
  makeTime(9, 15, 18, 4, 38),
  makeTime(9, 45, 18, 4, 38),
  makeTime(10, 15, 18, 2, 42),
  makeTime(10, 45, 18, 4, 42),
  makeTime(11, 15, 18, 4, 42),
  makeTime(11, 45, 18, 3, 42),
  makeTime(12, 15, 18, 4, 40),
  makeTime(13, 0, 18, 4, 38),
  makeTime(13, 30, 18, 2, 36),
  makeTime(14, 0, 18, 4, 34),
  makeTime(14, 45, 18, 4, 32),
  makeTime(15, 30, 18, 3, 30),
  makeTime(16, 15, 18, 4, 28),
  makeTime(7, 15, 9, 4, 19),
  makeTime(12, 0, 9, 4, 21),
];

const bonnevilleTimes: TeeTime[] = [
  makeTime(6, 48, 18, 4, 22),
  makeTime(7, 6, 18, 3, 22),
  makeTime(7, 24, 18, 4, 22),
  makeTime(7, 42, 18, 2, 25),
  makeTime(8, 12, 18, 4, 25),
  makeTime(8, 42, 18, 4, 25),
  makeTime(9, 12, 18, 3, 28),
  makeTime(9, 42, 18, 4, 28),
  makeTime(10, 18, 18, 4, 32),
  makeTime(10, 48, 18, 2, 32),
  makeTime(11, 18, 18, 4, 32),
  makeTime(12, 0, 18, 4, 30),
  makeTime(12, 36, 18, 3, 28),
  makeTime(13, 12, 18, 4, 26),
  makeTime(14, 0, 18, 4, 24),
  makeTime(14, 36, 18, 2, 22),
  makeTime(15, 12, 18, 4, 20),
  makeTime(16, 0, 18, 4, 18),
];

const glendaleTimes: TeeTime[] = [
  makeTime(7, 0, 18, 4, 20),
  makeTime(7, 12, 18, 4, 20),
  makeTime(7, 24, 18, 3, 20),
  makeTime(7, 48, 18, 4, 20),
  makeTime(8, 12, 18, 2, 22),
  makeTime(8, 36, 18, 4, 22),
  makeTime(9, 0, 18, 4, 25),
  makeTime(9, 30, 18, 4, 25),
  makeTime(10, 0, 18, 3, 28),
  makeTime(10, 24, 18, 4, 28),
  makeTime(11, 0, 18, 4, 28),
  makeTime(11, 30, 18, 2, 28),
  makeTime(12, 6, 18, 4, 26),
  makeTime(12, 42, 18, 4, 24),
  makeTime(13, 18, 18, 3, 22),
  makeTime(14, 0, 18, 4, 20),
  makeTime(14, 36, 18, 4, 18),
  makeTime(15, 12, 18, 2, 16),
  makeTime(16, 0, 18, 4, 14),
  makeTime(7, 0, 9, 4, 11),
  makeTime(10, 0, 9, 4, 13),
  makeTime(14, 0, 9, 4, 10),
];

const mountainDellTimes: TeeTime[] = [
  makeTime(7, 0, 18, 4, 38),
  makeTime(7, 10, 18, 2, 38),
  makeTime(7, 20, 18, 4, 38),
  makeTime(7, 50, 18, 4, 42),
  makeTime(8, 20, 18, 3, 42),
  makeTime(8, 50, 18, 4, 42),
  makeTime(9, 20, 18, 4, 45),
  makeTime(10, 0, 18, 2, 50),
  makeTime(10, 30, 18, 4, 50),
  makeTime(11, 0, 18, 4, 50),
  makeTime(11, 30, 18, 3, 50),
  makeTime(12, 0, 18, 4, 48),
  makeTime(12, 30, 18, 4, 46),
  makeTime(13, 0, 18, 2, 44),
  makeTime(13, 30, 18, 4, 42),
  makeTime(14, 0, 18, 4, 40),
  makeTime(14, 30, 18, 3, 38),
  makeTime(15, 0, 18, 4, 36),
  makeTime(15, 30, 18, 4, 34),
];

const forestDaleTimes: TeeTime[] = [
  makeTime(7, 0, 9, 4, 14),
  makeTime(7, 20, 9, 3, 14),
  makeTime(7, 40, 9, 4, 14),
  makeTime(8, 0, 9, 2, 14),
  makeTime(8, 20, 9, 4, 16),
  makeTime(8, 40, 9, 4, 16),
  makeTime(9, 0, 9, 3, 18),
  makeTime(9, 20, 9, 4, 18),
  makeTime(9, 40, 9, 4, 18),
  makeTime(10, 0, 9, 2, 20),
  makeTime(10, 20, 9, 4, 20),
  makeTime(10, 40, 9, 4, 20),
  makeTime(11, 0, 9, 3, 18),
  makeTime(12, 0, 9, 4, 16),
  makeTime(13, 0, 9, 4, 14),
  makeTime(14, 0, 9, 4, 12),
  makeTime(15, 0, 9, 3, 10),
  makeTime(16, 0, 9, 4, 8),
];

export const allCourses: Course[] = [
  {
    id: 'murray-parkway',
    name: 'Murray Parkway Golf Course',
    city: 'Murray',
    state: 'UT',
    distance: 8.2,
    holes: [9, 18],
    imageId: 'murray-parkway',
    rating: 4.1,
    reviewCount: 312,
    address: '4261 Murray Holladay Rd, Murray, UT 84107',
    phone: '(801) 262-4653',
    website: 'https://slcgov.com/golf/murray-parkway',
    par: 72,
    yards: 6803,
    description: 'A favorite of Salt Lake golfers for its well-maintained fairways, mature trees, and challenging layout along the Jordan River.',
    teeTimes: murrayParkwayTimes,
  },
  {
    id: 'mick-riley',
    name: 'Mick Riley Golf Course',
    city: 'Murray',
    state: 'UT',
    distance: 6.5,
    holes: [9, 18],
    imageId: 'mick-riley',
    rating: 3.9,
    reviewCount: 287,
    address: '9elf/mick-riley, Murray, UT 84107',
    phone: '(801) 264-8000',
    website: 'https://slcgov.com/golf/mick-riley',
    par: 70,
    yards: 6280,
    description: 'An approachable, well-priced 18-hole track with wide fairways — perfect for groups of all skill levels.',
    teeTimes: mickRileyTimes,
  },
  {
    id: 'old-mill',
    name: 'Old Mill Golf Course',
    city: 'Salt Lake City',
    state: 'UT',
    distance: 4.1,
    holes: [18],
    imageId: 'old-mill',
    rating: 4.4,
    reviewCount: 521,
    address: '6080 S Wasatch Blvd, Salt Lake City, UT 84121',
    phone: '(801) 424-0653',
    website: 'https://oldmillgolf.com',
    par: 71,
    yards: 6782,
    description: 'One of SLC\'s premier public courses, featuring elevated Wasatch foothills terrain, stunning mountain views, and a signature 18th hole.',
    teeTimes: oldMillTimes,
  },
  {
    id: 'river-oaks',
    name: 'River Oaks Golf Course',
    city: 'Riverton',
    state: 'UT',
    distance: 14.3,
    holes: [9, 18],
    imageId: 'river-oaks',
    rating: 4.0,
    reviewCount: 194,
    address: '9elf/river-oaks, Riverton, UT 84065',
    phone: '(801) 253-3673',
    website: 'https://riveroaksgolf.com',
    par: 72,
    yards: 6614,
    description: 'A scenic course tucked along the Jordan River in Riverton with tree-lined fairways and excellent conditions year-round.',
    teeTimes: riverOaksTimes,
  },
  {
    id: 'bonneville',
    name: 'Bonneville Golf Course',
    city: 'Salt Lake City',
    state: 'UT',
    distance: 5.3,
    holes: [18],
    imageId: 'bonneville',
    rating: 4.2,
    reviewCount: 403,
    address: '954 Connor St, Salt Lake City, UT 84108',
    phone: '(801) 583-9513',
    website: 'https://slcgov.com/golf/bonneville',
    par: 72,
    yards: 6800,
    description: 'Nestled at the base of the Wasatch Mountains, Bonneville offers dramatic elevation changes, panoramic valley views, and cool mountain breezes.',
    teeTimes: bonnevilleTimes,
  },
  {
    id: 'glendale',
    name: 'Glendale Golf Course',
    city: 'West Valley City',
    state: 'UT',
    distance: 7.8,
    holes: [9, 18],
    imageId: 'glendale',
    rating: 3.7,
    reviewCount: 156,
    address: '1603 W 2100 S, Salt Lake City, UT 84119',
    phone: '(801) 974-2403',
    website: 'https://slcgov.com/golf/glendale',
    par: 72,
    yards: 6800,
    description: 'SLC\'s most affordable 18-hole municipal course, popular with beginners and budget-conscious golfers who still want a full layout.',
    teeTimes: glendaleTimes,
  },
  {
    id: 'mountain-dell',
    name: 'Mountain Dell Golf Course',
    city: 'Salt Lake City',
    state: 'UT',
    distance: 18.6,
    holes: [18],
    imageId: 'mountain-dell',
    rating: 4.6,
    reviewCount: 698,
    address: 'I-80 Exit 134, Salt Lake City, UT 84109',
    phone: '(801) 582-3812',
    website: 'https://slcgov.com/golf/mountain-dell',
    par: 71,
    yards: 6787,
    description: 'Considered the crown jewel of SLC public golf. Two 18-hole courses in a stunning canyon setting — the Canyon and Lake courses offer world-class scenery.',
    teeTimes: mountainDellTimes,
  },
  {
    id: 'forest-dale',
    name: 'Forest Dale Golf Course',
    city: 'Salt Lake City',
    state: 'UT',
    distance: 3.2,
    holes: [9],
    imageId: 'forest-dale',
    rating: 3.6,
    reviewCount: 118,
    address: '2375 S 900 E, Salt Lake City, UT 84106',
    phone: '(801) 483-5420',
    website: 'https://slcgov.com/golf/forest-dale',
    par: 36,
    yards: 3164,
    description: 'A charming 9-hole track in the heart of the 9th and 9th neighborhood — great for a quick round or working on your short game.',
    teeTimes: forestDaleTimes,
  },
];

// Next weekend days (Fri Apr 18, Sat Apr 19, Sun Apr 20, 2026)
export const weekWeather: WeatherDay[] = [
  {
    dayShort: 'THU',
    dayFull: 'Thursday',
    date: 'Apr 17',
    condition: 'Partly Cloudy',
    conditionIcon: 'partly-cloudy',
    high: 62,
    low: 44,
    windMph: 9,
    precipPct: 15,
    isWeekend: false,
  },
  {
    dayShort: 'FRI',
    dayFull: 'Friday',
    date: 'Apr 18',
    condition: 'Sunny',
    conditionIcon: 'sunny',
    high: 67,
    low: 46,
    windMph: 7,
    precipPct: 5,
    isWeekend: true,
  },
  {
    dayShort: 'SAT',
    dayFull: 'Saturday',
    date: 'Apr 19',
    condition: 'Mostly Sunny',
    conditionIcon: 'partly-cloudy',
    high: 71,
    low: 48,
    windMph: 11,
    precipPct: 10,
    isWeekend: true,
  },
  {
    dayShort: 'SUN',
    dayFull: 'Sunday',
    date: 'Apr 20',
    condition: 'Sunny',
    conditionIcon: 'sunny',
    high: 74,
    low: 49,
    windMph: 8,
    precipPct: 5,
    isWeekend: true,
  },
  {
    dayShort: 'MON',
    dayFull: 'Monday',
    date: 'Apr 21',
    condition: 'Partly Cloudy',
    conditionIcon: 'partly-cloudy',
    high: 68,
    low: 47,
    windMph: 13,
    precipPct: 20,
    isWeekend: false,
  },
  {
    dayShort: 'TUE',
    dayFull: 'Tuesday',
    date: 'Apr 22',
    condition: 'Cloudy',
    conditionIcon: 'cloudy',
    high: 58,
    low: 44,
    windMph: 16,
    precipPct: 40,
    isWeekend: false,
  },
  {
    dayShort: 'WED',
    dayFull: 'Wednesday',
    date: 'Apr 23',
    condition: 'Rain Showers',
    conditionIcon: 'rainy',
    high: 52,
    low: 41,
    windMph: 18,
    precipPct: 70,
    isWeekend: false,
  },
];

export const currentWeather = {
  temp: 65,
  feelsLike: 62,
  condition: 'Sunny',
  conditionIcon: 'sunny' as const,
  humidity: 28,
  windMph: 7,
  windDir: 'SW',
  uvIndex: 6,
  visibility: 'Excellent',
  location: 'Salt Lake Valley, UT',
  updated: '12:30 PM',
};
