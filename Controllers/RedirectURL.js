import URLs from "../Models/URL.js";

export const RedirectURL = async (req, res) => {
  const { shortId } = req.params;

  try {
    const element = await URLs.findById(shortId);

    if (!element) {
      return res.status(404).json({
        ok: false,
        message: "Short URL not found",
      });
    }

    // redirect to original long URL
    res.redirect(element.longUrl);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      ok: false,
      message: "Server Error",
    });
  }
};
