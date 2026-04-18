export default async function handler(req, res) {
  const { start_date, course_ids, holes = '9,18', page = '1', start_time } = req.query;

  if (!start_date || !course_ids) {
    res.status(400).json({ error: 'start_date and course_ids are required' });
    return;
  }

  // Build the query string
  let queryParams = `start_date=${encodeURIComponent(start_date)}&course_ids=${encodeURIComponent(course_ids)}&holes=${encodeURIComponent(holes)}&page=${page}`;
  if (start_time) {
    queryParams += `&start_time=${encodeURIComponent(start_time)}`;
  }

  const endpoint = `https://www.chronogolf.com/marketplace/v2/teetimes?${queryParams}`;

  try {
    // Pass through cookies from the client request to avoid Cloudflare bot detection
    const cookies = req.headers.cookie || '';

    const response = await fetch(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Cookie': cookies,
        'Pragma': 'no-cache',
        'Priority': 'u=1, i',
        'Referer': `https://www.chronogolf.com/club/?date=${start_date}`,
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
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // Pass through Cloudflare cookies in response
    const setCookie = response.headers.get('set-cookie');
    if (setCookie) {
      res.setHeader('Set-Cookie', setCookie);
    }
    
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=240');
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown Chronogolf error' });
  }
}
