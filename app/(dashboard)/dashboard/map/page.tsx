'use client';

import { useState } from "react";
import { GoogleMap, LoadScript, InfoWindow, OverlayView } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '101%',
  marginTop: '-8px'
};

const center = {
  lat: 22.726196731539254,
  lng: 75.85437297224676
};

const options = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  clickableIcons: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

interface User {
  id: number;
  name: string;
  garbageTax: number;
  propertyTax: number;
  waterTax: number;
  lat: number;
  lng: number;
  markerImage: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Rohit Yadav',
    garbageTax: 100,
    propertyTax: 200,
    waterTax: 120,
    lat: 22.7259757287759,
    lng: 75.85095966483864,
    markerImage: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=40'
  },
  {
    id: 2,
    name: 'Ashit Rai',
    garbageTax: 90,
    propertyTax: 150,
    waterTax: 200,
    lat: 22.725040538948175,
    lng: 75.85244358965937,
    markerImage: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=40'
  },
  {
    id: 3,
    name: 'Kapil Gangwar',
    garbageTax: 190,
    propertyTax: 130,
    waterTax: 145,
    lat: 22.725286783141936,
    lng: 75.8543996540439,
    markerImage: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=40'
  },
  {
    id: 4,
    name: 'Shashank MS',
    garbageTax: 145,
    propertyTax: 170,
    waterTax: 141,
    lat: 22.7258526073655,
    lng: 75.8520515013086,
    markerImage: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=40'
  }
];

const markerStyle = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  border: '2px solid white',
  boxShadow: '0px 0px 5px rgba(0,0,0,0.5)',
  transform: 'translate(-50%, -50%)'
};

function Page() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={options}
      >
        {users.map(user => (
          <OverlayView
            key={user.id}
            position={{ lat: user.lat, lng: user.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div onClick={() => setSelectedUser(user)} style={markerStyle}>
              <img src={user.markerImage} alt={user.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
          </OverlayView>
        ))}

        {selectedUser && (
          <InfoWindow
            position={{ lat: selectedUser.lat, lng: selectedUser.lng }}
            onCloseClick={() => setSelectedUser(null)}
          >
            <div className="min-w-36">
              <h2 className="text-xl font-bold">{selectedUser.name}</h2>
              <p className="mt-6 mb-4 font-bold">Tax Details</p>
              <p>Garbage Tax {selectedUser.garbageTax}</p>
              <p>Property Tax {selectedUser.propertyTax}</p>
              <p>Water Tax {selectedUser.waterTax}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Page;
