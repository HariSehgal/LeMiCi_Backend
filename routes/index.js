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
  softwareCards,
  supplierData
} from "../init/data.js";

const router = express.Router();

// Feature flags configuration
const featureFlags = {
  showCategories: true,
  showBanner1: true,
  showFooterStats: true,
  showProductCards: true,
  showSupplierSection: true,
  showBats: true,
  showCompanyProfile: true,
  showProductDetails: true,
  showStatsSection: true,
  showSoftwareReports: true,
  showSoftwareCards: true,
};

// Data endpoints
router.get("/partners", (req, res) => {
  res.json(partners);
});

router.get("/productCategories", (req, res) => {
  res.json(productCategories);
});

router.get("/valueCards", (req, res) => {
  res.json(valueCards);
});

router.get("/bannerEb2b", (req, res) => {
  res.json(bannerEb2b);
});

router.get("/footerStatsEb2b", (req, res) => {
  res.json(footerStatsEb2b);
});

router.get("/productCards", (req, res) => {
  res.json(productCards);
});

router.get("/Bats", (req, res) => {
  res.json(Bats);
});

router.get("/companyProfile", (req, res) => {
  res.json(companyProfile);
});

router.get("/productDetails", (req, res) => {
  res.json(productDetails);
});

router.get("/statsSection", (req, res) => {
  res.json(statsSection);
});

router.get("/softwareReports", (req, res) => {
  res.json(softwareReports);
});

router.get("/softwareCards", (req, res) => {
  res.json(softwareCards);
});

router.get("/supplierData", (req, res) => {
  res.json(supplierData);
});

// Flags endpoints
router.get("/flags/exploreProducts", (req, res) => {
  res.json({ showCategories: featureFlags.showCategories });
});

router.get("/flags/banner", (req, res) => {
  res.json({ showBanner1: featureFlags.showBanner1 });
});

router.get("/flags/footer", (req, res) => {
  res.json({ showFooterStats: featureFlags.showFooterStats });
});

router.get("/flags/productCards", (req, res) => {
  res.json({ showProductCards: featureFlags.showProductCards });
});

router.get("/flags/supplierSection", (req, res) => {
  res.json({ showSupplierSection: featureFlags.showSupplierSection });
});

router.get("/flags/bats", (req, res) => {
  res.json({ showBats: featureFlags.showBats });
});

router.get("/flags/companyProfile", (req, res) => {
  res.json({ showCompanyProfile: featureFlags.showCompanyProfile });
});

router.get("/flags/productDetails", (req, res) => {
  res.json({ showProductDetails: featureFlags.showProductDetails });
});

router.get("/flags/statsSection", (req, res) => {
  res.json({ showStatsSection: featureFlags.showStatsSection });
});

router.get("/flags/softwareReports", (req, res) => {
  res.json({ showSoftwareReports: featureFlags.showSoftwareReports });
});

router.get("/flags/softwareCards", (req, res) => {
  res.json({ showSoftwareCards: featureFlags.showSoftwareCards });
});

router.get("/flags/all", (req, res) => {
  res.json(featureFlags);
});

export default router;
