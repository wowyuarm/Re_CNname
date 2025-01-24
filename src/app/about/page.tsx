'use client'

import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              About Chinese Name Generator
            </h1>
            
            <div className="prose prose-lg">
              <p>
                Chinese Name Generator is a unique tool designed to help non-Chinese speakers create meaningful and culturally appropriate Chinese names. Our service combines modern technology with traditional Chinese naming principles to generate names that reflect your personality and preferences.
              </p>

              <h2>Our Mission</h2>
              <p>
                We aim to bridge the cultural gap by helping people understand and appreciate the art of Chinese naming. Each Chinese name tells a story, and we want to help you create a name that resonates with your identity while respecting Chinese cultural traditions.
              </p>

              <h2>How It Works</h2>
              <ol>
                <li>
                  <strong>Personal Information:</strong> We collect basic information about you, including your English name, gender, interests, and personality traits.
                </li>
                <li>
                  <strong>Preference Questions:</strong> We ask specific questions to understand your preferences for your Chinese name.
                </li>
                <li>
                  <strong>AI-Powered Generation:</strong> Using advanced AI technology, we generate a Chinese name that matches your preferences and personality.
                </li>
                <li>
                  <strong>Cultural Context:</strong> We provide detailed explanations of your name&apos;s meaning and cultural significance.
                </li>
              </ol>

              <h2>Our Technology</h2>
              <p>
                We use state-of-the-art artificial intelligence to analyze your information and generate appropriate Chinese names. Our system is trained on traditional Chinese naming conventions and modern linguistic patterns to ensure authenticity and meaningfulness.
              </p>

              <h2>Cultural Sensitivity</h2>
              <p>
                We take great care to ensure that all generated names are culturally appropriate and respectful. Our system considers both traditional naming conventions and modern preferences to create names that work well in both cultural contexts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}