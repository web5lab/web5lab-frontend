import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What blockchain platforms do you work with?",
    answer: "We specialize in multiple blockchain platforms including Ethereum, Binance Smart Chain, Polygon, Solana, and other EVM-compatible chains. Our expertise allows us to choose the most suitable platform for your specific needs."
  },
  {
    question: "How do you ensure smart contract security?",
    answer: "We follow industry best practices including comprehensive testing, code audits, and formal verification. Our smart contracts undergo rigorous security assessments and third-party audits before deployment to ensure maximum security."
  },
  {
    question: "What is your development process?",
    answer: "Our development process follows an agile methodology with regular client interactions. It includes requirements gathering, architecture design, development, testing, security audits, and deployment, with continuous feedback and improvements throughout."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and requirements. Simple smart contracts might take 2-4 weeks, while complex DeFi protocols could take 3-6 months. We provide detailed timelines during the initial consultation."
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer: "Yes, we offer comprehensive post-launch support including monitoring, maintenance, updates, and technical support. We also provide documentation and training to ensure smooth operation of your blockchain solution."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment structures based on project size and complexity. This typically includes a project initiation fee and milestone-based payments. We accept both traditional and cryptocurrency payments."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our blockchain development services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 rounded-lg hover:border-blue-600 transition-colors"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}