import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const InteractiveMap: React.FC = () => {
  // Center on a sample premium market, e.g., NYC or SF. Let's use Manhattan.
  const position: [number, number] = [40.7580, -73.9855];

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // Premium-looking light map
        />
        <Marker position={position}>
          <Popup>
            <div style={{ fontFamily: 'var(--font-sans)' }}>
              <strong>Property Valuation</strong><br />
              Estimated: $2.4M
            </div>
          </Popup>
        </Marker>
        <Circle center={[40.7500, -73.9900]} radius={500} pathOptions={{ color: 'var(--accent)', fillColor: 'var(--accent)', fillOpacity: 0.2 }} />
        <Circle center={[40.7650, -73.9800]} radius={800} pathOptions={{ color: 'var(--primary)', fillColor: 'var(--primary)', fillOpacity: 0.1 }} />
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
