export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  relatedArticles: string[];
  location: string;
  contactForm: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Solar Energy in Chittoor: Complete Guide 2024",
    slug: "solar-energy-chittoor-guide-2024",
    excerpt: "Discover the best solar solutions in Chittoor. Learn about local solar companies, government subsidies, installation costs, and success stories from Chittoor residents.",
    content: `
      <h2>Solar Energy in Chittoor</h2>
      <p>Chittoor in Andhra Pradesh enjoys abundant sunshine and growing solar adoption. With 6-8 hours of sunlight daily and supportive policies, it's ideal for rooftop solar.</p>
      
      <h2>Why Choose Solar in Chittoor?</h2>
      <ul>
        <li>300+ sunny days per year</li>
        <li>Rising electricity tariffs</li>
        <li>Government subsidies and net metering</li>
        <li>Trusted local installers</li>
      </ul>
      
      <h2>Solar Installation Costs in Chittoor</h2>
      <ul>
        <li>1 kW: ₹45,000–₹65,000</li>
        <li>3 kW: ₹1,25,000–₹1,80,000</li>
        <li>5 kW: ₹2,00,000–₹2,80,000</li>
        <li>10 kW: ₹3,80,000–₹5,20,000</li>
      </ul>
      
      <h2>Local Solar Company</h2>
      <p>Vinayaka Solar leads Chittoor with 10+ years of experience, 500+ installs, 24/7 support, and free assessments.</p>
      
      <h2>Government Subsidies</h2>
      <ul>
        <li>PM Surya Ghar: Up to ₹78,000</li>
        <li>State incentives and net metering</li>
      </ul>
      
      <h2>Popular Areas in Chittoor</h2>
      <ul>
        <li>Kattamanchi</li>
        <li>Gandhi Road</li>
        <li>Mittoor</li>
        <li>Santhi Nagar</li>
        <li>Palamaneru Road</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Chittoor offers excellent potential for solar with strong ROI and reliable local service.</p>
    `,
    author: "Vinayaka Solar Team",
    authorBio: "Leading solar energy experts in Chittoor with over 10 years of experience and 500+ successful installations.",
    publishDate: "2024-03-20",
    readTime: "8 min read",
    category: "location-guide",
    tags: ["solar energy Chittoor", "solar panels Chittoor", "solar installation Chittoor", "solar companies Chittoor", "solar cost Chittoor"],
    image: "/images/locations/chittoor-solar.jpg",
    featured: true,
    seoTitle: "Solar Energy in Chittoor 2024 | Best Solar Companies & Installation Costs",
    seoDescription: "Complete guide to solar energy in Chittoor. Installation costs, local companies, subsidies, and success stories.",
    seoKeywords: ["solar energy Chittoor", "solar panels Chittoor", "solar installation Chittoor", "solar companies Chittoor", "solar cost Chittoor", "solar subsidy Andhra Pradesh"],
    relatedArticles: ["solar-energy-tirupati-guide-2024", "solar-energy-madanapalle-guide-2024", "solar-energy-palamaner-guide-2024"],
    location: "Chittoor",
    contactForm: true
  },
  {
    id: "2",
    title: "Solar Energy in Tirupathi: Complete Guide 2024",
    slug: "solar-energy-tirupati-guide-2024",
    excerpt: "Explore solar energy opportunities in Tirupathi. Learn about local solar solutions, installation costs, government subsidies, and success stories from Tirupathi residents.",
    content: `
      <h2>Solar Energy in Tirupathi</h2>
      <p>Tirupathi is rapidly adopting solar energy. Abundant sunshine and strong demand make it ideal for residential and commercial solar.</p>
      
      <h2>Solar Potential in Tirupathi</h2>
      <ul>
        <li>Sunshine hours: 6-7 hours daily average</li>
        <li>Solar irradiance: 5.5-6.0 kWh/m²/day</li>
        <li>Climate: Tropical with clear skies</li>
        <li>Roof space: Abundant residential and commercial</li>
      </ul>
      
      <h2>Installation Costs in Tirupathi</h2>
      <p>Typical solar system costs:</p>
      <ul>
        <li>2 kW: ₹85,000-₹1,20,000</li>
        <li>5 kW: ₹2,00,000-₹2,80,000</li>
        <li>10 kW: ₹3,80,000-₹5,20,000</li>
        <li>Commercial: ₹8-12 per watt</li>
      </ul>
      
      <h2>Local Solar Expertise</h2>
      <p>Vinayaka Solar serves Tirupathi with:</p>
      <ul>
        <li>Local office and support team</li>
        <li>Quick installation services</li>
        <li>Maintenance and monitoring</li>
        <li>Customer training programs</li>
      </ul>
      
      <h2>Government Support</h2>
      <ul>
        <li>PM Solar Scheme subsidies</li>
        <li>State government incentives</li>
        <li>Municipal corporation support</li>
        <li>Net metering facilities</li>
      </ul>
      
      <h2>Popular Areas for Solar</h2>
      <ul>
        <li>RC Road</li>
        <li>Renigunta Road</li>
        <li>Sri Padmavati Area</li>
        <li>Alipiri</li>
        <li>Tiruchanur</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Local businesses and residents have achieved significant savings. A hotel near Alipiri saved ₹15,000 monthly with a 25kW commercial system.</p>
      
      <h2>Conclusion</h2>
      <p>Tirupathi offers excellent solar opportunities with government support and local expertise. Start your solar journey today.</p>
    `,
    author: "Solar Expert",
    authorBio: "Specialist in Rayalaseema solar installations with extensive knowledge of local market and regulations.",
    publishDate: "2024-03-19",
    readTime: "7 min read",
    category: "location-guide",
    tags: ["solar energy Tirupathi", "solar panels Tirupathi", "solar installation Tirupathi", "solar companies Tirupathi"],
    image: "/images/locations/tirupati-solar.jpg",
    featured: false,
    seoTitle: "Solar Energy in Tirupathi 2024 | Installation Costs & Local Companies",
    seoDescription: "Complete guide to solar energy in Tirupathi. Learn about installation costs, local companies, government subsidies, and success stories.",
    seoKeywords: ["solar energy Tirupathi", "solar panels Tirupathi", "solar installation Tirupathi", "solar companies Tirupathi", "solar cost Tirupathi"],
    relatedArticles: ["solar-energy-chittoor-guide-2024", "solar-energy-madanapalle-guide-2024", "solar-energy-palamaner-guide-2024"],
    location: "Tirupathi",
    contactForm: true
  },
  {
    id: "3",
    title: "Solar Energy in Madhanapalli: Complete Guide 2024",
    slug: "solar-energy-madanapalle-guide-2024",
    excerpt: "Discover solar energy solutions in Madhanapalli. Learn about local solar companies, installation costs, government subsidies, and success stories from Madhanapalli residents.",
    content: `
      <h2>Solar Energy in Madhanapalli</h2>
      <p>Madhanapalli, in the Chittoor district, is adopting solar rapidly. The climate and roof availability make it ideal for rooftop systems.</p>
      
      <h2>Why Solar in Madhanapalli?</h2>
      <ul>
        <li>Abundant sunshine: 6–8 hours daily</li>
        <li>High electricity consumption</li>
        <li>Government incentives & net metering</li>
        <li>Growing residential and commercial demand</li>
      </ul>
      
      <h2>Solar Installation Costs</h2>
      <p>Typical costs in Madhanapalli:</p>
      <ul>
        <li>Residential 3 kW: ₹1,25,000-₹1,80,000</li>
        <li>Commercial 25 kW: ₹8,50,000-₹12,00,000</li>
        <li>Industrial 100 kW: ₹30,00,000-₹40,00,000</li>
        <li>After subsidy: 20-30% less</li>
      </ul>
      
      <h2>Local Solar Services</h2>
      <p>Vinayaka Solar provides in Madhanapalli:</p>
      <ul>
        <li>Free site assessment</li>
        <li>Custom solar solutions</li>
        <li>Industrial installations</li>
        <li>24/7 support</li>
        <li>Performance monitoring</li>
      </ul>
      
      <h2>Government Incentives</h2>
      <ul>
        <li>PM Solar Scheme</li>
        <li>State subsidies</li>
        <li>Residential and industrial benefits</li>
      </ul>
      
      <h2>Commercial & Industrial Solar</h2>
      <p>Madhanapalli's commercial sector benefits from:</p>
      <ul>
        <li>Large-scale solar installations</li>
        <li>Energy cost reduction</li>
        <li>Carbon footprint reduction</li>
        <li>Government compliance</li>
      </ul>
      
      <h2>Popular Areas</h2>
      <ul>
        <li>Angallu</li>
        <li>Madnapalle Rural</li>
        <li>Bypass Road</li>
        <li>Teachers Colony</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Madhanapalli offers excellent opportunities for both residential and commercial solar installations with government support and local expertise.</p>
    `,
    author: "Industrial Solar Expert",
    authorBio: "Specialist in industrial solar installations with expertise in Rayalaseema and large-scale projects.",
    publishDate: "2024-03-18",
    readTime: "6 min read",
    category: "location-guide",
    tags: ["solar energy Madhanapalli", "solar panels Madhanapalli", "industrial solar Madhanapalli", "solar companies Madhanapalli"],
    image: "/images/locations/madanapalle-solar.jpg",
    featured: false,
    seoTitle: "Solar Energy in Madhanapalli 2024 | Industrial & Residential Solar Solutions",
    seoDescription: "Complete guide to solar energy in Madhanapalli. Learn about industrial and residential solar solutions, costs, and local companies.",
    seoKeywords: ["solar energy Madhanapalli", "solar panels Madhanapalli", "industrial solar Madhanapalli", "solar companies Madhanapalli", "solar cost Madhanapalli"],
    relatedArticles: ["solar-energy-chittoor-guide-2024", "solar-energy-tirupati-guide-2024", "solar-energy-palamaner-guide-2024"],
    location: "Madhanapalli",
    contactForm: true
  }
];

// Add more articles for other locations
const additionalLocations = [
  "Amalapuram", "Tanuku", "Eluru", "Bhimavaram", "Palakollu", "Narsapur", 
  "Machilipatnam", "Gudivada", "Vijayawada", "Guntur", "Ongole", "Nellore",
  "Tirupathi", "Chittoor", "Madhanapalli", "Sathyavedu", "Puttur", "Nagari", "Palamaneru", "Pileru"
];

additionalLocations.forEach((location, index) => {
  const id = index + 4;
  const slug = `solar-energy-${location.toLowerCase()}-guide-2024`;
  
  articles.push({
    id: id.toString(),
    title: `Solar Energy in ${location}: Complete Guide 2024`,
    slug: slug,
    excerpt: `Discover solar energy solutions in ${location}. Learn about local solar companies, installation costs, government subsidies, and success stories from ${location} residents.`,
    content: `
      <h2>Solar Energy in ${location}</h2>
      <p>${location} is embracing solar energy with enthusiasm. The city's climate and government support make it ideal for solar installations.</p>
      
      <h2>Solar Potential</h2>
      <ul>
        <li>Abundant sunshine throughout the year</li>
        <li>Government subsidies available</li>
        <li>Local solar expertise</li>
        <li>Growing market demand</li>
      </ul>
      
      <h2>Installation Costs</h2>
      <p>Typical costs in ${location}:</p>
      <ul>
        <li>Residential 3 kW: ₹1,25,000-₹1,80,000</li>
        <li>Commercial 25 kW: ₹8,50,000-₹12,00,000</li>
        <li>After subsidy: 20-30% less</li>
      </ul>
      
      <h2>Local Services</h2>
      <p>Vinayaka Solar provides comprehensive solar solutions in ${location} including installation, maintenance, and support.</p>
      
      <h2>Government Support</h2>
      <ul>
        <li>PM Solar Scheme subsidies</li>
        <li>State government incentives</li>
        <li>Net metering facilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>${location} offers excellent opportunities for solar energy adoption with government support and local expertise.</p>
    `,
    author: "Solar Expert",
    authorBio: "Specialist in solar installations across Andhra Pradesh with extensive knowledge of local markets and regulations.",
    publishDate: `2024-03-${17 - index}`,
    readTime: "6 min read",
    category: "location-guide",
    tags: [`solar energy ${location}`, `solar panels ${location}`, `solar installation ${location}`],
    image: `/images/locations/${location.toLowerCase()}-solar.jpg`,
    featured: false,
    seoTitle: `Solar Energy in ${location} 2024 | Installation Costs & Local Companies`,
    seoDescription: `Complete guide to solar energy in ${location}. Learn about installation costs, local companies, government subsidies, and success stories.`,
    seoKeywords: [`solar energy ${location}`, `solar panels ${location}`, `solar installation ${location}`, `solar companies ${location}`],
    relatedArticles: ["solar-energy-visakhapatnam-guide", "solar-energy-rajahmundry-guide", "solar-energy-kakinada-guide"],
    location: location,
    contactForm: true
  });
});

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, count: number = 3): Article[] => {
  return articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, count);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getArticlesByLocation = (location: string): Article[] => {
  return articles.filter(article => article.location === location);
};
