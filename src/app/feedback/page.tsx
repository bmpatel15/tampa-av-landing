'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ParallaxProvider } from 'react-scroll-parallax'
import { useRouter } from 'next/navigation'

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      })

      if (response.ok) {
        // Redirect to a thank you page or show success message
        router.push('/?feedback=success')
      } else {
        throw new Error('Failed to send feedback')
      }
    } catch (error) {
      console.error('Error sending feedback:', error)
      alert('Failed to send feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-8">Share Your Feedback</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Your insights help us improve and deliver better experiences for everyone.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Textarea
                  placeholder="Tell us about your experience..."
                  className="min-h-[200px] p-4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center"
              >
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[200px]"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Feedback'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </ParallaxProvider>
  )
} 