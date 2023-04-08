import React, { useState, useEffect } from 'react';
import './prescrip.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoidmlkaGFyc2hhbmEiLCJhIjoiY2w0M2JyMW9tMDIzZzNib2R4N3I2eHl6cSJ9.MeKkNU6_zGQSTMBm0035Aw';

function Map() {      
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
        map.on('load', () => {
          map.addLayer({
              id: 'terrain-data',
              type: 'line',
              source: {
                  type: 'vector',
                  url: 'mapbox://mapbox.mapbox-terrain-v2'
              },
              'source-layer': 'contour'
          });
        }); 
  
    return(
        <div className='wrapper'>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet"/>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></script>
            <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no"/>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );

  }
  
  export default Map;