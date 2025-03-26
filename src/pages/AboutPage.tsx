import React from 'react';
import Navigation from '@/components/Navigation';
import { Award, BarChart, Database, Shield, Clock, Users, Mail, Phone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">About BestCare Navigators</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform how patients find and select healthcare providers
            by putting data-driven insights at their fingertips.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop" 
                alt="Healthcare technology" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-accent">Our Story</h2>
              <p className="text-lg text-gray-600">
                BestCare Navigators was founded in 2023 by a team of healthcare professionals 
                and data scientists who recognized a critical gap in the patient journey: 
                access to reliable, unbiased information about hospital quality and outcomes.
              </p>
              <p className="text-lg text-gray-600">
                After witnessing patients struggle to make informed decisions about where to 
                receive care, our team set out to build a platform that democratizes access 
                to hospital performance data and makes it accessible to everyone.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to offer a free tool that helps thousands of patients 
                find the best hospitals for their specific medical conditions, taking into 
                account both quality metrics and geographic convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-accent text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Data Integrity</h3>
              <p className="text-gray-600">
                We ensure that all hospital rankings are based on verified, up-to-date performance 
                metrics from reliable sources.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Patient Privacy</h3>
              <p className="text-gray-600">
                We respect your privacy and never require personal information to access 
                our hospital recommendations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing the highest quality information and continuously 
                improving our platform based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-accent text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" 
                  alt="Dr. Jennifer Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-accent">Dr. Jennifer Chen</h3>
              <p className="text-primary font-medium">CEO & Founder</p>
              <p className="text-gray-600 mt-2">Former Chief of Medicine with 15+ years of healthcare leadership experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                  alt="Michael Washington" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-accent">Michael Washington</h3>
              <p className="text-primary font-medium">CTO</p>
              <p className="text-gray-600 mt-2">Data scientist with expertise in healthcare analytics and machine learning.</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop" 
                  alt="Sarah Reynolds" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-accent">Sarah Reynolds</h3>
              <p className="text-primary font-medium">Chief Patient Advocate</p>
              <p className="text-gray-600 mt-2">Former hospital administrator focused on improving patient experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer (same as landing page) */}
      <footer className="bg-accent text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">BestCare Navigators</h3>
              <p className="text-gray-300">
                Empowering patients with data-driven insights for better healthcare decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/search" className="text-gray-300 hover:text-white transition-colors">Find Hospitals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@bestcarenavigators.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>(800) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BestCare Navigators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
