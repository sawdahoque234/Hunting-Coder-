// pages/api/blogData.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Get the path to the blogData.json file
  const blogDataFilePath = path.join(process.cwd(), "blogData.json");

  try {
    // Read the contents of the JSON file
    const content = fs.readFileSync(blogDataFilePath, "utf-8");
    const blogData = JSON.parse(content);

    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json({ error: "Error reading blog data" });
  }
}
