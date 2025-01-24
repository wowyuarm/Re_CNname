'use client';

import type { ReactElement } from 'react';
import Layout from '@/components/Layout';

export default function Page(): ReactElement {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Us
            </h1>
            
            <div className="prose prose-lg">
              <p>
                We value your feedback and are here to help with any questions or concerns you may have about Chinese Name Generator.
              </p>

              <h2>Get in Touch</h2>
              <p>
                If you have any questions, suggestions, or need assistance, please don&apos;t hesitate to reach out to us:
              </p>

              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:wuyuang1007@gmail.com">
                    wuyuang1007@gmail.com
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href="https://github.com/wowyuarm/Re_CNname"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Repository
                  </a>
                </li>
              </ul>

              <h2>Feedback</h2>
              <p>
                Your feedback helps us improve our service. We&apos;re particularly interested in hearing about:
              </p>
              <ul>
                <li>Your experience using the name generator</li>
                <li>The quality and appropriateness of generated names</li>
                <li>Website usability and features</li>
                <li>Bug reports or technical issues</li>
                <li>Suggestions for improvement</li>
              </ul>

              <h2>Business Inquiries</h2>
              <p>
                For business-related inquiries, partnerships, or collaboration opportunities, please email us with detailed information about your proposal.
              </p>

              <h2>Response Time</h2>
              <p>
                We aim to respond to all inquiries within 24-48 hours during business days. Thank you for your patience and understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 