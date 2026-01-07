export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/lemiciiq/LeMiCi";

const getEb2bPath = (path) => `${IMAGEKIT_BASE_URL}/eB2BImages${path}`;
const getSoftwarePath = (path) => `${IMAGEKIT_BASE_URL}/SoftwareHuntImages${path}`;

export const partners = [
  { name: "Adobe", image: getEb2bPath("/sponsors/Adobe.png") },
  { name: "TradeIndia", image: getEb2bPath("/sponsors/TradeIndia.png") },
  { name: "IBM", image: getEb2bPath("/sponsors/IBM.png") },
  { name: "IndiaMart", image: getEb2bPath("/sponsors/IndiaMart.png") },
  { name: "Amazon", image: getEb2bPath("/sponsors/Amazon.png") },
  { name: "Alibaba", image: getEb2bPath("/sponsors/Alibaba.png") },
  { name: "Intel", image: getEb2bPath("/sponsors/Intel.png") },
  { name: "FedEx", image: getEb2bPath("/sponsors/FedEx.png") },
  { name: "Oracle", image: getEb2bPath("/sponsors/Oracle.png") },
];

export const bannerEb2b = [
  { name: "Happy", value: "8,500+", growth: "+25%", icon: "FaRegUserCircle" },
  { name: "Users", value: "25K+", growth: "+32%", icon: "TbUserUp" },
  { name: "Payslips", value: "2.5M+", growth: "+51%", icon: "RiBillLine" }
];

export const productCategories = [
  { name: "Geospatial Data", icon: "MdPermDataSetting" },
  { name: "Transaction Data", icon: "BsDatabaseFillLock" },
  { name: "Human Resources (HR) Data", icon: "GoFileBinary" },
  { name: "Contact Data", icon: "MdOutlineCable" },
  { name: "Risk Data", icon: "LuSquareAsterisk" },
  { name: "Telecom Data", icon: "GiNetworkBars" },
  { name: "Linkedin ProfileData", icon: "FaLinkedin" },
  { name: "Political Data", icon: "BsUiChecksGrid" },
  { name: "Commerce Data", icon: "RiGitBranchLine" },
  { name: "Weather Data", icon: "SiAccuweather" },
  { name: "Trade Data", icon: "FaExchangeAlt" },
  { name: "Financial Data", icon: "BsDatabase" },
  { name: "Market Research Data", icon: "LuFolderGit2" },
  { name: "Consumer Data", icon: "RiFileLine" },
  { name: "Population Data", icon: "BsFillPeopleFill" },
  { name: "B2B Data", icon: "LuMessageSquareText" },
  { name: "AI Training Data", icon: "GiArtificialHive" },
  { name: "Environmental Data", icon: "PiPottedPlantBold" },
  { name: "Real Estate Data", icon: "MdOutlineRealEstateAgent" },
  { name: "Web Data", icon: "MdDataObject" },
  { name: "Mobile App Data", icon: "FaMobileAlt" },
  { name: "Legal Data", icon: "HiOutlineDocumentText" },
  { name: "Healthcare Data", icon: "MdOutlineHealthAndSafety" },
  { name: "Entertainment Data", icon: "FaTv" },
  { name: "Energy Data", icon: "HiOutlineLightBulb" },
  { name: "Industry Data", icon: "LiaIndustrySolid" },
  { name: "Automotive Data", icon: "BsGraphUp" },
  { name: "Hospitality, Travel & Tourism Data", icon: "MdOutlineTravelExplore" },
];

export const valueCards = [
  {
    title: "Buy & Sell with Us",
    desc: "One step solution for your raw material bought and selling needs.",
    icon: "AiOutlineShoppingCart",
  },
  {
    title: "Million of Business Offering",
    desc: "Explore products and suppliers for your business from millions of offering worldwide.",
    icon: "HiOutlineChartBarSquare",
  },
  {
    title: "Assured Quality and Transactions",
    desc: "Ensure production quality from verified suppliers with your orders protected from payment to delivery.",
    icon: "BsFillLightningFill",
  },
  {
    title: "Pan India",
    desc: "Seamless delivery and logistics coverage across every corner of India.",
    icon: "FaRegCreditCard",
  },
  {
    title: "Industry Digital First",
    desc: "World class fulfillment for domestic and international markets.",
    icon: "HiOutlineLightBulb",
  },
];

export const footerStatsEb2b = [
  { value: 200, display: " M+", label: "Products" },
  { value: 200, display: " K+", label: "Supplies", highlighted: true },
  { value: 5900, display: "+", label: "Products categories" },
  { value: 200, display: "+", label: "Countries & Regions" },
];

export const productCards = [
  {
    id: 0,
    itemName: 'Camping Tent',
    tagline: 'Showcasing portable',
    price: 18999,
    reviews: '(2K reviews)',
    description: 'Demonstrate how fast and reliable your tent is. Show it in various environments — rain, wind, or sun.',
    image: getEb2bPath('/productCards/campingTent.jpg'),
  },
  {
    id: 1,
    itemName: 'Gaming Fan',
    tagline: 'Gaming fan with lighting effects',
    price: 1999,
    reviews: '(11K reviews)',
    description: 'Highlight airflow power, noise levels, and RGB lighting. Use dynamic visuals and cooling benchmarks.',
    image: getEb2bPath('/productCards/gamingFan.jpg'),
  },
  {
    id: 2,
    itemName: 'Chess Board',
    tagline: 'Premium chess board showcase',
    price: 1199,
    reviews: '(6K reviews)',
    description: 'Zoom into knight carvings, smooth board glides, and weighted bases. Tell the story behind craftsmanship.',
    image: getEb2bPath('/productCards/chessBoard.jpg'),
  },
  {
    id: 3,
    itemName: 'Studs',
    tagline: 'Lightweight, durable football boots',
    price: 21999,
    reviews: '(107K reviews)',
    description: 'Use slow-motion shots to highlight cutting, turning, and sprinting — built for pro-level play.',
    image: getEb2bPath('/productCards/shoes.jpg'),
  },
  {
    id: 4,
    itemName: 'Cricket Bat',
    tagline: 'English willow',
    price: 24999,
    reviews: '(203K reviews)',
    description: "Highlight the bat's sweet spot, stroke power, and grip with slow-motion shots.",
    image: getEb2bPath('/productCards/cricketBat.png'),
  },
  {
    id: 5,
    itemName: 'Synthetic Ball',
    tagline: 'Weatherproof cricket ball display',
    price: 599,
    reviews: '(35K reviews)',
    description: 'Show bounce, grip, and seam control under various surfaces.',
    image: getEb2bPath('/productCards/syntheticBall.png'),
  },
  {
    id: 6,
    itemName: 'Yoga Equipment',
    tagline: 'Premium yoga gear showcase',
    price: 8999,
    reviews: '(72K reviews)',
    description: 'Demonstrate stretch, grip, and posture support using real-time practice sessions.',
    image: getEb2bPath('/productCards/yogaEquipment.jpg'),
  },
  {
    id: 7,
    itemName: 'Karate Equipment',
    tagline: 'Karate gear and uniform showcase',
    price: 11999,
    reviews: '(3K reviews)',
    description: 'Display the durability and comfort of karate uniform, gloves, and pads in training action.',
    image: getEb2bPath('/productCards/karateEquipment.jpg'),
  },
];

export const supplierData = {
  name: "Jet Tech Private Limited",
  description: "Jet Tech Pvt. Ltd. is a leading manufacturer and exporter of bulk packaging materials and industrial textiles.",
  isVerified: true,
  location: "Vadodara, Gujarat",
  businessType: "B2B",
  establishedYear: "1989",
  followers: "98.9K",
  products: "100+",
  images: {
    main: getEb2bPath("/products/HandBag1.png"),
    small1: getEb2bPath("/products/HandBag2.png"),
    small2: getEb2bPath("/products/HandBag3.png")
  }
};

export const Bats = [
  {
    id: 0,
    itemName: 'MRF',
    price: 21999,
    reviews: '(103K reviews)',
    manufacturer: 'Madras Rubber Factory',
    image: getEb2bPath('/productCards/Bat1.jpg'),
  },
  {
    id: 1,
    itemName: 'English Willow',
    price: 999,
    reviews: '(81K reviews)',
    manufacturer: 'Dsp Enterprises',
    image: getEb2bPath('/productCards/Bat2.png'),
  },
  {
    id: 2,
    itemName: 'Kashmiri Willow',
    price: 999,
    reviews: '(17K reviews)',
    manufacturer: 'Dsp Enterprises',
    image: getEb2bPath('/productCards/Bat3.jpg'),
  },
  {
    id: 3,
    itemName: 'Rubber Mini',
    price: 999,
    reviews: '(7K reviews)',
    manufacturer: 'Kavya Overseas',
    image: getEb2bPath('/productCards/Bat4.jpg'),
  },
  {
    id: 4,
    itemName: 'Himachal Willow',
    price: 999,
    reviews: '(7K reviews)',
    manufacturer: 'Dadu India',
    image: getEb2bPath('/productCards/Bat5.png'),
  },
  {
    id: 5,
    itemName: 'Plastic Bat',
    price: 999,
    reviews: '(5K reviews)',
    manufacturer: 'Vinex Enterprises Pvt. Ltd.',
    image: getEb2bPath('/productCards/Bat6.png'),
  },
  {
    id: 6,
    itemName: 'Poplar Willow',
    price: 999,
    reviews: '(5K reviews)',
    manufacturer: 'Mittal Industries',
    image: getEb2bPath('/productCards/Bat7.jpg'),
  },
  {
    id: 7,
    itemName: 'Local Willow',
    price: 999,
    reviews: '(1K reviews)',
    manufacturer: 'Dsp Enterprises',
    image: getEb2bPath('/productCards/Bat8.png'),
  },
];

export const recommendedSuppliers = [
  {
    id: 1,
    name: "Jet Tech Private Limited",
    description: "Jet Tech Pvt. Ltd. is a leading manufacturer and exporter of bulk packaging materials and industrial textiles.",
    isVerified: true,
    location: "Vadodara, Gujarat",
    businessType: "B2B",
    establishedYear: "1989",
    followers: "98.9K",
    products: "100+",
    images: {
      main: getEb2bPath("/products/HandBag1.png"),
      small1: getEb2bPath("/products/HandBag2.png"),
      small2: getEb2bPath("/products/HandBag3.png")
    }
  },
  {
    id: 2,
    name: "Naike Group Co. Ltd.",
    description: "Naike Group Co., Ltd. is a Chinese company specializing in manufacturing and exporting corporate promotional gifts and sustainable eco-friendly household products.",
    isVerified: true,
    location: "Fujian, China",
    businessType: "B2B",
    establishedYear: "2008",
    followers: "109K",
    products: "100+",
    images: {
      main: getEb2bPath("/products/Cream1.png"),
      small1: getEb2bPath("/products/Cream2.png"),
      small2: getEb2bPath("/products/Cream3.png")
    }
  }
];

export const companyProfile = {
  company: {
    name: "MRF",
    isVerified: true,
    description: "MRF (Madras Rubber Factory) is one of India's leading tyre manufacturing companies, known for producing high-quality tyres for cars, bikes, trucks, and more. Founded in 1946, it has grown into a global brand with a strong presence in motorsports. MRF is also involved in paints, toys (Funskool), and sports gear. It is widely trusted for performance, durability, and innovation.",
    location: "Chennai, T.N, India",
    establishedYear: "1989",
    rating: 4.9,
    foundedYear: "1946",
    isTrustedSeller: true,
    socialMedia: {
      youtube: "https://youtube.com/mrf",
      facebook: "https://facebook.com/mrf",
      instagram: "https://instagram.com/mrf",
      twitter: "https://twitter.com/mrf",
      pinterest: "https://pinterest.com/mrf"
    }
  },
  consultant: {
    name: "Natasha Romanoff",
    isVerified: true,
    bio: "Hi I'm Consultant helping you make smarter, strategic decisions for lasting success.",
    image: getEb2bPath("/images/cardPerson.jpg"),
    rating: 4.7,
    experience: "Expert",
    rate: "Free"
  }
};

export const productDetails = {
  productInfo: {
    modelNumber: "Cricket bats-469P",
    brandName: "MRF",
    origin: "Tamil Nadu, India",
    smallOrders: "Accepted"
  },
  shippingInfo: {
    fobPort: "Xiamen",
    weightPerUnit: "200.0 g",
    htsCode: "1111.11.1111",
    cartonDimensions: "0.6x0.9x0.7 cm",
    leadTime: "15-25 days"
  },
  certification: [
    {
      question: "Product generally confirming to 15 828 (1979), Latest",
      answer: "No"
    },
    {
      question: "Grade of Bat (As per the 15 828-1979, Latest)",
      answer: "Not Applicable"
    },
    {
      question: "Product confirming to international/National federation requirements to International Cricket Council (ICC)",
      answer: "No"
    },
    {
      question: "Certification details from International/National federations like ICC i.e certification agency certificate",
      answer: "N.A."
    },
    {
      question: "Date upto which certification is Valid",
      answer: "N.A."
    }
  ],
  paymentMethods: [
    { name: "Stripe", icon: "FaCcStripe", enabled: true },
    { name: "PayPal", icon: "FaPaypal", enabled: true }
  ]
};

export const latestProducts = [
  {
    id: 1,
    name: "Leather Ball",
    price: "₹1,199",
    desc: "Durable and high-quality leather ball designed for professional cricket play",
    img: getEb2bPath("/products/leatherBall.png"),
    qty: 2,
  },
  {
    id: 2,
    name: "Sony WH-720N",
    price: "₹3,499",
    desc: "High-quality headphones with noise cancellation",
    img: getEb2bPath("/products/headPhones.png"),
    qty: 2,
  },
  {
    id: 3,
    name: "E-sport Jersey",
    price: "₹1,199",
    desc: "Stylish gaming jersey for comfort & performance",
    img: getEb2bPath("/products/esportsjersey.jpg"),
    qty: 2,
  },
];

export const statsSection = [
  {
    value: "2.5M+",
    label: "User reviews",
    bg: "bg-[#E7FFEF]",
    iconBg: "bg-[#05A454]",
    icon: "FaRegUserCircle"
  },
  {
    value: "45,000+",
    label: "Software Solution",
    bg: "bg-[#EEF0FF]",
    iconBg: "bg-[#3C4BFF]",
    icon: "BsDatabase"
  },
  {
    value: "1000+",
    label: "Software Type",
    bg: "bg-[#FFE9F4]",
    iconBg: "bg-[#FF4BB6]",
    icon: "HiOutlineChartBarSquare"
  },
];

export const softwareReports = [
  {
    id: 1,
    logo: getSoftwarePath('/successAI.jpg'),
    name: "Success.ai",
    rating: 5,
    description: "Success.ai | B2B Company & Company Data -28M Verified | Company Profiles Global | Best Price Guarantee & 99% Data Accuracy",
    location: "UK,USA,Germany",
  },
  {
    id: 2,
    logo: getSoftwarePath('/salutary.jpg'),
    name: "Salutary Data",
    rating: 5,
    description: "Company Data | 6.7M+ Total Companies | Company Name, Industry, Employees, Revenue, Website, Address +More",
    location: "Lexington, USA",
  },
  {
    id: 3,
    logo: getSoftwarePath('/coreSignal.jpg'),
    name: "CoreSignal",
    rating: 5,
    description: "Coresignal | Company Data| Firmographic Data | Global 120M+ Records | Largest Professional Network | +9 Other Sources",
    location: "UK,USA,Germany",
  },
  {
    id: 4,
    logo: getSoftwarePath('/successAI.jpg'),
    name: "Success.ai",
    rating: 5,
    description: "Success.ai | B2B Company & Company Data -28M Verified | Company Profiles Global | Best Price Guarantee & 99% Data Accuracy",
    location: "UK,USA,Germany",
  },
];

export const softwareCards = [
  {
    id: 1,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Bitrix24",
    location: "B2B, United Kingdom",
    desc: "Bitrix24 is an all-in-one online workspace that integrates CRM, project management...",
    tags: ["HR", "Ed Tech", "+3"],
    rating: 4,
    reviews: "260k",
  },
  {
    id: 2,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Salesforce",
    location: "B2B, USA",
    desc: "Salesforce is the world's #1 CRM platform, helping businesses connect with customers...",
    tags: ["CRM", "Sales", "+5"],
    rating: 5,
    reviews: "1.2M",
  },
  {
    id: 3,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "HubSpot",
    location: "B2B, USA",
    desc: "HubSpot offers marketing, sales, and service software to help businesses grow better...",
    tags: ["Marketing", "Sales", "+4"],
    rating: 5,
    reviews: "850k",
  },
  {
    id: 4,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Slack",
    location: "B2B, USA",
    desc: "Slack is a collaboration hub that brings teams together, connecting people, information...",
    tags: ["Communication", "Productivity"],
    rating: 4,
    reviews: "500k",
  },
  {
    id: 5,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Zoom",
    location: "B2B, USA",
    desc: "Zoom is a video conferencing platform for virtual meetings, webinars, and collaboration...",
    tags: ["Video", "Communication", "+2"],
    rating: 5,
    reviews: "2.3M",
  },
  {
    id: 6,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Asana",
    location: "B2B, USA",
    desc: "Asana is a work management platform to organize, track, and manage team projects...",
    tags: ["Project Mgmt", "Collaboration"],
    rating: 4,
    reviews: "380k",
  },
  {
    id: 7,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Monday.com",
    location: "B2B, Israel",
    desc: "Monday.com is a Work OS that powers teams to run projects and workflows with confidence...",
    tags: ["Workflow", "Productivity", "+2"],
    rating: 5,
    reviews: "620k",
  },
  {
    id: 8,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Trello",
    location: "B2B, USA",
    desc: "Trello is a visual collaboration tool that creates a shared perspective on any project...",
    tags: ["Kanban", "Project Mgmt"],
    rating: 4,
    reviews: "450k",
  },
  {
    id: 9,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Notion",
    location: "B2B, USA",
    desc: "Notion is an all-in-one workspace for notes, tasks, wikis, and databases...",
    tags: ["Notes", "Wiki", "+3"],
    rating: 5,
    reviews: "920k",
  },
  {
    id: 10,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Dropbox",
    location: "B2B, USA",
    desc: "Dropbox is a cloud storage platform that keeps your files safe, synced, and easy to share...",
    tags: ["Storage", "Cloud", "+1"],
    rating: 4,
    reviews: "710k",
  },
  {
    id: 11,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Google Workspace",
    location: "B2B, USA",
    desc: "Google Workspace is a suite of cloud computing, productivity and collaboration tools...",
    tags: ["Email", "Productivity", "+4"],
    rating: 5,
    reviews: "3.1M",
  },
  {
    id: 12,
    logo: getSoftwarePath('/bitrix.jpg'),
    name: "Microsoft Teams",
    location: "B2B, USA",
    desc: "Microsoft Teams is a collaboration platform that combines workplace chat, meetings, and files...",
    tags: ["Communication", "Microsoft", "+2"],
    rating: 4,
    reviews: "1.8M",
  },
];

