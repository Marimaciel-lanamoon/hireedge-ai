export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { jobTitle, jobDesc, resume } = req.body || {};

    if (!jobTitle || !jobDesc || !resume) {
      return res.status(400).json({
        error: "Missing required fields"
      });
    }

    return res.status(200).json({
      coverLetter: "Demo response for now — backend connected ✅",
      bullets: "• Demo bullet 1\n• Demo bullet 2",
      score: {
        score: 75,
        summary: "Backend is working correctly.",
        keywords: [
          { label: "Leadership", pct: 80 },
          { label: "Operations", pct: 70 },
          { label: "Analysis", pct: 65 },
          { label: "Strategy", pct: 75 },
          { label: "Communication", pct: 85 }
        ],
        tips: "Next step: connect real AI<br>Then add payments"
      }
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
