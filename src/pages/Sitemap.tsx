import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Calculator, 
  Phone, 
  BookOpen,
  MapPin,
  ChevronRight
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="h-6 w-6" />,
      links: [
        { name: "Home", path: "/", description: "Welcome to Sri Shiridi Sai Solar" },
        { name: "Services", path: "/services", description: "Solar installation services we offer" },
        { name: "About Us", path: "/about", description: "Learn about our company and mission" },
        { name: "Solar Calculator", path: "/solar-calculator", description: "Calculate your solar savings" },
        { name: "Contact", path: "/contact", description: "Get in touch with our team" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
      ]
    },
    {
      title: "Blog & Resources",
      icon: <BookOpen className="h-6 w-6" />,
      links: [
        { 
          name: "Blog", 
          path: "/blog", 
          description: "Solar energy insights and guides" 
        },
        { 
          name: "PM Surya Ghar Yojana 2025 - Complete Guide", 
          path: "/blog/pm-surya-ghar-subsidy-complete-guide-2025", 
          description: "Get up to ₹78,000 subsidy on solar installation" 
        },
      ]
    },
    {
      title: "Krishna District - Solar Guides",
      icon: <MapPin className="h-6 w-6" />,
      links: [
        { name: "Solar Energy in Vijayawada", path: "/blog/solar-energy-vijayawada-guide-2024", description: "Complete solar guide for Vijayawada" },
        { name: "Solar Energy in Machilipatnam", path: "/blog/solar-energy-machilipatnam-guide-2024", description: "Solar solutions in Machilipatnam" },
        { name: "Solar Energy in Gudivada", path: "/blog/solar-energy-gudivada-guide-2024", description: "Solar installation in Gudivada" },
        { name: "Solar Energy in Nuzvid", path: "/blog/solar-energy-nuzvid-guide-2024", description: "Solar services in Nuzvid" },
        { name: "Solar Energy in Jaggaiahpet", path: "/blog/solar-energy-jaggaiahpet-guide-2024", description: "Solar panels in Jaggaiahpet" },
        { name: "Solar Energy in Nandigama", path: "/blog/solar-energy-nandigama-guide-2024", description: "Solar power in Nandigama" },
      ]
    },
    {
      title: "Guntur District - Solar Guides",
      icon: <MapPin className="h-6 w-6" />,
      links: [
        { name: "Solar Energy in Guntur", path: "/blog/solar-energy-guntur-guide-2024", description: "Complete solar guide for Guntur" },
        { name: "Solar Energy in Tenali", path: "/blog/solar-energy-tenali-guide-2024", description: "Solar solutions in Tenali" },
        { name: "Solar Energy in Bapatla", path: "/blog/solar-energy-bapatla-guide-2024", description: "Solar installation in Bapatla" },
        { name: "Solar Energy in Narasaraopet", path: "/blog/solar-energy-narasaraopet-guide-2024", description: "Solar services in Narasaraopet" },
        { name: "Solar Energy in Ponnur", path: "/blog/solar-energy-ponnur-guide-2024", description: "Solar panels in Ponnur" },
        { name: "Solar Energy in Vinukonda", path: "/blog/solar-energy-vinukonda-guide-2024", description: "Solar power in Vinukonda" },
      ]
    },
    {
      title: "Visakhapatnam District - Solar Guides",
      icon: <MapPin className="h-6 w-6" />,
      links: [
        { name: "Solar Energy in Visakhapatnam", path: "/blog/solar-energy-visakhapatnam-guide-2024", description: "Complete solar guide for Vizag" },
        { name: "Solar Energy in Anakapalle", path: "/blog/solar-energy-anakapalle-guide-2024", description: "Solar solutions in Anakapalle" },
        { name: "Solar Energy in Narsipatnam", path: "/blog/solar-energy-narsipatnam-guide-2024", description: "Solar installation in Narsipatnam" },
        { name: "Solar Energy in Yelamanchili", path: "/blog/solar-energy-yelamanchili-guide-2024", description: "Solar services in Yelamanchili" },
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/blue-solar-photo-voltaic-panels-system-producing-renewable-clean-energy-rural-landscape-setting-sun_127089-3464.jpg?semt=ais_hybrid&w=740&q=80')`
        }}></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Website Sitemap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Explore all pages and resources on Sri Shiridi Sai Solar website
          </motion.p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              {/* Section Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-yellow-500">
                  {section.icon}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-yellow-500"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <ChevronRight className="h-4 w-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                          <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                            {link.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Contact our team for personalized assistance with your solar energy needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
              <Link
                to="/solar-calculator"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Solar Calculator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;

