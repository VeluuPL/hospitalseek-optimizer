
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Percent, Clock } from 'lucide-react';

interface HospitalProps {
  name: string;
  distance: number;
  successRate: number;
  location: string;
}

const HospitalCard = ({ name, distance, successRate, location }: HospitalProps) => {
  return (
    <Card className="w-full transform transition-all duration-300 hover:shadow-lg animate-slide-up">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-accent">{name}</h3>
            <p className="text-gray-500 flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Distance</p>
                <p className="font-medium">{distance.toFixed(1)} miles</p>
              </div>
            </div>
            <div className="flex items-center">
              <Percent className="h-4 w-4 mr-2 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="font-medium">{successRate}%</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HospitalCard;
