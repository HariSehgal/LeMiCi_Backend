import express from "express";
import {
  partners,
  productCategories,
  valueCards,
  bannerEb2b,
  footerStatsEb2b,
  productCards,
  Bats,
  companyProfile,
  productDetails,
  statsSection,
  softwareReports,
  softwareCards
} from "../init/data.js";

const router = express.Router();

// Feature flags 
const featureFlags = {
  showBanner1: true,
  showFooterStats: true,
  showCategories: true,
  showProductCards: true,
  showBats: true,
  showCompanyProfile: true,
  showProductDetails: true,
  showStatsSection: true,
  showSoftwareReports: true,
  showSoftwareCards: true
};

// ============ DATA ENDPOINTS ============
router.get("/partners", (req, res) => res.json(partners));
router.get("/productCategories", (req, res) => res.json(productCategories));
router.get("/valueCards", (req, res) => res.json(valueCards));
router.get("/bannerEb2b", (req, res) => res.json(bannerEb2b));
router.get("/footerStatsEb2b", (req, res) => res.json(footerStatsEb2b));
router.get("/productCards", (req, res) => res.json(productCards));
router.get("/Bats", (req, res) => res.json(Bats));
router.get("/companyProfile", (req, res) => res.json(companyProfile));
router.get("/productDetails", (req, res) => res.json(productDetails));
router.get("/statsSection", (req, res) => res.json(statsSection));
router.get("/softwareReports", (req, res) => res.json(softwareReports));
router.get("/softwareCards", (req, res) => res.json(softwareCards));

// ============ FLAG ENDPOINTS ============
router.get("/bannerFlags", (req, res) => {
  res.json({ showBanner1: featureFlags.showBanner1 });
});

router.get("/footerFlags", (req, res) => {
  res.json({ showFooterStats: featureFlags.showFooterStats });
});

router.get("/exploreProductsFlags", (req, res) => {
  res.json({ showCategories: featureFlags.showCategories });
});

router.get("/productCardsFlags", (req, res) => {
  res.json({ showProductCards: featureFlags.showProductCards });
});

router.get("/BatsFlags", (req, res) => {
  res.json({ showBats: featureFlags.showBats });
});

router.get("/companyProfileFlags", (req, res) => {
  res.json({ showCompanyProfile: featureFlags.showCompanyProfile });
});

router.get("/productDetailsFlags", (req, res) => {
  res.json({ showProductDetails: featureFlags.showProductDetails });
});

router.get("/statsSectionFlags", (req, res) => {
  res.json({ showStatsSection: featureFlags.showStatsSection });
});

router.get("/softwareReportsFlags", (req, res) => {
  res.json({ showSoftwareReports: featureFlags.showSoftwareReports });
});

router.get("/softwareCardsFlags", (req, res) => {
  res.json({ showSoftwareCards: featureFlags.showSoftwareCards });
});

export default router;
