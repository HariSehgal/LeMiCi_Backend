import express from "express";
import cors from "cors";
import { partners, productCategories, valueCards, bannerEb2b, footerStatsEb2b
  , productCards
 } from "./init/data.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/partners", (req, res) => {
  res.json(partners);
});

app.get("/api/productCategories", (req, res) => {
  res.json(productCategories);
});

app.get("/api/exploreProductsFlags", (req, res) => {
  res.status(200).json({
    showCategories: true  
  });
});

app.get("/api/valueCards", (req, res) => {
  res.json(valueCards);
});

app.get("/api/bannerEb2b", (req, res) => {
  res.json(bannerEb2b);
});

app.get("/api/bannerFlags", (req, res) => {
  res.status(200).json({
    showBanner1: true,
  });
});

app.get("/api/footerStatsEb2b", (req, res) => {
  res.json(footerStatsEb2b);
});

app.get("/api/footerFlags", (req, res) => {
  res.status(200).json({
    showFooterStats: false,
  });
});

app.get("/api/productCards", (req, res) => {
  res.json(productCards);
});

app.get("/api/productCardsFlags", (req, res) => {
  res.status(200).json({
    showProductCards: true,
  });
});

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})