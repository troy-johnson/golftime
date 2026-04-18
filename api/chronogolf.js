export default async function handler(req, res) {
  const { start_date, course_ids, holes = '9,18', page = '1' } = req.query;

  if (!start_date || !course_ids) {
    res.status(400).json({ error: 'start_date and course_ids are required' });
    return;
  }

  const endpoint = `https://www.chronogolf.com/marketplace/v2/teetimes?start_date=${encodeURIComponent(start_date)}&course_ids=${encodeURIComponent(course_ids)}&holes=${encodeURIComponent(holes)}&page=${encodeURIComponent(page)}&currency=USD`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.chronogolf.com/search',
        'Origin': 'https://www.chronogolf.com',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
      },
    });

    const body = await response.text();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=240');
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown Chronogolf error' });
  }
}
