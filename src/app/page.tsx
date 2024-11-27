'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { FileText, PenTool, BookOpen, Users, GraduationCap, Heart } from 'lucide-react'
import Link from 'next/link'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

// First, let's create a custom hamburger button component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute w-full h-0.5 bg-gray-600 transform origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full h-0.5 bg-gray-600"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute w-full h-0.5 bg-gray-600 transform origin-center"
      />
    </div>
  )
}

export default function Component() {
  // Scroll progress animation for the hero section
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  
  const heroTags = ['Continuous Learning', 'Innovation', 'Knowledge Sharing']
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const quickAccessItems = [
    { 
      icon: <FileText className="w-5 h-5" />, 
      title: "Live Cue Sheet", 
      link: "https://livecuesheet.tampa-av.net", 
      active: true
    },
    { 
      icon: <PenTool className="w-5 h-5" />, 
      title: "Graphic Request Form", 
      link: "https://graphicrequest.tampa-av.net", 
      active: false
    },
    { 
      icon: <BookOpen className="w-5 h-5" />, 
      title: "LMS System", 
      link: "https://lms.tampa-av.net", 
      active: false
    }
  ]

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Updated Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                Tampa AV
              </Link>
              
              <div className="flex items-center space-x-6">
                <nav className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-sm font-medium hover:text-primary">
                    Home
                  </Link>
                </nav>
                
                {/* Hamburger Menu Button */}
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors relative"
                  aria-label="Toggle menu"
                >
                  <HamburgerIcon isOpen={isMenuOpen} />
                </button>

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div 
                      ref={menuRef}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                        x: { type: "spring", stiffness: 100, damping: 15 }
                      }}
                      className="absolute top-full right-0 mt-2 w-56 bg-gradient-to-br from-white via-white to-gray-50/80 rounded-md shadow-lg py-2 border border-gray-200/80 backdrop-blur-sm"
                    >
                      {quickAccessItems.map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                            x: { type: "spring", stiffness: 100, damping: 15 }
                          }}
                          className="px-4 py-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-colors"
                        >
                          {item.active ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 hover:text-primary transition-colors"
                            >
                              {item.icon}
                              <span>{item.title}</span>
                            </a>
                          ) : (
                            <div className="flex items-center space-x-2 text-gray-400 cursor-not-allowed">
                              {item.icon}
                              <span>{item.title}</span>
                              <span className="text-xs bg-yellow-100/80 text-yellow-800 px-2 py-0.5 rounded-full ml-auto backdrop-blur-sm">
                                Soon
                              </span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: quickAccessItems.length * 0.1 }}
                      >
                        <div className="border-t border-gray-100/80 my-2"></div>
                        <div className="px-4 py-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-colors">
                          <Link 
                            href="/feedback"
                            className="flex items-center space-x-2 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <FileText className="w-5 h-5" />
                            <span>Send Feedback</span>
                          </Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Add margin-top to the first section to account for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <motion.section 
            ref={heroRef}
            style={{ opacity, scale }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background/90 to-background"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-small" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
            </div>

            {/* Hero content */}
            <div className="relative z-10 text-center max-w-5xl px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative inline-block"
                >
                  <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50"
                    >
                      Elevate
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="block text-foreground"
                    >
                      Our Audiovisual
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/50 to-primary"
                    >
                      Craft
                    </motion.span>
                  </motion.h1>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-wrap justify-center items-center gap-4"
                >
                  <AnimatePresence>
                    {heroTags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 1 + index * 0.2,
                        }}
                        className="text-lg md:text-2xl font-semibold px-6 py-3 rounded-full 
                          border border-primary/20 bg-primary/5 text-primary
                          backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)]
                          hover:bg-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="text-xl md:text-2xl mt-8 font-medium text-muted-foreground"
                >
                  Empowering ourselves and others to create
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="block mt-2 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
                  >
                    impactful experiences
                  </motion.span>
                </motion.p>

              </motion.div>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-500/20 rounded-full blur-3xl"
              />
            </div>
          </motion.section>

          {/* Mission Section */}
          <section className="py-20 px-4 md:px-0 relative overflow-hidden">
            <Parallax translateY={[-20, 20]} className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
            </Parallax>
            <div className="container mx-auto relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-4xl font-bold text-center mb-12"
              >
                Our Mission
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Users className="w-12 h-12" />, title: "Community Engagement", description: "Bringing people together through the power of audiovisual experiences" },
                  { icon: <GraduationCap className="w-12 h-12" />, title: "Skill Development", description: "Providing opportunities for volunteers to learn and grow in the AV field" },
                  { icon: <Heart className="w-12 h-12" />, title: "Impactful Contributions", description: "Creating meaningful audiovisual content for non-profit causes" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="bg-white p-6 rounded-lg shadow-lg text-center h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="mb-4 text-primary">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Access Cards */}
          <section className="py-20 px-4 md:px-0 bg-gray-100 relative overflow-hidden">
            <Parallax translateY={[-15, 15]} className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-100 opacity-50"></div>
            </Parallax>
            <div className="container mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <FileText className="w-8 h-8" />, 
                    title: "Live Cue Sheet", 
                    link: "https://livecuesheet.tampa-av.net", 
                    color: "from-blue-400 to-blue-600",
                    active: true // Set to true when the link is active
                  },
                  { 
                    icon: <PenTool className="w-8 h-8" />, 
                    title: "Graphic Request Form", 
                    link: "https://graphicrequest.tampa-av.net", 
                    color: "from-green-400 to-green-600",
                    active: false // Set to true when the link is active
                  },
                  { 
                    icon: <BookOpen className="w-8 h-8" />, 
                    title: "LMS System", 
                    link: "https://lms.tampa-av.net", 
                    color: "from-purple-400 to-purple-600",
                    active: false // Set to true when the link is active
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="h-full"
                  >
                    {item.active ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block h-full"
                      >
                        <div className={`bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between`}>
                          <div className={`mb-4 p-8 rounded-full bg-gradient-to-r ${item.color} flex flex-col items-center justify-center text-white space-y-2`}>
                            {item.icon}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground">Click to access</p>
                        </div>
                      </a>
                    ) : (
                      <div className="block h-full cursor-not-allowed">
                        <div className={`bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between relative overflow-hidden`}>
                          <div className={`mb-4 p-8 rounded-full bg-gradient-to-r ${item.color} flex flex-col items-center justify-center text-white space-y-2 opacity-50`}>
                            {item.icon}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                          </div>
                          <div className="space-y-1">
                            <p className="text-muted-foreground font-semibold">In Development</p>
                            <p className="text-sm text-muted-foreground">Coming Soon!</p>
                          </div>
                          {/* Optional: Add a "development" badge */}
                          <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            Development
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            <Parallax translateY={[-20, 20]} className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark opacity-50"></div>
            </Parallax>
            <div className="container mx-auto px-4 md:px-0 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <h2 className="text-4xl font-bold mb-4">Help us improve our craft</h2>
                <p className="text-xl mb-8">Your insights are invaluable in our journey toward excellence.<br /> Share your experience to help us deliver even better results.</p>
                <Link href="/feedback">
                  <Button size="lg" className="w-full md:w-auto bg-white text-primary hover:bg-gray-200">
                    Send Feedback
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
            <Parallax translateY={[-10, 10]} className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>
            </Parallax>
            <div className="container mx-auto px-4 md:px-0 relative z-10">
              <div className="mt-12 text-center">
                <p>&copy; {new Date().getFullYear()} AudioVisual Volunteers. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ParallaxProvider>
  )
}