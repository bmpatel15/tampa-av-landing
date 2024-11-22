'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, PenTool, BookOpen, Users, GraduationCap, Heart, PlayCircle, Volume2, Zap, Headphones } from 'lucide-react'
import Link from 'next/link'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

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
  
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 
                    text-lg px-8 py-6 rounded-full shadow-lg
                    transition-all duration-300 hover:shadow-xl
                    hover:scale-105 active:scale-95"
                >
                  Join Our Volunteer Team
                </Button>
              </motion.div>
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl font-bold text-center mb-12"
            >
              Quick Access
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <FileText className="w-12 h-12" />, title: "Live Cue Sheet", link: "/live-cue-sheet", color: "from-blue-400 to-blue-600" },
                { icon: <PenTool className="w-12 h-12" />, title: "Graphic Request Form", link: "/graphic-request", color: "from-green-400 to-green-600" },
                { icon: <BookOpen className="w-12 h-12" />, title: "LMS System", link: "/lms", color: "from-purple-400 to-purple-600" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="h-full"
                >
                  <Link href={item.link} className="block h-full">
                    <div className={`bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between`}>
                      <div className={`mb-4 inline-block p-4 rounded-full bg-gradient-to-r ${item.color}`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">Click to access</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities Section */}
        <section className="py-20 bg-gray-100 relative overflow-hidden">
          <Parallax translateY={[-15, 15]} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white opacity-50"></div>
          </Parallax>
          <div className="container mx-auto px-4 md:px-0 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl font-bold text-center mb-12"
            >
              Volunteer Opportunities
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <PlayCircle className="w-12 h-12" />, title: "Video Production" },
                { icon: <Volume2 className="w-12 h-12" />, title: "Audio Engineering" },
                { icon: <Zap className="w-12 h-12" />, title: "Live Event Support" },
                { icon: <Headphones className="w-12 h-12" />, title: "Podcast Creation" },
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center h-full"
                >
                  <div className="mb-4 text-primary">{opportunity.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground">Join our team and make a difference in {opportunity.title.toLowerCase()}.</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-xl mb-8">Join our volunteer team and help create amazing audiovisual experiences!</p>
              <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-96 bg-white text-black"
                />
                <Button size="lg" className="w-full md:w-auto bg-white text-primary hover:bg-gray-200">
                  Sign Up to Volunteer
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
          <Parallax translateY={[-10, 10]} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>
          </Parallax>
          <div className="container mx-auto px-4 md:px-0 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Our Mission</a></li>
                  <li><a href="#" className="hover:text-gray-300">Impact Stories</a></li>
                  <li><a href="#" className="hover:text-gray-300">Meet the Team</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Volunteer Opportunities</a></li>
                  <li><a href="#" className="hover:text-gray-300">Donate Equipment</a></li>
                  <li><a href="#" className="hover:text-gray-300">Partner with Us</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                  <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                  <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p>&copy; {new Date().getFullYear()} AudioVisual Volunteers. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}