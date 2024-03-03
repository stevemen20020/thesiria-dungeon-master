import mapboxgl from 'mapbox-gl';
import { useRef, useState, useEffect } from 'react';
import './Map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aW5jaTIwMDEiLCJhIjoiY2x0MmE4bTR1MW02dzJsbW5kcGJlNDBwcCJ9.QjFehXpew3nHBDkHy2ApiQ';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-7.521);
  const [lat, setLat] = useState(49.748);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/davinci2001/clsiqee6o03kq01qqdde197i7',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <>
    <div ref={mapContainer} className="map-container" />
    </>
  )
}

export default Map