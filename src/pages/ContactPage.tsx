import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  comment: z.string().min(5, "Comment must be at least 5 characters"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<ReviewFormValues[]>([
    {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      comment: "This website helped me find a hospital with great cardiovascular care for my father. The search was easy and the ratings were accurate based on our experience."
    },
    {
      name: "Michael Chen",
      email: "m.chen@example.com",
      comment: "I was able to compare different hospitals in my area for orthopedic surgery. Saved me a lot of time and helped me make an informed decision."
    }
  ]);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: ""
    }
  });

  const onSubmit = (data: ReviewFormValues) => {
    setReviews([data, ...reviews]);
    form.reset();
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your comment has been added successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-accent">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              We're here to help and answer any questions you might have.
              We look forward to hearing from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">Email</h3>
                  <p className="text-gray-600">info@bestcarenavigators.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">Phone</h3>
                  <p className="text-gray-600">(800) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">Location</h3>
                  <p className="text-gray-600">123 Health Avenue</p>
                  <p className="text-gray-600">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-accent mb-4">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM EST</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <MessageSquare className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-3xl font-semibold text-accent">Share Your Experience</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              We value your feedback! Let us know how our website has helped you find the right healthcare provider.
            </p>
            
            {/* Review Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Comment</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share how our website helped you..." 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full md:w-auto">
                    Submit Feedback
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Existing Reviews */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-6">What Others Are Saying</h3>
              
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-lg text-accent">{review.name}</h4>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
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
                Empowering patients with data-driven insights for better healthcare decisions.
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

export default ContactPage;
