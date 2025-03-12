import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJava, FaDatabase, FaServer, FaUserTie, FaCode, FaCogs, FaShieldAlt, FaNetworkWired, FaUsers, FaLayerGroup, FaDatabase as FaDb, FaCogs as FaCommon, FaBriefcase, FaFolder, FaClock, FaLanguage } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="heading-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-cyan-400">
                Bariatrack
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Empowering small clinics with advanced data collection and analysis capabilities,
              ensuring industry-level data protection and streamlined patient processes.
            </motion.p>
          </motion.div>
      </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-950">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4 text-white">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A comprehensive solution designed to modernize clinic operations and enhance patient care.
        </p>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Data Collection",
                description: "Streamlined patient data collection with intuitive interfaces and automated workflows.",
                icon: <FaDatabase className="w-8 h-8" />,
              },
              {
                title: "Academic Analysis",
                description: "Advanced analytics tools for academic research and clinical studies.",
                icon: <FaReact className="w-8 h-8" />,
              },
              {
                title: "Enterprise Security",
                description: "Industry-level data protection with robust security measures and compliance standards.",
                icon: <FaServer className="w-8 h-8" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="heading-3 mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-gray-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">TechStack</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We use reliable technologies and scalable tools to build robust and efficient solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Spring Boot", 
                category: "Backend",
                icon: <FaJava className="w-8 h-8" />,
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                name: "React", 
                category: "Frontend",
                icon: <FaReact className="w-8 h-8" />,
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                name: "MySQL", 
                category: "Database",
                icon: <FaDatabase className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                name: "Nginx", 
                category: "DevOps",
                icon: <FaServer className="w-8 h-8" />,
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                name: "AlmaLinux", 
                category: "DevOps",
                icon: <FaCogs className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                name: "MVC Architecture", 
                category: "Architecture",
                icon: <FaLayerGroup className="w-8 h-8" />,
                gradient: "from-cyan-500 to-blue-500"
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                }}
                className="group relative bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500/50"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <div className="relative z-10">
                  <motion.div 
                    className="text-blue-400 mb-4 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-400 mb-2">{tech.category}</div>
                    <div className="text-xl font-bold text-white">{tech.name}</div>
                  </div>
                </div>
                <motion.div 
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${tech.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  whileHover={{ scaleX: 1 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-white">Architecture Overview</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive system architecture combining modern technologies and best practices.
            </p>
          </motion.div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500/20">
            {/* Architecture Diagram - Turkey Map Style */}
            <div className="relative w-full max-w-4xl mx-auto mb-12">
              {/* Turkey Map Container */}
              <div className="relative">
                {/* Map Regions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Marmara Region - Frontend */}
                  <div className="col-span-1">
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaReact className="w-6 h-6 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">Frontend</h3>
                      </div>
                      <p className="text-gray-300 text-sm">React Application</p>
                    </div>
                  </div>

                  {/* Central Anatolia - API Gateway */}
                  <div className="col-span-1">
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaNetworkWired className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-lg font-semibold text-white">API Gateway</h3>
                      </div>
                      <p className="text-gray-300 text-sm">Nginx Reverse Proxy</p>
                    </div>
                  </div>

                  {/* Eastern Anatolia - Backend */}
                  <div className="col-span-1">
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaJava className="w-6 h-6 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">Backend</h3>
                      </div>
                      <p className="text-gray-300 text-sm">Spring Boot Application</p>
                    </div>
                  </div>

                  {/* Aegean Region - Database */}
                  <div className="col-span-1">
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaDatabase className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-lg font-semibold text-white">Database</h3>
                      </div>
                      <p className="text-gray-300 text-sm">MySQL Database</p>
                    </div>
                  </div>

                  {/* Mediterranean Region - Security */}
                  <div className="col-span-1">
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaShieldAlt className="w-6 h-6 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">Security</h3>
                      </div>
                      <p className="text-gray-300 text-sm">SSL/TLS & Authentication</p>
                    </div>
                  </div>

                  {/* Black Sea Region - Monitoring */}
                  <div className="col-span-1">
                    <div className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaServer className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-lg font-semibold text-white">Monitoring</h3>
                      </div>
                      <p className="text-gray-300 text-sm">System Health & Logs</p>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                    {/* Frontend to API Gateway */}
                    <path
                      d="M 25% 25% L 50% 25%"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* API Gateway to Backend */}
                    <path
                      d="M 50% 25% L 75% 25%"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Backend to Database */}
                    <path
                      d="M 75% 25% L 25% 75%"
                      stroke="url(#gradient3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Security Connections */}
                    <path
                      d="M 50% 25% L 50% 75%"
                      stroke="url(#gradient4)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Monitoring Connections */}
                    <path
                      d="M 75% 25% L 75% 75%"
                      stroke="url(#gradient5)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
                      </linearGradient>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
                      </linearGradient>
                      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Layer Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <FaReact className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="font-semibold text-lg text-white">Frontend Layer</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">React components and state management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">API integration and data fetching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">User interface and interactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                <div className="flex items-center mb-4">
                  <FaNetworkWired className="w-6 h-6 text-cyan-500 mr-3" />
                  <h4 className="font-semibold text-lg text-white">API Gateway</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Request routing and load balancing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">SSL/TLS termination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Security and rate limiting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <FaJava className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="font-semibold text-lg text-white">Backend Layer</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Business logic and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Data processing and validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">API endpoints and controllers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                <div className="flex items-center mb-4">
                  <FaDatabase className="w-6 h-6 text-cyan-500 mr-3" />
                  <h4 className="font-semibold text-lg text-white">Database Layer</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Data storage and retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Data integrity and relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Query optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="font-semibold text-lg text-white">Security Layer</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">SSL/TLS encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Authentication and authorization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Security policies and compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                <div className="flex items-center mb-4">
                  <FaServer className="w-6 h-6 text-cyan-500 mr-3" />
                  <h4 className="font-semibold text-lg text-white">Monitoring Layer</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">System health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Logging and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Architecture Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-white">Backend Architecture</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modular monolithic architecture with dedicated modules for different concerns, powered by Hibernate ORM.
            </p>
          </motion.div>

          <div className="relative">
            {/* Architecture Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "API Module",
                  icon: <FaLayerGroup className="w-8 h-8" />,
                  description: "Dedicated module for REST endpoints and API documentation",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Data Module",
                  icon: <FaDb className="w-8 h-8" />,
                  description: "Database operations and Hibernate ORM integration",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Common Module",
                  icon: <FaCommon className="w-8 h-8" />,
                  description: "Shared utilities and cross-cutting concerns",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Service Module",
                  icon: <FaBriefcase className="w-8 h-8" />,
                  description: "Business logic and domain services",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                  }}
                  className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-blue-500/50"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${module.color} rounded-t-lg`}></div>
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {module.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-center text-white">{module.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{module.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Module Details */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <FaLayerGroup className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="font-semibold text-lg text-white">API Module</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">RESTful endpoints implementation with Spring Web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">API versioning and Swagger documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Request/Response DTOs with validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Global exception handling and error responses</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-center mb-4">
                    <FaDb className="w-6 h-6 text-cyan-500 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Data Module</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Hibernate ORM with JPA annotations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Entity relationships and cascading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Repository pattern with Spring Data JPA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Flyway migrations and schema versioning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <FaCommon className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Common Module</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Utility classes and helper methods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">AOP for logging and security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Shared DTOs and response models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Custom exceptions and annotations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="w-6 h-6 text-cyan-500 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Service Module</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Business logic and domain services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Use case implementations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Transactional management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">External service integrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Architecture Section */}
      <section className="section-padding bg-gray-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-white">Frontend Architecture</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modern React project structure with modular components and organized codebase.
            </p>
          </motion.div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Services",
                  icon: <FaServer className="w-8 h-8" />,
                  description: "API and external service integrations",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Routes",
                  icon: <FaNetworkWired className="w-8 h-8" />,
                  description: "Route configurations and navigation",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Pages",
                  icon: <FaBriefcase className="w-8 h-8" />,
                  description: "Page components and views",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Layouts",
                  icon: <FaLayerGroup className="w-8 h-8" />,
                  description: "Page layouts and templates",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                  }}
                  className="relative bg-gray-700/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600 hover:border-blue-500/50"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-lg`}></div>
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-center text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Hooks",
                  icon: <FaCode className="w-8 h-8" />,
                  description: "Custom React hooks",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Components",
                  icon: <FaReact className="w-8 h-8" />,
                  description: "Reusable UI components",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Assets",
                  icon: <FaFolder className="w-8 h-8" />,
                  description: "Static resources and media files",
                  color: "from-blue-500 to-cyan-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                  }}
                  className="relative bg-gray-700/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600 hover:border-blue-500/50"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-lg`}></div>
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-center text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <FaServer className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Services</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">API integration services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">External service connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Data transformation services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Authentication services</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-center mb-4">
                    <FaNetworkWired className="w-6 h-6 text-cyan-500 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Routes</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Route configurations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Navigation guards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Route parameters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Nested routes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Pages</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Page components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">View templates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Page-specific logic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Page state management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-center mb-4">
                    <FaLayerGroup className="w-6 h-6 text-cyan-500 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Layouts</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Layout templates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Header and footer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Navigation structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Responsive layouts</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <FaCode className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Hooks</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Custom React hooks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">State management hooks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Effect hooks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Context hooks</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-center mb-4">
                    <FaReact className="w-6 h-6 text-cyan-500 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Components</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">UI components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Form components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Data components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Modal components</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <FaFolder className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="font-semibold text-lg text-white">Assets</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Images and icons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Styles and themes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Fonts and typography</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-300">Media files</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Implementation Section */}
      <section className="section-padding bg-gray-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-white">Advanced DevOps Implementation</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Innovative development workflow with secure VPN integration for seamless collaboration and real-time testing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Secure VPN Integration",
                description: "Enterprise-grade VPN connection to production servers, enabling secure remote development and testing.",
                icon: <FaShieldAlt className="w-8 h-8" />,
                details: [
                  "Encrypted communication channels",
                  "Role-based access control",
                  "Secure remote development environment"
                ]
              },
              {
                title: "Real-time Development",
                description: "Developers can work directly with production-like environments, ensuring consistent behavior across all stages.",
                icon: <FaNetworkWired className="w-8 h-8" />,
                details: [
                  "Direct access to production servers",
                  "CORS handling through VPN",
                  "Real-time testing capabilities"
                ]
              },
              {
                title: "Collaborative Workflow",
                description: "Seamless sharing of development progress with team members through secure VPN channels.",
                icon: <FaUsers className="w-8 h-8" />,
                details: [
                  "Instant code sharing",
                  "Team-wide visibility",
                  "Synchronized development environment"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-blue-500/50"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-center text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-white">Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the talented individuals behind Bariatrack, bringing together expertise in development, operations, and engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Serhat Erdem",
                role: "DevOps & Backend Engineer",
                icon: <FaCogs className="w-8 h-8" />,
                description: "Leading infrastructure and backend development with expertise in DevOps practices."
              },
              {
                name: "Yavuz Samet Kan",
                role: "Frontend Developer",
                icon: <FaReact className="w-8 h-8" />,
                description: "Creating intuitive and responsive user interfaces with modern frontend technologies."
              },
              {
                name: "Samet Berkant Koca",
                role: "Backend Engineer",
                icon: <FaJava className="w-8 h-8" />,
                description: "Developing robust backend solutions with Spring Boot and enterprise architecture."
              },
              {
                name: "Ahmet Suat Can",
                role: "Frontend & DevOps Engineer",
                icon: <FaCode className="w-8 h-8" />,
                description: "Bridging frontend development and DevOps practices for seamless deployment."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-blue-500/50"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {member.icon}
                </div>
                <h3 className="font-semibold text-xl mb-1 text-white">{member.name}</h3>
                <div className="text-blue-400 mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

