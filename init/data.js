export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/lemiciiq/LeMiCi";

const getEb2bPath = (path) => `${IMAGEKIT_BASE_URL}/eB2BImages${path}`;
const getSoftwarePath = (path) => `${IMAGEKIT_BASE_URL}/SoftwareHuntImages${path}`;
const getAssociationPath = (path) => `${IMAGEKIT_BASE_URL}/AssociationImages${path}`;
const getCapabilitiesPath = (path) => `${IMAGEKIT_BASE_URL}/CapabilitiesImages${path}`;
const getContentPagePath = (path) => `${IMAGEKIT_BASE_URL}/ContentPageImages${path}`;
const getDataProviderPath = (path) => `${IMAGEKIT_BASE_URL}/DataProviderImages${path}`;
const getExpertConnectPath = (path) => `${IMAGEKIT_BASE_URL}/ExpertConnectImages${path}`;

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

export const featuredAssociations = [
  {
    id: 1,
    title: "Tech Business Alliance",
    description: "Leading association for technology companies, startups, and innovators fostering collaboration and growth.",
    img: getAssociationPath("/association1.jpg"),
    members: "2,450",
    events: "48",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Finance Council",
    description: "Premier network for financial professionals, banks, and investment firms driving standards.",
    img: getAssociationPath("/association2.jpg"),
    members: "1,820",
    events: "36",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Healthcare Innovators",
    description: "Connecting healthcare providers, researchers, and medical technology companies.",
    img: getAssociationPath("/association3.jpg"),
    members: "3,150",
    events: "52",
    rating: "4.9",
  },
];

export const footerStatsFeatAssoc = [
  { 
    id: 1,
    value: 4000, 
    display: '+', 
    label: 'Businesses',
    highlighted: false
  },
  { 
    id: 2,
    value: 200, 
    display: ' M+', 
    label: 'Products', 
    highlighted: true 
  },
  { 
    id: 3,
    value: 5900, 
    display: '+', 
    label: 'Product Categories',
    highlighted: false
  },
  { 
    id: 4,
    value: 200, 
    display: '+', 
    label: 'Countries & Region',
    highlighted: false
  },
];

export const associationCards = [
  {
    id: 1,
    logo: getAssociationPath("/AIGMF.png"),
    name: "All India Glass Federation",
    location: "Delhi, India",
    desc: "Represents all segments of India's glass industry, from large to small manufacturers.",
    tags: ["Manufacturing", "Glass", "Government"],
    rating: 4,
    reviews: "200k",
  },
  {
    id: 2,
    logo: getAssociationPath("/Alliance.png"),
    name: "Tech Business Alliance",
    location: "Delhi, India",
    desc: "Drives collaboration and growth for tech companies, startups, and innovators.",
    tags: ["Technology", "Innovation", "Startups"],
    rating: 4,
    reviews: "200k",
  },
  {
    id: 3,
    logo: getAssociationPath("/Finance.jpg"),
    name: "Finance Council of India",
    location: "Delhi, India",
    desc: "Connects financial professionals to uphold industry standards and compliance.",
    tags: ["Finance", "Banking", "Investment"],
    rating: 4,
    reviews: "200k",
  },
];

export const impactSection = {
  backgroundImage: getAssociationPath("/ImpactBanner.jpg"),
  subtitle: "A Small Business Authority",
  title: "Serves Indian Businesses To",
  highlight: "Engage, Enable, Elevate & Excel",
  description: "Helping industry in India to be trusted around the world.",
  stats: [
    {
      id: 1,
      value: "3.6M",
      label: "Businesses Engaged Annually"
    },
    {
      id: 2,
      value: "6.3M",
      label: "MSMEs India"
    },
    {
      id: 3,
      value: "1,500+",
      label: "Enablers Partnered"
    },
    {
      id: 4,
      value: "1200+",
      label: "Live Events Annually"
    }
  ]
};

export const stateSection = {
  searchPlaceholder: "Search state...",
  totalStates: "50+ States & Union Territories",
  state: {
    name: "Andhra Pradesh",
    subtitle: "Business Ecosystem Overview",
    image: getAssociationPath("/andhra-pradesh.png"),
    stats: [
      {
        id: 1,
        value: "15+",
        label: "Projects Completed"
      },
      {
        id: 2,
        value: "20+",
        label: "Business Consultants"
      }
    ],
    description: "Andhra Pradesh is the second largest producer of cotton and raw silk in India. The state has a strong textile industry base consisting of handlooms, handicrafts, spinning and processing units. The state has integrated apparel city in Vizag with an innovative concept of \"Fibre to Store\".",
    bottomBar: [
      {
        id: 1,
        icon: "Factory",
        title: "Key Industries",
        description: "Textiles, IT, Pharmaceuticals, Agriculture"
      },
      {
        id: 2,
        icon: "Users",
        title: "Major Associations",
        description: "FAPCCI, APTIC, Textile Alliance"
      },
      {
        id: 3,
        icon: "TrendingUp",
        title: "Business Growth",
        description: "18% YoY in manufacturing sector"
      }
    ],
    highlights: [
      {
        id: 1,
        icon: "Lightbulb",
        title: "Innovation Hubs",
        description: "Multiple innovation centers and incubators supporting startups and SMEs with mentorship, funding, and infrastructure."
      },
      {
        id: 2,
        icon: "Rocket",
        title: "Startup Ecosystem",
        description: "Growing startup community with government support, angel investors, and venture capital presence."
      },
      {
        id: 3,
        icon: "GraduationCap",
        title: "Skill Development",
        description: "Strong focus on vocational training and skill development programs aligned with industry needs."
      },
      {
        id: 4,
        icon: "Building",
        title: "Infrastructure",
        description: "Well-developed industrial parks, SEZs, ports, and connectivity through road, rail, and air networks."
      }
    ]
  }
};

export const associationProfile = {
  logo: getAssociationPath("/Alliance.png"),
  name: "Tech Business Alliance",
  isVerified: true,
  tags: ["Technology", "Innovation", "Startups", "Digital Transformation"],
  description: "Leading the future of technology innovation through collaboration, education, and advocacy. Join the premier association for tech entrepreneurs and innovators.",
  rating: {
    stars: 4.5,
    likes: "107"
  },
  socialMedia: [
    { id: 1, platform: "youtube", url: "#", color: "text-red-500" },
    { id: 2, platform: "facebook", url: "#", color: "text-[#1877F2]" },
    { id: 3, platform: "instagram", url: "#", color: "text-[#E4405F]" },
    { id: 4, platform: "twitter", url: "#", color: "text-[#1DA1F2]" },
    { id: 5, platform: "pinterest", url: "#", color: "text-[#E60023]" }
  ]
};

export const aboutSection = {
  stats: [
    { 
      id: 1, 
      label: "Founded", 
      value: "2010", 
      icon: "BsCalendarDate" 
    },
    { 
      id: 2, 
      label: "Headquarters", 
      value: "San Francisco, CA", 
      icon: "GiModernCity" 
    },
    { 
      id: 3, 
      label: "Members", 
      value: "2,450+ Companies", 
      icon: "FaUsers" 
    },
    { 
      id: 4, 
      label: "Industry Focus", 
      value: "Technology & Innovation", 
      icon: "MdLightbulbOutline" 
    },
    { 
      id: 5, 
      label: "Geographic Reach", 
      value: "Global", 
      icon: "MdOutlinePublic" 
    },
    { 
      id: 6, 
      label: "Member Satisfaction", 
      value: "96%", 
      icon: "FaStar" 
    }
  ],
  about: {
    title: "About Tech Business Alliance",
    subtitle: "Empowering technology businesses to thrive in a rapidly evolving digital landscape.",
    description: "The Tech Business Alliance (TBA) is the premier association for technology companies, startups, and digital innovators. Founded in 2010, we have grown to become one of the most influential voices in the technology sector, representing over 2,450 member companies across the globe.",
    image: getAssociationPath("/indAssoc1.jpg")
  },
  vision: {
    title: "Our Vision",
    description: "We envision a world where technology businesses of all sizes can thrive, innovate, and create positive impact. Through our programs, advocacy efforts, and community initiatives, we're building a sustainable and inclusive technology ecosystem that benefits everyone.",
    whatWeDoTitle: "What We Do",
    whatWeDoDescription: "We offer a comprehensive suite of services designed to support technology businesses at every stage of their journey. From early-stage startups to established enterprises, our members benefit from networking events, educational programs, policy advocacy, market intelligence, and strategic partnerships that drive growth and innovation.",
    image: getAssociationPath("/indAssoc2.jpg")
  }
};

export const eventsSection = {
  tabs: [
    { id: 1, label: "Upcoming Events & Programs", active: true },
    { id: 2, label: "Leadership Team", active: false },
    { id: 3, label: "What Our Members Say", active: false }
  ],
  subtitle: "Join us at our signature events and educational programs",
  events: [
    {
      id: 1,
      title: "Tech Innovation Summit 2025",
      date: "December 15, 2025",
      description: "Our flagship annual conference bringing together 1,000+ tech leaders to explore emerging technologies, share insights, and forge partnerships.",
      attendees: "1,000+ Attendees",
      location: "Virtual Event",
      image: getAssociationPath("/UpcomingEvents1.jpg"),
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "November 8, 2025",
      description: "Hands-on workshop covering practical applications of AI and ML in business. Learn from industry experts and get certified.",
      attendees: "500+ Attendees",
      location: "New York, NY",
      image: getAssociationPath("/UpcomingEvents2.jpg"),
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "November 22, 2025",
      description: "Watch innovative startups pitch to top investors. Networking reception follows with opportunities to meet founders and VCs.",
      attendees: "1,250+ Attendees",
      location: "Austin, TX",
      image: getAssociationPath("/UpcomingEvents3.jpg"),
    },
  ]
};

export const capabilityCards = [
  {
    id: 1,
    title: "Case Studies",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    img: getCapabilitiesPath("/Card1.jpg"),
  },
  {
    id: 2,
    title: "Our open ecosystem of alliances and acquisitions",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    img: getCapabilitiesPath("/Card2.jpg"),
  },
  {
    id: 3,
    title: "Solution",
    desc: "Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.",
    img: getCapabilitiesPath("/Card3.jpg"),
  },
];

export const researchData = [
  {
    id: 1,
    image: getContentPagePath("/research1.jpg"),
    date: "August 5, 2025",
    title: "3 Key Insights to Optimize Your Media Planning",
    description: "In today's rapidly evolving advertising landscape, precise planning is no longer a luxury—it's essential for success.",
  },
  {
    id: 2,
    image: getContentPagePath("/research2.jpg"),
    date: "August 5, 2025",
    title: "Unlocking Advertising Success in Southeast Asia",
    description: "Discover the emerging advertising trends driving growth and innovation across Southeast Asian markets.",
  },
  {
    id: 3,
    image: getContentPagePath("/research3.jpg"),
    date: "August 5, 2025",
    title: "2025 Global Sports Research",
    description: "How sports sponsorships and media deals are shaping global fan engagement strategies this year.",
  },
  {
    id: 4,
    image: getContentPagePath("/research4.jpg"),
    date: "August 5, 2025",
    title: "No. of Media Research about Covid-19 in India 2020",
    description: "An in-depth look at how the pandemic reshaped media research and content trends across India.",
  },
  {
    id: 5,
    image: getContentPagePath("/research5.jpg"),
    date: "November 5, 2025",
    title: "India: Research on Violent Crime 1990–2023",
    description: "Tracking the evolution of violent crime research in India and its influence on national policy.",
  },
];

export const productCategoriesDataProvider = [
  { id: 1, name: "Geospatial Data", icon: "MdPermDataSetting" },
  { id: 2, name: "Transaction Data", icon: "BsDatabaseFillLock" },
  { id: 3, name: "HR Data", icon: "GoFileBinary" },
  { id: 4, name: "Contact Data", icon: "MdOutlineCable" },
  { id: 5, name: "Risk Data", icon: "LuSquareAsterisk" },
  { id: 6, name: "Telecom Data", icon: "GiNetworkBars" },
  { id: 7, name: "Industry Data", icon: "LiaIndustrySolid" },
  { id: 8, name: "Weather Data", icon: "SiAccuweather" },
  { id: 9, name: "Trade Data", icon: "FaExchangeAlt" },
  { id: 10, name: "Financial Data", icon: "BsDatabase" },
  { id: 11, name: "Energy Data", icon: "HiOutlineLightBulb" },
  { id: 12, name: "Consumer Data", icon: "RiFileLine" },
  { id: 13, name: "Healthcare Data", icon: "MdOutlineHealthAndSafety" },
  { id: 14, name: "Legal Data", icon: "HiOutlineDocumentText" },
  { id: 15, name: "Mobile App Data", icon: "FaMobileAlt" },
  { id: 16, name: "Web Data", icon: "MdDataObject" },
  { id: 17, name: "AI Training Data", icon: "GiArtificialHive" },
  { id: 18, name: "B2B Data", icon: "LuMessageSquareText" },
  { id: 19, name: "Environment Data", icon: "PiPottedPlantBold" },
  { id: 20, name: "Real Estate Data", icon: "MdOutlineRealEstateAgent" },
  { id: 21, name: "Automotive Data", icon: "BsGraphUp" },
  { id: 22, name: "Population Data", icon: "BsFillPeopleFill" },
  { id: 23, name: "Political Data", icon: "BsUiChecksGrid" },
  { id: 24, name: "Hospitality Data", icon: "MdOutlineTravelExplore" },
];

export const popularDataCards = [
  {
    id: 1,
    country: "United Kingdom",
    status: "Actively raising",
    name: "Factori",
    followers: "123 Followers",
    rating: 4.9,
    price: "$5,000",
    description:
      "Our web data graph contains fresh web browsing data of users across that indicates search intent, purchase intent and online.",
    accuracy: "Accuracy 75% to 85%",
    update: "Update 2024",
    tags: ["B2B", "Bundled", "Productivity", "Manufacturer"],
    buttons: ["Company Type", "Source", "Usage", "Download"],
    flagImage: getDataProviderPath("/ukflag.png"),
    logoImage: getDataProviderPath("/cardlogo.jpg"),
  },
  {
    id: 2,
    country: "United Kingdom",
    status: "Actively raising",
    name: "Factori",
    followers: "123 Followers",
    rating: 4.9,
    price: "$5,000",
    description:
      "Our web data graph contains fresh web browsing data of users across that indicates search intent, purchase intent and online.",
    accuracy: "Accuracy 75% to 85%",
    update: "Update 2024",
    tags: ["B2B", "Bundled", "Productivity", "Manufacturer"],
    buttons: ["Company Type", "Source", "Usage", "Download"],
    flagImage: getDataProviderPath("/ukflag.png"),
    logoImage: getDataProviderPath("/cardlogo.jpg"),
  },
  {
    id: 3,
    country: "United Kingdom",
    status: "Actively raising",
    name: "Factori",
    followers: "123 Followers",
    rating: 4.9,
    price: "$5,000",
    description:
      "Our web data graph contains fresh web browsing data of users across that indicates search intent, purchase intent and online.",
    accuracy: "Accuracy 75% to 85%",
    update: "Update 2024",
    tags: ["B2B", "Bundled", "Productivity", "Manufacturer"],
    buttons: ["Company Type", "Source", "Usage", "Download"],
    flagImage: getDataProviderPath("/ukflag.png"),
    logoImage: getDataProviderPath("/cardlogo.jpg"),
  },
];

export const surveyPlatformStats = {
  orgsWorldwide: 260000,
  users: 42000000,
  dailyPredictions: 2400000,
  reviews5Star: 20000,
};

export const industryCategories = [
  { id: 1, name: "Dining Franchise", icon: "FaUtensils" },
  { id: 2, name: "Business Franchise", icon: "FaBusinessTime" },
  { id: 3, name: "Financial Franchise", icon: "FaDollarSign" },
  { id: 4, name: "Cleaning Franchise", icon: "FaBroom" },
  { id: 5, name: "Property Franchise", icon: "FaKey" },
  { id: 6, name: "Learning Franchise", icon: "FaGraduationCap" },
  { id: 7, name: "Health Franchise", icon: "FaHeartbeat" },
  { id: 8, name: "Home Franchise", icon: "FaHome" },
  { id: 9, name: "Services Franchise", icon: "FaTools" },
  { id: 10, name: "Fitness Franchise", icon: "FaDumbbell" },
  { id: 11, name: "Retail Franchise", icon: "FaShoppingBag" },
  { id: 12, name: "Services Provider", icon: "FaCog" },
  { id: 13, name: "Pet Franchise", icon: "FaDog" },
  { id: 14, name: "Beauty Franchise", icon: "FaSpa" },
  { id: 15, name: "Snack Franchise", icon: "FaHamburger" },
  { id: 16, name: "Online Franchise", icon: "FaWifi" },
  { id: 17, name: "Tech Franchise", icon: "FaLaptop" },
  { id: 18, name: "Food Franchise", icon: "FaFish" },
];

export const footerStatsDataProvider = [
  { id: 1, value: 4000, display: "+", label: "Businesses" },
  { id: 2, value: 200, display: "K+", label: "Investors", highlighted: true },
  { id: 3, value: 100, display: "+", label: "Industries" },
  { id: 4, value: 20, display: "k+", label: "Investment size" },
];

export const statesData = [
  {
    id: 1,
    name: "Andhra Pradesh",
    mapImage: getDataProviderPath("/APmap.png"),
    description:
      "Andhra Pradesh is the second largest producer of cotton and raw silk in India. The state has a strong textile industry base consisting of handlooms, handicrafts, spinning, and processing units. The state has integrated apparel city in Vizag with an innovative concept of 'Fibre to score'. The government is providing many initiatives for the textile sector such as offering land for establishing textile and apparel parks, training programs, etc. The state has a good number of textile industries in the districts of Guntur, Chittoor, Kadapa, and Kurnool.",
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Data Completed", value: "20+" },
    ],
  },
  {
    id: 2,
    name: "Gujarat",
    mapImage: getDataProviderPath("/APmap.png"),
    description: "",
    stats: [],
  },
  {
    id: 3,
    name: "Karnataka",
    mapImage: getDataProviderPath("/APmap.png"),
    description: "",
    stats: [],
  },
  {
    id: 4,
    name: "Maharastra",
    mapImage: getDataProviderPath("/APmap.png"),
    description: "",
    stats: [],
  },
  {
    id: 5,
    name: "Telangana",
    mapImage: getDataProviderPath("/APmap.png"),
    description: "",
    stats: [],
  },
  {
    id: 6,
    name: "Uttar Pradesh",
    mapImage: getDataProviderPath("/APmap.png"),
    description: "",
    stats: [],
  },
  {
    id: 7,
    name: "Tamil Nadu",
    mapImage: getDataProviderPath("/APmap.png"),
    description: "",
    stats: [],
  },
];

export const categoryFranchiseProducts = [
  {
    id: 1,
    logo: getDataProviderPath("/successAI.jpg"),
    name: "Success.ai",
    description:
      "Success.ai | B2B Company & Company Data - 28M Verified | Company Profiles Global | Best Price Guarantee & 99% Data Accuracy",
    location: "UK, USA, Germany",
  },
  {
    id: 2,
    logo: getDataProviderPath("/salutary.jpg"),
    name: "Salutary Data",
    description:
      "Company Data | 6.7M+ Total Companies | Company Name, Industry, Employees, Revenue, Website, Address +More",
    location: "Lexington, USA",
  },
  {
    id: 3,
    logo: getDataProviderPath("/coreSignal.jpg"),
    name: "CoreSignal",
    description:
      "Coresignal | Company Data | Firmographic Data | Global 120M+ Records | Largest Professional Network | +Owler +9 Other Sources",
    location: "UK, USA, Germany",
  },
];

export const connectCardsData = [
  {
    id: 1,
    profileImage: getExpertConnectPath("/people/connectperson.jpg"),
    name: "Maria Elliott",
    verified: true,
    title: "Tech lead, Ogilvy Infinity Learn",
    rating: 4,
    bio: "Experienced tech lead specializing in small companies' growth and software development.",
    location: "New York, NY",
    availability: "Available Mon-Fri",
    industries: "EdTech, AI/ML, Productivity, HR",
    hoursContributed: "43,824 h",
    hoursPercentage: 66,
    offerings: [
      { icon: "FaChalkboardTeacher", label: "Training" },
      { icon: "FaBrain", label: "Consulting" },
      { icon: "FaTh", label: "Research analysis" }
    ],
    skills: {
      technical: [
        "Strong programming skills",
        "System architecture",
        "DevOps & CI/CD",
        "Tools & Framework",
        "Code quality & reviews",
      ],
      leadership: [
        "Mentorship",
        "Delegation",
        "Decision making",
        "Project management"
      ],
      communication: [
        "Cross team collaboration",
        "Clear technical writing",
        "Conflict resolution",
        "Stakeholder communication",
      ],
    },
  },
  {
    id: 2,
    profileImage: getExpertConnectPath("/people/connectperson.jpg"),
    name: "Maria Elliott",
    verified: true,
    title: "Tech lead, Ogilvy Infinity Learn",
    rating: 4,
    bio: "Experienced tech lead specializing in small companies' growth and software development.",
    location: "New York, NY",
    availability: "Available Mon-Fri",
    industries: "EdTech, AI/ML, Productivity, HR",
    hoursContributed: "43,824 h",
    hoursPercentage: 66,
    offerings: [
      { icon: "FaChalkboardTeacher", label: "Training" },
      { icon: "FaBrain", label: "Consulting" },
      { icon: "FaTh", label: "Research analysis" }
    ],
    skills: {
      technical: [
        "Strong programming skills",
        "System architecture",
        "DevOps & CI/CD",
        "Tools & Framework",
        "Code quality & reviews",
      ],
      leadership: [
        "Mentorship",
        "Delegation",
        "Decision making",
        "Project management"
      ],
      communication: [
        "Cross team collaboration",
        "Clear technical writing",
        "Conflict resolution",
        "Stakeholder communication",
      ],
    },
  },
];

export const footerStatsExpertConnect = [
  { id: 1, value: 4000, display: " +", label: "Businesses" },
  { id: 2, value: 200, display: " K+", label: "Investors", highlighted: true },
  { id: 3, value: 100, display: "+", label: "Industries" },
  { id: 4, value: 20, display: "k+", label: "Investments" },
];
