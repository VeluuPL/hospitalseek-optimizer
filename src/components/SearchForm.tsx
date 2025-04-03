
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (condition: string, zipCode: string) => void;
  conditions?: string[]; // Make conditions optional and passed from parent
}

const SearchForm = ({ onSearch, conditions = [] }: SearchFormProps) => {
  const [selectedCondition, setSelectedCondition] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const validateZipCode = (zip: string) => {
    const zipRegex = /^\d{5}$/;
    return zipRegex.test(zip);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!selectedCondition) {
      setError("Please select a medical condition");
      return;
    }

    if (!validateZipCode(zipCode)) {
      setError("Please enter a valid 5-digit ZIP code");
      return;
    }

    onSearch(selectedCondition, zipCode);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="space-y-4">
        <Select value={selectedCondition} onValueChange={setSelectedCondition}>
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder="Select Medical Condition" />
          </SelectTrigger>
          <SelectContent>
            {conditions.map((condition) => (
              <SelectItem key={condition} value={condition}>
                {condition}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative">
          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter ZIP Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button type="submit" className="w-full h-12 text-lg">
          <Search className="mr-2 h-5 w-5" />
          Find Best Hospitals
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
