const express = require("express");
const { JSDOM } = require("jsdom");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Serve static files from the React app's build directory
const buildPath = path.join(__dirname, "frontend", "build");
app.use(express.static(buildPath));

function analyzeWords(text) {
  const words = text.toLowerCase().match(/\b[a-z]{2,}\b/g);
  const wordMap = {};

  words.forEach((word) => {
    wordMap[word] = (wordMap[word] || 0) + 1;
  });

  const sortedWords = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
  return sortedWords.slice(0, 10).map(([word, freq]) => ({ word, freq }));
}

app.post("/analyze", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await fetch(url);
    const html = await response.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Remove <script> and <style> elements
    document.querySelectorAll("script, style").forEach((el) => el.remove());

    // Get the visible text content only
    const textContent = document.body.textContent;

    const wordFrequencies = analyzeWords(textContent);

    res.json(wordFrequencies);
  } catch (error) {
    console.error("Error during fetch or processing:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch or analyze the URL content." });
  }
});

// Serve the React app for any other request
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
