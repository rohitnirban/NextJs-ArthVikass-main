// components/StaticMap.tsx
import React from 'react';

const StaticMap: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const center = '30.7333,76.7794';
  const zoom = 12;
  const size = '600x400'; // Adjust size as needed
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&key=${apiKey}`;

  return (
    <div className="flex justify-center items-center h-full">
      <img src={mapUrl} alt="Map of Chandigarh" className="w-full h-full object-cover" />
    </div>
  );
}

export default StaticMap;
