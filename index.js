import express from "express";
import cors from "cors";
import { partners, productCategories, valueCards, bannerEb2b, footerStatsEb2b
  , productCards, Bats, companyProfile, productDetails, statsSection, softwareReports,softwareCards
 } from "./init/data.js";

const app = express();
app.use(cors("*"));

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
    showFooterStats: true,
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

app.get("/api/Bats", (req, res) => {
  res.json(Bats);
});

app.get("/api/BatsFlags", (req, res) => {
  res.status(200).json({
    showBats: true,
  });
});

app.get("/api/companyProfile", (req, res) => {
  res.json(companyProfile);
});

app.get("/api/companyProfileFlags", (req, res) => {
  res.status(200).json({
    showCompanyProfile: true,  
  });
});

app.get("/api/productDetails", (req, res) => {
  res.json(productDetails);
});

app.get("/api/productDetailsFlags", (req, res) => {
  res.status(200).json({
    showProductDetails: true,  
  });
});

app.get("/api/statsSection", (req, res) => {
  res.json(statsSection);
});

app.get("/api/statsSectionFlags", (req, res) => {
  res.status(200).json({
    showStatsSection: true, 
  });
});

app.get("/api/softwareReports", (req, res) => {
  res.json(softwareReports);
});

app.get("/api/softwareReportsFlags", (req, res) => {
  res.status(200).json({
    showSoftwareReports: true,  
  });
});

app.get("/api/softwareCards", (req, res) => {
  res.json(softwareCards);
});

app.get("/api/softwareCardsFlags", (req, res) => {
  res.status(200).json({
    showSoftwareCards: true, 
  });
});

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})