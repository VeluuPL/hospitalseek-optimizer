
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
      
      {/* Project Status */}
      <section className="py-12 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-accent mb-4">Student Project Notice</h2>
            <p className="text-gray-700 mb-3">
              BestCare Navigators is currently a prototype developed by Master's students as an academic project. 
              This platform is a work-in-progress with functionality limited to California hospitals at this time.
            </p>
            <p className="text-gray-700 mb-3">
              We are gradually expanding our coverage and continuously collecting data to improve our service. 
              We apologize that not all medical conditions may be available in our search functionality as we're 
              still in the process of building our comprehensive database.
            </p>
            <p className="text-gray-700">
              Thank you for your understanding and support as we develop this tool to help patients make more 
              informed healthcare decisions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                alt="Healthcare professionals" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-accent">Our Story</h2>
              <p className="text-lg text-gray-600">
                BestCare Navigators began as a graduate student project at the intersection of healthcare 
                and data science. As graduate students in health informatics, we recognized a critical gap 
                in the patient journey: access to reliable, unbiased information about hospital quality and outcomes.
              </p>
              <p className="text-lg text-gray-600">
                After researching how patients struggle to make informed decisions about where to 
                receive care, our team set out to build a platform that democratizes access 
                to hospital performance data and makes it accessible to everyone.
              </p>
              <p className="text-lg text-gray-600">
                Currently, our prototype focuses exclusively on California hospitals as we refine our 
                methodology and data collection processes. We plan to expand to additional states as our 
                project develops beyond its academic origins.
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
                metrics from reliable sources, even as we continue to expand our database.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Patient Privacy</h3>
              <p className="text-gray-600">
                We respect your privacy and never require personal information to access 
                our hospital recommendations, prioritizing anonymous access to healthcare data.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Academic Rigor</h3>
              <p className="text-gray-600">
                As graduate students, we apply evidence-based methodologies and academic standards 
                to our analyses, ensuring transparency about our current limitations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-accent text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">BestCare Navigators</h3>
              <p className="text-gray-300">
                A graduate student project empowering patients with data-driven insights for better healthcare decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
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
