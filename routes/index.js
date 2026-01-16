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
  popularCRMData,
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
  productCategoriesDataProvider,
  popularDataCards,
  surveyPlatformStats,
  industryCategories,
  footerStatsDataProvider,
  statesData,
  categoryFranchiseProducts,
  connectCardsData,
  footerStatsExpertConnect,
  industryHeaderData,
  industryOverviewData,
  startupsAndEventsData,
  businessOpportunitiesData,
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
  showPopularCRM: true,

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
  showProductCategoriesDataProvider: true,
  showPopularData: true,
  showSurveyPlatform: true,
  showIndustryCategories: true,
  showFooterStatsDataProvider: true,
  showStatesData: true,
  showCategoryFranchiseProducts: true,
  showConnectCards: true,
  showFooterStatsExpertConnect: true,
  showIndustryHeader: true,
  showIndustryOverview: true,
  showStartupsAndEvents: true,
  showBusinessOpportunities: true,
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
router.get("/productCategoriesDataProvider", (req, res) => res.json(productCategoriesDataProvider));
router.get("/popularData", (req, res) => { res.json(popularDataCards) });
router.get("/surveyPlatformStats", (req, res) => { res.json(surveyPlatformStats) });
router.get("/industryCategories", (req, res) => { res.json(industryCategories) });
router.get("/footerStatsDataProvider", (req, res) => { res.json(footerStatsDataProvider) });
router.get("/statesData", (req, res) => { res.json(statesData) });
router.get("/categoryFranchiseProducts", (req, res) => { res.json(categoryFranchiseProducts) });
router.get("/connectCards", (req, res) => { res.json(connectCardsData) });
router.get("/footerStatsExpertConnect", (req, res) => { res.json(footerStatsExpertConnect) });
router.get("/industryHeader", (req, res) => { res.json(industryHeaderData) });
router.get("/industryOverview", (req, res) => { res.json(industryOverviewData) });
router.get("/startupsAndEvents", (req, res) => { res.json(startupsAndEventsData) });
router.get("/businessOpportunities", (req, res) => { res.json(businessOpportunitiesData) });
router.get("/popularCRM", (req, res) => { res.json(popularCRMData) });


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

router.get("/productCategoriesDataProviderFlags", (req, res) => {
  res.json({ showProductCategoriesDataProvider: featureFlags.showProductCategoriesDataProvider });
});

router.get("/popularDataFlags", (req, res) => {
  res.json({ showPopularData: featureFlags.showPopularData });
});

router.get("/surveyPlatformFlags", (req, res) => {
  res.json({ showSurveyPlatform: featureFlags.showSurveyPlatform });
});

router.get("/industryCategoriesFlags", (req, res) => {
  res.json({ showIndustryCategories: featureFlags.showIndustryCategories });
});

router.get("/footerStatsDataProviderFlags", (req, res) => {
  res.json({ showFooterStatsDataProvider: featureFlags.showFooterStatsDataProvider });
});

router.get("/statesDataFlags", (req, res) => {
  res.json({ showStatesData: featureFlags.showStatesData });
});

router.get("/categoryFranchiseProductsFlags", (req, res) => {
  res.json({ showCategoryFranchiseProducts: featureFlags.showCategoryFranchiseProducts });
});

router.get("/connectCardsFlags", (req, res) => {
  res.json({ showConnectCards: featureFlags.showConnectCards });
});

router.get("/footerStatsExpertConnectFlags", (req, res) => {
  res.json({ showFooterStatsExpertConnect: featureFlags.showFooterStatsExpertConnect });
});

router.get("/industryHeaderFlags", (req, res) => {
  res.json({ showIndustryHeader: featureFlags.showIndustryHeader });
});

router.get("/industryOverviewFlags", (req, res) => {
  res.json({ showIndustryOverview: featureFlags.showIndustryOverview });
});

router.get("/startupsAndEventsFlags", (req, res) => {
  res.json({ showStartupsAndEvents: featureFlags.showStartupsAndEvents });
});

router.get("/businessOpportunitiesFlags", (req, res) => {
  res.json({ showBusinessOpportunities: featureFlags.showBusinessOpportunities });
});

router.get("/popularCRMFlags", (req, res) => {
  res.json({ showPopularCRM: featureFlags.showPopularCRM });
});

export default router;
