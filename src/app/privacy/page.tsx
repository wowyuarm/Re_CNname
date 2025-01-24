 'use client';

import Layout from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg">
              <p>
                Last updated: January 23, 2025
              </p>

              <h2>Introduction</h2>
              <p>
                Chinese Name Generator (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Enter your English name</li>
                <li>Select your gender</li>
                <li>Describe your interests and hobbies</li>
                <li>Share your personality traits</li>
                <li>Answer preference questions</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Generate personalized Chinese names</li>
                <li>Improve our name generation algorithm</li>
                <li>Enhance user experience</li>
                <li>Analyze usage patterns</li>
              </ul>

              <h2>Data Storage</h2>
              <p>
                We do not store any personal information permanently. All information provided is used only for the immediate purpose of generating your Chinese name and is not retained after the session ends.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We use the following third-party services:
              </p>
              <ul>
                <li>Vercel - for hosting and deployment</li>
                <li>ZhipuAI - for name generation</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use essential cookies to ensure the basic functionality of our website. These cookies do not track personal information.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
              </ul>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:wuyuang1007@gmail.com">
                  wuyuang1007@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}