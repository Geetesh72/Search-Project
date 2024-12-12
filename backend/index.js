import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Elasticsearch client setup
const esClient = new Client({ node: "http://localhost:9200" });
const NODE_NAME = "myelkfirst";

// Autocomplete Endpoint
app.get("/autocomplete", async (req, res) => {
  const query = req.query.query || "";
  try {
    const response = await esClient.search({
      index: NODE_NAME,
      body: {
        size: 0,
        query: {
          bool: {
            must: [
              {
                match_phrase_prefix: {
                  title: {
                    query,
                  },
                },
              },
            ],
          },
        },
        aggs: {
          auto_complete: {
            terms: {
              field: "title.keyword",
              size: 25,
            },
          },
        },
      },
    });
    // Extracting autocomplete suggestions
    const suggestions = response.body.aggregations.auto_complete.buckets.map(
      (bucket) => bucket.key
    );
    res.json({ suggestions });
  } catch (error) {
    console.error("Elasticsearch Error:", error);
    res.status(500).send("Error querying Elasticsearch");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
