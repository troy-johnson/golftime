import type { Course } from './mockData';

export type BookingProvider = 'chronogolf' | 'manual';
export type CourseAccess = 'public' | 'private';

export interface CatalogCourse extends Course {
  access: CourseAccess;
  provider: BookingProvider;
  bookingUrl?: string;
  chronogolfCourseIds?: string[];
  liveTeeTimesEnabled: boolean;
}

interface RawCatalogCourse {
  id: string;
  name: string;
  city: string;
  distance: number;
  holes: number[];
  address: string;
  access: CourseAccess;
  provider: BookingProvider;
  bookingUrl?: string;
  chronogolfCourseIds?: string[];
}

function getImageId(id: string): string {
  if (id.includes('murray-parkway')) return 'murray-parkway';
  if (id.includes('mick-riley')) return 'mick-riley';
  if (id.includes('old-mill')) return 'old-mill';
  if (id.includes('river-oaks')) return 'river-oaks';
  if (id.includes('bonneville')) return 'bonneville';
  if (id.includes('glendale')) return 'glendale';
  if (id.includes('mountain-dell')) return 'mountain-dell';
  if (id.includes('forest-dale')) return 'forest-dale';
  return 'murray-parkway';
}

function makeFallbackUrl(name: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${name} tee times`)}`;
}

function buildCourse(raw: RawCatalogCourse): CatalogCourse {
  const bookingUrl = raw.bookingUrl ?? makeFallbackUrl(raw.name);
  const supports18 = raw.holes.includes(18);

  return {
    id: raw.id,
    name: raw.name,
    city: raw.city,
    state: 'UT',
    distance: raw.distance,
    holes: raw.holes.includes(9) && raw.holes.includes(18) ? [9, 18] : raw.holes.includes(18) ? [18] : [9],
    imageId: getImageId(raw.id),
    rating: raw.access === 'private' ? 4.6 : raw.provider === 'chronogolf' ? 4.3 : 4.0,
    reviewCount: raw.provider === 'chronogolf' ? 100 : 0,
    address: raw.address,
    phone: 'Call course',
    website: bookingUrl,
    par: supports18 ? 72 : 36,
    yards: supports18 ? 6800 : 3200,
    description: `${raw.name} in ${raw.city}, Utah.`,
    teeTimes: [],
    access: raw.access,
    provider: raw.provider,
    bookingUrl,
    chronogolfCourseIds: raw.chronogolfCourseIds,
    liveTeeTimesEnabled: raw.provider === 'chronogolf' && !!raw.chronogolfCourseIds?.length,
  };
}

const rawCatalogCourses: RawCatalogCourse[] = [
  { id: 'mick-riley-regulation', name: 'Mick Riley Golf Course', city: 'Murray', distance: 1, holes: [9], address: '421 E Vine St, Murray, UT, 84107-5017', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/mick-riley-slco', chronogolfCourseIds: ['2c99f9f7-e373-47d5-8b16-dd15f332fe57'] },
  { id: 'mick-riley-par-3', name: 'Mick Riley Golf Course', city: 'Murray', distance: 1, holes: [9], address: '421 E Vine St, Murray, UT, 84107-5017', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/mick-riley-slco', chronogolfCourseIds: ['b6cf292e-8323-426d-828e-f3e55a112b8f'] },
  { id: 'murray-parkway', name: 'Murray Parkway Golf Course', city: 'Murray', distance: 3, holes: [18], address: '6345 S Murray Parkway Ave, Murray, UT, 84123-6900', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/murray-parkway-golf-course', chronogolfCourseIds: ['453f0286-168e-4617-a49e-4d2ca6641124'] },
  { id: 'fore-lakes-executive', name: 'Fore Lakes Golf Course', city: 'Murray', distance: 3, holes: [9], address: '1285 W 4700 S, Murray, UT, 84123-3318', access: 'public', provider: 'manual' },
  { id: 'fore-lakes-par-3', name: 'Fore Lakes Golf Course', city: 'Murray', distance: 3, holes: [9], address: '1285 W 4700 S, Murray, UT, 84123-3318', access: 'public', provider: 'manual' },
  { id: 'cottonwood-country-club', name: 'Cottonwood Country Club', city: 'Salt Lake City', distance: 2, holes: [9], address: '1780 E Lakewood Dr, Salt Lake City, UT, 84117-7520', access: 'private', provider: 'manual', bookingUrl: 'https://www.chronogolf.com/club/cottonwood-country-club-utah' },
  { id: 'meadow-brook', name: 'Meadow Brook Golf Course', city: 'Taylorsville', distance: 4, holes: [9, 18], address: '4197 S 1300 W, Taylorsville, UT, 84123-1331', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/meadow-brook-slco', chronogolfCourseIds: ['c3155ad4-2f72-4b4d-80ec-a3b3c08a89db'] },
  { id: 'old-mill', name: 'Old Mill Golf Course', city: 'Salt Lake City', distance: 4, holes: [9, 18], address: '6080 S Wasatch Blvd, Salt Lake City, UT, 84121-3549', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/old-mill-slco', chronogolfCourseIds: ['51eb43b1-d054-46e6-9dc6-dba30a6f9906', 'dd49962c-d6a9-4150-a701-9e547902e664'] },
  { id: 'golf-the-round', name: 'Golf The Round', city: 'Salt Lake City', distance: 4, holes: [9], address: '600 W 3300 S, Salt Lake City, UT, 84119-3320', access: 'public', provider: 'manual' },
  { id: 'nibley-park', name: 'Nibley Park Golf Course', city: 'Salt Lake City', distance: 4, holes: [9], address: '2730 S 700 E, Salt Lake City, UT, 84106-1753', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/nibley-park-golf-course', chronogolfCourseIds: ['997cd01f-4ce8-4462-a459-594762efb606'] },
  { id: 'forest-dale', name: 'Forest Dale Golf Course', city: 'Salt Lake City', distance: 5, holes: [9], address: '2375 S 900 E, Salt Lake City, UT, 84106-2201', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/forest-dale-golf-course', chronogolfCourseIds: ['41ea25ca-ffcb-4f14-a86d-de0ef84510e0'] },
  { id: 'pebblebrook', name: "Schneiter's Pebblebrook Golf Course", city: 'Sandy', distance: 5, holes: [9], address: '8968 S 1300 E, Sandy, UT, 84094-1388', access: 'public', provider: 'manual' },
  { id: 'willow-creek', name: 'Willow Creek Country Club', city: 'Sandy', distance: 5, holes: [18], address: '8505 S Willow Creek Dr, Sandy, UT, 84093-1183', access: 'private', provider: 'manual' },
  { id: 'salt-lake-country-club', name: 'Salt Lake Country Club', city: 'Salt Lake City', distance: 5, holes: [18], address: '2400 E Country Club Dr, Salt Lake City, UT, 84109-1642', access: 'private', provider: 'manual', bookingUrl: 'https://www.chronogolf.com/club/salt-lake-country-club' },
  { id: 'river-oaks', name: 'River Oaks Golf Course', city: 'Sandy', distance: 5, holes: [18], address: '9300 S Riverside Dr, Sandy, UT, 84070-6620', access: 'public', provider: 'manual', bookingUrl: 'https://www.golfnow.com/tee-times/facility/2342-river-oaks/search' },
  { id: 'mountain-view', name: 'Mountain View Golf Course', city: 'West Jordan', distance: 6, holes: [18], address: '2400 W Gardner Ln, West Jordan, UT, 84088-9524', access: 'public', provider: 'manual' },
  { id: 'glendale', name: 'Glendale Golf Course', city: 'Salt Lake City', distance: 6, holes: [9, 18], address: '1630 W 2100 S, Salt Lake City, UT, 84119-1425', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/glendale-golf-course', chronogolfCourseIds: ['547936f8-0f45-4bea-b557-d15a4de485ad', '4984e272-06a5-446a-8e24-8402e3591b7c'] },
  { id: 'bonneville', name: 'Bonneville Golf Course', city: 'Salt Lake City', distance: 7, holes: [9, 18], address: '954 S Connor St, Salt Lake City, UT, 84108-1420', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/bonneville-golf-course', chronogolfCourseIds: ['bc27ab7a-6218-4b61-9aa8-0838f7c44ce3', 'caa8142a-4a42-482b-8d35-4239ce26f7b0'] },
  { id: 'mulligans-meadow', name: "Mulligan's Golf & Games", city: 'South Jordan', distance: 7, holes: [9], address: '692 W South Jordan Pkwy, South Jordan, UT, 84095-3919', access: 'public', provider: 'manual' },
  { id: 'mulligans-ridge', name: "Mulligan's Golf & Games", city: 'South Jordan', distance: 7, holes: [9], address: '692 W South Jordan Pkwy, South Jordan, UT, 84095-3919', access: 'public', provider: 'manual' },
  { id: 'stonebridge-creekside', name: 'Stonebridge Golf Club', city: 'West Valley City', distance: 8, holes: [9], address: '4415 W Links Dr, West Valley City, UT, 84120-8221', access: 'public', provider: 'manual' },
  { id: 'stonebridge-sunrise', name: 'Stonebridge Golf Club', city: 'West Valley City', distance: 8, holes: [9], address: '4415 W Links Dr, West Valley City, UT, 84120-8221', access: 'public', provider: 'manual' },
  { id: 'stonebridge-sagebrush', name: 'Stonebridge Golf Club', city: 'West Valley City', distance: 8, holes: [9], address: '4415 W Links Dr, West Valley City, UT, 84120-8221', access: 'public', provider: 'manual' },
  { id: 'hidden-valley-lakes', name: 'Hidden Valley Country Club', city: 'Sandy', distance: 8, holes: [9], address: '11820 S Highland Dr, Sandy, UT, 84092-7333', access: 'private', provider: 'manual' },
  { id: 'hidden-valley-valley', name: 'Hidden Valley Country Club', city: 'Sandy', distance: 8, holes: [9], address: '11820 S Highland Dr, Sandy, UT, 84092-7333', access: 'private', provider: 'manual' },
  { id: 'hidden-valley-mountain', name: 'Hidden Valley Country Club', city: 'Sandy', distance: 8, holes: [9], address: '11820 S Highland Dr, Sandy, UT, 84092-7333', access: 'private', provider: 'manual' },
  { id: 'ridge-golf-club', name: 'The Ridge Golf Club', city: 'Salt Lake City', distance: 9, holes: [18], address: '5055 S Westridge Blvd, Salt Lake City, UT, 84118-8402', access: 'public', provider: 'manual' },
  { id: 'riverbend', name: 'Riverbend Golf Course', city: 'Riverton', distance: 10, holes: [9, 18], address: '12800 South 1040 West, Riverton, UT, 84065', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/riverbend-slco', chronogolfCourseIds: ['a10735ef-5ac1-4ad1-b5e8-8721c344a1ac', '8ceb87d6-0afb-4361-a633-1b1d3f6e5805'] },
  { id: 'wingpointe', name: 'Wingpointe Golf Course', city: 'Salt Lake City', distance: 10, holes: [18], address: '3602 West 100 North, Salt Lake City, UT, 84104', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/wing-pointe-golf-course', chronogolfCourseIds: ['73196cef-df15-416c-b70d-842079b3adb2'] },
  { id: 'jordan-river-par-3', name: 'Jordan River Par-3', city: 'Salt Lake City', distance: 11, holes: [9], address: '1250 N Redwood Rd, Salt Lake City, UT, 84116', access: 'public', provider: 'manual' },
  { id: 'rose-park', name: 'Rose Park Golf Course', city: 'Salt Lake City', distance: 11, holes: [9, 18], address: '1386 N Redwood Rd, Salt Lake City, UT, 84116-1499', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/rose-park-golf-course', chronogolfCourseIds: ['19a5558e-3821-4935-b6bd-0cbc99693d91', 'f899015b-2109-4028-8640-d670ada581e4'] },
  { id: 'mountain-dell-lake', name: 'Mountain Dell Golf Courses', city: 'Salt Lake City', distance: 11, holes: [9, 18], address: 'Hwy I-80 Exit 134 E Parleys Canyon Blvd, Salt Lake City, UT, 84106', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/mountain-dell-golf-club', chronogolfCourseIds: ['2c162b65-6803-4bad-9a21-4c1ca88bb242', '77dca1a2-edae-47d2-a202-a1e9391cc305'] },
  { id: 'mountain-dell-canyon', name: 'Mountain Dell Golf Courses', city: 'Salt Lake City', distance: 11, holes: [18], address: 'Hwy I-80 Exit 134 E Parleys Canyon Blvd, Salt Lake City, UT, 84106', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/mountain-dell-golf-club', chronogolfCourseIds: ['bd6e3c42-7ae5-4d97-b6d0-60ebf9957a7e'] },
  { id: 'south-mountain', name: 'South Mountain Golf Course', city: 'Draper', distance: 11, holes: [9, 18], address: '1247 E Mike Weir Dr, Draper, UT, 84020-7629', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/south-mountain-slco', chronogolfCourseIds: ['bc4c00f2-435a-4f4a-8d0a-c807d5f515f0', '6b9948eb-a045-4692-9579-7c827c195edd', '9bb16c41-88fe-4f36-a84c-39f74f8aa5f2'] },
  { id: 'eaglewood', name: 'Eaglewood Golf Course', city: 'North Salt Lake', distance: 13, holes: [18], address: '1110 E Eaglewood Dr Ste 2, North Salt Lake, UT, 84054-3391', access: 'public', provider: 'manual' },
  { id: 'copper-golf-club', name: 'Copper Golf Club', city: 'Magna', distance: 13, holes: [9], address: '8975 W 2600 S, Magna, UT, 84044-1154', access: 'public', provider: 'manual', bookingUrl: 'https://www.chronogolf.com/club/copper-golf-club' },
  { id: 'bountiful-ridge', name: 'Bountiful Ridge Golf Club', city: 'Bountiful', distance: 14, holes: [18], address: '2430 Bountiful Blvd, Bountiful, UT, 84010-2402', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/bountiful-ridge-golf-course', chronogolfCourseIds: ['48078d3b-6ec6-488f-9662-84f10cf80e7c'] },
  { id: 'thanksgiving-point', name: 'Thanksgiving Point Golf Club', city: 'Lehi', distance: 16, holes: [18], address: '3300 W Clubhouse Dr, Lehi, UT, 84048-5417', access: 'public', provider: 'manual' },
  { id: 'alpine-country-club', name: 'Alpine Country Club', city: 'Highland', distance: 16, holes: [18], address: '5000 Alpine Country Club Ln, Highland, UT, 84003-9632', access: 'private', provider: 'manual', bookingUrl: 'https://www.chronogolf.com/club/alpine-country-club-utah' },
  { id: 'cedar-hills', name: 'Cedar Hills Golf Club', city: 'Cedar Hills', distance: 17, holes: [18], address: '10640 N Clubhouse Dr, Cedar Hills, UT, 84062-8811', access: 'public', provider: 'manual', bookingUrl: 'https://www.chronogolf.com/club/cedar-hills-golf-club' },
  { id: 'cedar-hills-short-course', name: 'Cedar Hills Golf Club', city: 'Cedar Hills', distance: 17, holes: [9], address: '10640 N Clubhouse Dr, Cedar Hills, UT, 84062-8811', access: 'public', provider: 'manual', bookingUrl: 'https://www.chronogolf.com/club/cedar-hills-golf-club' },
  { id: 'canyons-golf', name: 'Canyons Golf', city: 'Park City', distance: 17, holes: [18], address: '4000 Canyons Resort Dr, Park City, UT, 84098-6546', access: 'public', provider: 'manual' },
  { id: 'lakeside', name: 'Lakeside Golf Course', city: 'West Bountiful', distance: 17, holes: [18], address: '1201 N 1100 W, West Bountiful, UT, 84087-1832', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/lakeside-golf-course-utah', chronogolfCourseIds: ['72f136fb-7ba4-4979-b76f-ab1f293a0070'] },
  { id: 'fox-hollow', name: 'Fox Hollow Golf Club', city: 'American Fork', distance: 18, holes: [18], address: '1400 N 200 E, American Fork, UT, 84003-9128', access: 'public', provider: 'manual' },
  { id: 'park-city-golf-club', name: 'Park City Golf Club', city: 'Park City', distance: 19, holes: [18], address: '1541 Thaynes Canyon Drive, Park City, UT, 84060', access: 'public', provider: 'manual' },
  { id: 'glenwild', name: 'Glenwild Golf Club & Spa', city: 'Park City', distance: 19, holes: [18], address: '7600 Glenwild Dr, Park City, UT, 84098-5587', access: 'private', provider: 'manual' },
  { id: 'ranches', name: 'The Ranches Golf Club', city: 'Eagle Mountain', distance: 20, holes: [18], address: '4128 E Clubhouse Ln, Eagle Mountain, UT, 84005-4468', access: 'public', provider: 'manual' },
  { id: 'park-meadows', name: 'Park Meadows Country Club', city: 'Park City', distance: 20, holes: [18], address: '2000 Meadows Dr, Park City, UT, 84060-7038', access: 'private', provider: 'manual' },
  { id: 'links-at-overlake', name: 'The Links at Overlake', city: 'Tooele', distance: 31, holes: [18], address: '700 Tiger Lane, Tooele, UT, 84074', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/the-links-at-overlake', chronogolfCourseIds: ['72e55d95-fd53-48ce-b5e0-f514f1de564c'] },
  { id: 'oquirrh-hills', name: 'Oquirrh Hills Golf Course', city: 'Tooele', distance: 31, holes: [9], address: '7th St & Edgemont, Tooele, UT, 84074', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/oquirrh-hills-golf-course', chronogolfCourseIds: ['01aa1c40-a1f8-4176-b952-d9f0c1e8132b'] },
  { id: 'sleepy-ridge', name: 'Sleepy Ridge Golf Club', city: 'Orem', distance: 40, holes: [18], address: '700 S Sleepy Ridge Dr, Orem, UT, 84057', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/sleepy-ridge-golf-club', chronogolfCourseIds: ['edad7d72-a685-41eb-a2a9-d93417575695'] },
  { id: 'cascade-fairways', name: 'Cascade Fairways Public Golf Club', city: 'Orem', distance: 40, holes: [18], address: '1313 E 800 N, Orem, UT, 84097', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/cascade-fairways-public-golf-club', chronogolfCourseIds: ['1df738fe-d3d1-4e33-afae-c47035bad0cd'] },
  { id: 'seven-peaks', name: 'Seven Peaks Resort Golf Club', city: 'Provo', distance: 45, holes: [18], address: '1450 E 300 N, Provo, UT, 84606', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/seven-peaks-resort-golf-club', chronogolfCourseIds: ['e67ca3f5-3946-4dbb-b57f-7d5ad3ce6f30'] },
  { id: 'riverside-country-club', name: 'Riverside Country Club', city: 'Provo', distance: 45, holes: [18], address: '2701 N University Ave, Provo, UT, 84604', access: 'private', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/riverside-country-club-utah', chronogolfCourseIds: ['2fe612cb-d517-4d5e-a608-12fbc0767bc3'] },
  { id: 'reserves-east-bay-executive', name: 'The Reserves at East Bay', city: 'Provo', distance: 45, holes: [9], address: '1860 SE Bay Blvd, Provo, UT, 84606', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/the-reserves-at-east-bay', chronogolfCourseIds: ['d732f3ed-c436-4692-865d-fef8d62423fd'] },
  { id: 'reserves-east-bay-championship', name: 'The Reserves at East Bay', city: 'Provo', distance: 45, holes: [18], address: '1860 SE Bay Blvd, Provo, UT, 84606', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/the-reserves-at-east-bay', chronogolfCourseIds: ['f627c561-7c80-4ebf-bb4b-166f9134055c'] },
  { id: 'spanish-oaks', name: 'Spanish Oaks Golf Course', city: 'Spanish Fork', distance: 50, holes: [18], address: '2300 E Powerhouse Rd, Spanish Fork, UT, 84660', access: 'public', provider: 'chronogolf', bookingUrl: 'https://www.chronogolf.com/club/spanish-oaks-golf-course', chronogolfCourseIds: ['c1d6153e-b7fa-41f7-a8aa-ef191d615fbe'] },
];

export const catalogCourses: CatalogCourse[] = rawCatalogCourses.map(buildCourse);

export const trackedCourseCount = catalogCourses.length;
export const chronogolfEnabledCourseCount = catalogCourses.filter(course => course.liveTeeTimesEnabled).length;
export const chronogolfTrackedCourseIds = catalogCourses.flatMap(course => course.chronogolfCourseIds ?? []);
