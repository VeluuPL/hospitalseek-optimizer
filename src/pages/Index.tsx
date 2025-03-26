
import React, { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import HospitalCard from '@/components/HospitalCard';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Mock data - in a real app this would come from an API
const mockHospitals = [
  {
    id: 1,
    name: "Memorial Medical Center",
    distance: 2.4,
    successRate: 94,
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    name: "City General Hospital",
    distance: 3.8,
    successRate: 92,
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    name: "University Medical Center",
    distance: 5.1,
    successRate: 90,
    location: "Los Angeles, CA"
  },
  {
    id: 4,
    name: "St. Mary's Hospital",
    distance: 6.2,
    successRate: 89,
    location: "Los Angeles, CA"
  },
  {
    id: 5,
    name: "Pacific Care Center",
    distance: 7.5,
    successRate: 87,
    location: "Los Angeles, CA"
  }
];

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof mockHospitals | null>(null);
  const { toast } = useToast();

  const handleSearch = (condition: string, zipCode: string) => {
    // In a real app, this would make an API call
    setSearchResults(mockHospitals);
    
    toast({
      title: "Search Complete",
      description: `Found top hospitals for ${condition} near ${zipCode}`,
    });
  };

  const handleDownloadReport = () => {
    // In a real app, this would generate and download a PDF
    toast({
      title: "Downloading Report",
      description: "Your hospital report is being generated...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-accent mb-4">
            BestCare Navigators
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best hospitals for your treatment based on success rates and proximity.
          </p>
        </div>

        <SearchForm onSearch={handleSearch} />

        {searchResults && (
          <div className="mt-12 space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-accent">Top 5 Hospitals</h2>
              <Button variant="outline" onClick={handleDownloadReport}>
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
            
            <div className="grid gap-6 mt-6">
              {searchResults.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  name={hospital.name}
                  distance={hospital.distance}
                  successRate={hospital.successRate}
                  location={hospital.location}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
