import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let stats = [];

app.post("/api/stats", (req, res) => {
  stats.push(req.body);
  res.json({ status: "ok", total: stats.length });
});

app.get("/api/stats", (req, res) => {
  res.json(stats);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(\`✅ Backend running on port \${PORT}\`));
