import express from "express";
import {
  partners,
  productCategories,
  valueCards,
  bannerEb2b,
  footerStatsEb2b,
  productCards,
  supplierData,
  Bats,
  recommendedSuppliers,
  companyProfile,
  productDetails,
  latestProducts,
  statsSection,
  softwareReports,
  softwareCards,
  featuredAssociations,
  footerStatsFeatAssoc,
  associationCards,
  impactSection,
  stateSection,
  associationProfile,
  aboutSection,
  eventsSection,
  capabilityCards,
  researchData,
} from "../init/data.js";

const router = express.Router();

// Feature flags 
const featureFlags = {
  showBanner1: true,
  showFooterStats: true,
  showCategories: true,
  showProductCards: true,
  showSuplierData: true,
  showBats: true,
  showRecommendedSuppliers: true,
  showCompanyProfile: true,
  showProductDetails: true,
  showLatestProducts: true,
  showStatsSection: true,
  showSoftwareReports: true,
  showSoftwareCards: true,
  showFeaturedAssociations: true,
  showFooterStatsFeatAssoc: true,
  showAssociationCards: true,
  showImpactSection: true,
  showStateSection: true,
  showAssociationProfile: true,
  showAboutSection: true,
  showEventsSection: true,
  showCapabilityCards: true,
  showResearchData: true,
};

// ============ DATA ENDPOINTS ============
router.get("/partners", (req, res) => res.json(partners));
router.get("/productCategories", (req, res) => res.json(productCategories));
router.get("/valueCards", (req, res) => res.json(valueCards));
router.get("/bannerEb2b", (req, res) => res.json(bannerEb2b));
router.get("/footerStatsEb2b", (req, res) => res.json(footerStatsEb2b));
router.get("/productCards", (req, res) => res.json(productCards));
router.get("/supplierData", (req, res) => res.json(supplierData));
router.get("/Bats", (req, res) => res.json(Bats));
router.get("/recommendedSuppliers", (req, res) => res.json(recommendedSuppliers));
router.get("/companyProfile", (req, res) => res.json(companyProfile));
router.get("/productDetails", (req, res) => res.json(productDetails));
router.get("/latestProducts", (req, res) => res.json(latestProducts));
router.get("/statsSection", (req, res) => res.json(statsSection));
router.get("/softwareReports", (req, res) => res.json(softwareReports));
router.get("/softwareCards", (req, res) => res.json(softwareCards));
router.get("/featuredAssociations", (req, res) => res.json(featuredAssociations));
router.get("/footerStatsFeatAssoc", (req, res) => res.json(footerStatsFeatAssoc));
router.get("/associationCards", (req, res) => res.json(associationCards));
router.get("/impactSection", (req, res) => res.json(impactSection));
router.get("/stateSection", (req, res) => res.json(stateSection));
router.get("/associationProfile", (req, res) => res.json(associationProfile));
router.get("/aboutSection", (req, res) => res.json(aboutSection));
router.get("/eventsSection", (req, res) => res.json(eventsSection));
router.get("/capabilityCards", (req, res) => res.json(capabilityCards));
router.get("/researchData", (req, res) => res.json(researchData));

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

router.get("/supplierFlags", (req, res) => {
  res.json({ showSuplierData: featureFlags.showSuplierData });
});

router.get("/BatsFlags", (req, res) => {
  res.json({ showBats: featureFlags.showBats });
});

router.get("/recommendedSuppliersFlags", (req, res) => {
  res.json({ showRecommendedSuppliers: featureFlags.showRecommendedSuppliers });
});

router.get("/companyProfileFlags", (req, res) => {
  res.json({ showCompanyProfile: featureFlags.showCompanyProfile });
});

router.get("/productDetailsFlags", (req, res) => {
  res.json({ showProductDetails: featureFlags.showProductDetails });
});

router.get("/latestProductsFlags", (req, res) => {
  res.json({ showLatestProducts: featureFlags.showLatestProducts });
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

router.get("/featuredAssociationsFlags", (req, res) => {
  res.json({ showFeaturedAssociations: featureFlags.showFeaturedAssociations });
});

router.get("/footerStatsFeatAssocFlags", (req, res) => {
  res.json({ showFooterStatsFeatAssoc: featureFlags.showFooterStatsFeatAssoc });
});

router.get("/associationCardsFlags", (req, res) => {
  res.json({ showAssociationCards: featureFlags.showAssociationCards });
});

router.get("/impactSectionFlags", (req, res) => {
  res.json({ showImpactSection: featureFlags.showImpactSection });
});

router.get("/stateSectionFlags", (req, res) => {
  res.json({ showStateSection: featureFlags.showStateSection });
});

router.get("/associationProfileFlags", (req, res) => {
  res.json({ showAssociationProfile: featureFlags.showAssociationProfile });
});

router.get("/aboutSectionFlags", (req, res) => {
  res.json({ showAboutSection: featureFlags.showAboutSection });
});

router.get("/eventsSectionFlags", (req, res) => {
  res.json({ showEventsSection: featureFlags.showEventsSection });
});

router.get("/capabilityCardsFlags", (req, res) => {
  res.json({ showCapabilityCards: featureFlags.showCapabilityCards });
});

router.get("/researchDataFlags", (req, res) => {
  res.json({ showResearchData: featureFlags.showResearchData });
});

export default router;
