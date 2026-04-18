export default async function handler(req, res) {
  const { start_date, course_ids, holes = '9,18', page = '1' } = req.query;

  if (!start_date || !course_ids) {
    res.status(400).json({ error: 'start_date and course_ids are required' });
    return;
  }

  const endpoint = `https://www.chronogolf.com/marketplace/v2/teetimes?start_date=${encodeURIComponent(start_date)}&course_ids=${encodeURIComponent(course_ids)}&holes=${encodeURIComponent(holes)}&page=${encodeURIComponent(page)}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'User-Agent': 'GolfTime/1.0',
        Accept: 'application/json',
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
