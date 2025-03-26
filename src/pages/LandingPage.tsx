
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, Percent, Clock, Shield, ArrowRight, Users, Award, Mail, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-white to-secondary overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-accent leading-tight">
              Find the <span className="text-primary">Best Hospital</span> for Your Treatment
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Data-driven recommendations to help you make informed decisions about your healthcare journey.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <Button asChild size="lg">
                <Link to="/search">Find Hospitals <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
              alt="Healthcare professional using laptop" 
              className="rounded-lg shadow-xl animate-fade-in w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-accent mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold text-primary">"Empowering patients with data-driven insights for better healthcare decisions."</span>
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Success Rates</h3>
              <p className="text-gray-600">We analyze treatment success rates across hospitals to provide you with quality metrics.</p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Proximity</h3>
              <p className="text-gray-600">Find the best care options close to home without compromising on quality.</p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Privacy</h3>
              <p className="text-gray-600">No login required. Get instant access to hospital rankings with complete privacy.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-accent mb-12 text-center">Why Patients Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">Sarah Johnson</h3>
                  <p className="text-gray-500">Cardiac Patient</p>
                </div>
              </div>
              <p className="text-gray-600">
                "BestCare Navigators helped me find the best cardiac specialist in my area. 
                The success rate data gave me confidence in my decision."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">Michael Rodriguez</h3>
                  <p className="text-gray-500">Joint Replacement</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I was able to compare hospitals for my knee replacement surgery and make an informed choice.
                The detailed report was incredibly helpful."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-accent mb-6">Ready to Find Your Best Care Option?</h2>
            <p className="text-xl text-gray-600 mb-8">
              It takes just seconds to get personalized hospital recommendations based on your needs.
            </p>
            <Button asChild size="lg">
              <Link to="/search">Start Your Search <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-accent text-white py-12">
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
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/search" className="text-gray-300 hover:text-white transition-colors">Find Hospitals</Link></li>
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

export default LandingPage;
