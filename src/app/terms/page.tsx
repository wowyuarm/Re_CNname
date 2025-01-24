'use client';

import Layout from '@/components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg">
              <p>
                Last updated: January 23, 2025
              </p>

              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using Chinese Name Generator, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our service.
              </p>

              <h2>Description of Service</h2>
              <p>
                Chinese Name Generator provides a web-based service that generates Chinese names based on user-provided information and preferences. The service uses artificial intelligence to create personalized name suggestions.
              </p>

              <h2>User Responsibilities</h2>
              <p>
                When using our service, you agree to:
              </p>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Use the service for personal, non-commercial purposes</li>
                <li>Not attempt to manipulate or abuse the system</li>
                <li>Not use the service for any illegal or unauthorized purpose</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                The service, including its original content, features, and functionality, is owned by Chinese Name Generator and is protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                The service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not guarantee that:
              </p>
              <ul>
                <li>The service will always be available or uninterrupted</li>
                <li>Generated names will be culturally perfect or universally acceptable</li>
                <li>The results will meet your specific requirements</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Chinese Name Generator be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
              </p>

              <h2>Changes to Service</h2>
              <p>
                We reserve the right to:
              </p>
              <ul>
                <li>Modify or discontinue any part of the service</li>
                <li>Change these terms at any time</li>
                <li>Limit access to certain features</li>
              </ul>

              <h2>Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
              </p>

              <h2>Contact</h2>
              <p>
                For any questions about these Terms of Service, please contact us at{' '}
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