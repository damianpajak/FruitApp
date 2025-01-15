import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/fruit/all", async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.fruityvice.com/api/fruit/all`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data from API");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
