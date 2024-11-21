'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, PenTool, BookOpen, Users, GraduationCap, Heart, PlayCircle, Volume2, Zap, Headphones } from 'lucide-react'
import Link from 'next/link'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

export default function LandingPage() {
  const missionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  })
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          <Parallax translateY={[-20, 20]} className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover opacity-50"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
            </video>
          </Parallax>
          <div className="relative z-10 text-center text-white max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Elevate
                </span>
                <span className="block text-white">
                  Our Audiovisual
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                  Craft
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-8"
            >
              {['Continuous Learning', 'Innovation', 'Knowledge Sharing'].map((text, index) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-lg md:text-2xl font-semibold bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30"
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium text-gray-200"
            >
              Empowering ourselves and others to create
              <span className="block mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                impactful experiences
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                Join Our Volunteer Team
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Mission Section (with scale-on-scroll effect) */}
        <section ref={missionRef} className="py-20 px-4 md:px-0 relative overflow-hidden">
          <Parallax translateY={[-20, 20]} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
          </Parallax>
          <motion.div 
            className="container mx-auto relative z-10"
            style={{ scale, opacity }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Users className="w-12 h-12" />, title: "Community Engagement", description: "Bringing people together through the power of audiovisual experiences" },
                { icon: <GraduationCap className="w-12 h-12" />, title: "Skill Development", description: "Providing opportunities for volunteers to learn and grow in the AV field" },
                { icon: <Heart className="w-12 h-12" />, title: "Impactful Contributions", description: "Creating meaningful audiovisual content for non-profit causes" },
              ].map((item, index) => (
                <Parallax key={index} translateY={[5, -5]} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </Parallax>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quick Access Cards */}
        <section className="py-20 px-4 md:px-0 bg-gray-100 relative overflow-hidden">
          <Parallax translateY={[-15, 15]} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-100 opacity-50"></div>
          </Parallax>
          <div className="container mx-auto relative z-10">
            <h2 className="text-4xl font-bold text-center mb-12">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <FileText className="w-12 h-12" />, title: "Live Cue Sheet", link: "/live-cue-sheet", color: "from-blue-400 to-blue-600" },
                { icon: <PenTool className="w-12 h-12" />, title: "Graphic Request Form", link: "/graphic-request", color: "from-green-400 to-green-600" },
                { icon: <BookOpen className="w-12 h-12" />, title: "LMS System", link: "/lms", color: "from-purple-400 to-purple-600" },
              ].map((item, index) => (
                <Parallax key={index} translateY={[10, -10]} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </Parallax>
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
            <h2 className="text-4xl font-bold text-center mb-12">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <PlayCircle className="w-12 h-12" />, title: "Video Production" },
                { icon: <Volume2 className="w-12 h-12" />, title: "Audio Engineering" },
                { icon: <Zap className="w-12 h-12" />, title: "Live Event Support" },
                { icon: <Headphones className="w-12 h-12" />, title: "Podcast Creation" },
              ].map((opportunity, index) => (
                <Parallax key={index} translateY={[10, -10]} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg text-center h-full"
                  >
                    <div className="mb-4 text-primary">{opportunity.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                    <p className="text-muted-foreground">Join our team and make a difference in {opportunity.title.toLowerCase()}.</p>
                  </motion.div>
                </Parallax>
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