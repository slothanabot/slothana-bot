import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Slothana Farcaster Bot is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Bot running on port", PORT);
});
