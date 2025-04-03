
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import SearchForm from '@/components/SearchForm';
import HospitalCard from '@/components/HospitalCard';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Hospital type definition
interface Hospital {
  id: number;
  name: string;
  distance: number;
  successRate: number;
  location: string;
}

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Hospital[] | null>(null);
  const [conditions, setConditions] = useState<string[]>([]);
  const { toast } = useToast();

  // In a real implementation, this would fetch data from an API
  React.useEffect(() => {
    // This will be replaced with actual API call
    console.log("Component mounted - would fetch conditions from API here");
    // setConditions([...]) will be populated from database
  }, []);

  const handleSearch = async (condition: string, zipCode: string) => {
    // Placeholder for future API call
    // Will be replaced with actual database query
    console.log(`Searching for ${condition} near ${zipCode}`);
    setSearchResults(null); // Clear previous results
    
    toast({
      title: "Search Initiated",
      description: `Searching for ${condition} near ${zipCode}`,
    });
    
    // Future implementation will fetch data from backend
  };

  const handleDownloadReport = () => {
    // Placeholder for report generation functionality
    toast({
      title: "Feature Coming Soon",
      description: "Report generation will be available when connected to database.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary to-white">
      <Navigation />
      
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-accent mb-4">
            Find the Best Hospitals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best hospitals for your treatment based on success rates and proximity.
          </p>
        </div>

        <SearchForm onSearch={handleSearch} conditions={conditions} />

        {searchResults && searchResults.length > 0 && (
          <div className="mt-12 space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-accent">Top Hospitals</h2>
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

export default SearchPage;
