"use client"

import React from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function GoogleMap() {

  const position = { lat: 52.24834044802785, lng: 15.533964835708657 };
  const containerStyle = {
    width: '100%',
    height: '550px'
  };  

  var styles = [
		{
			"featureType": "landscape",
			"stylers": [
				{ "hue": "#000" },
				{ "saturation": -100 },
				{ "lightness": 40 },
				{ "gamma": 1 }
			]
		},
		{
			"featureType": "road.highway",
			"stylers": [
				{ "hue": "#333" },
				{ "saturation": -100 },
				{ "lightness": 20 },
				{ "gamma": 1 }
			]
		},
		{
			"featureType": "road.arterial",
			"stylers": [
				{ "hue": "#000" },
				{ "saturation": -100 },
				{ "lightness": 20 },
				{ "gamma": 1 }
			]
		},
		{
			"featureType": "road.local",
			"stylers": [
				{ "hue": "#666" },
				{ "saturation": "#333" },
				{ "lightness": 50 },
				{ "gamma": 1 }
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{ "hue": "#000" },
				{ "saturation": -100 },
				{ "lightness": 15 },
				{ "gamma": 1 }
			]
		},
		{
			"featureType": "poi",
			"stylers": [
				{ "hue": "#000" },
				{ "saturation": -100 },
				{ "lightness": 25 },
				{ "gamma": 1 }
			]
		}
	];

  return (
    <APIProvider apiKey={'Your-Api-Key'}>
      <Map 
        style={containerStyle}
        styles = {styles}
        center={position} 
        zoom={18}
        scrollwheel={false}
        gestureHandling={'greedy'}
        >
        
        <Marker position={position} />
      
      </Map>
    </APIProvider>
  );
}

export default GoogleMap;