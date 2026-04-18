export default async function handler(req, res) {
  const { start_date, course_ids, holes = '9,18', page = '1' } = req.query;

  if (!start_date || !course_ids) {
    res.status(400).json({ error: 'start_date and course_ids are required' });
    return;
  }

  const endpoint = `https://www.chronogolf.com/marketplace/v2/teetimes?start_date=${encodeURIComponent(start_date)}&course_ids=${encodeURIComponent(course_ids)}&holes=${encodeURIComponent(holes)}&page=${page}`;

  try {
    // First, visit the home page to get Cloudflare token
    const homePageResponse = await fetch('https://www.chronogolf.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    const cfCookies = homePageResponse.headers.get('set-cookie') || '';

    // Now call the API with those cookies
    const response = await fetch(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Cookie': cfCookies,
        'Pragma': 'no-cache',
        'Priority': 'u=1, i',
        'Referer': 'https://www.chronogolf.com/club/mick-riley-slco',
        'Sec-Ch-Ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
      },
    });

    const body = await response.text();
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=240');
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown Chronogolf error' });
  }
}
