import { useEffect } from 'react';
import '../assets/styles/Map.css';
import {Feature, Map, Overlay, View} from 'ol/index.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj.js';

type MapProps = {
    setMapIsVisible: Function,
    latitude: number,
    longtitude: number
}

const MapComponent: React.FC<MapProps> = ({setMapIsVisible, latitude, longtitude}) => {
    useEffect(() => {
        useGeographic();
        const point = new Point([longtitude, latitude])

        const map = new Map({
        target: 'map',
        view: new View({
            center: [longtitude, latitude],
            zoom: 8,
        }),
        layers: [
            new TileLayer({
            source: new OSM(),
            }),
            new VectorLayer({
            source: new VectorSource({
                features: [new Feature(point)],
            }),
            style: {
                'circle-radius': 9,
                'circle-fill-color': 'red',
            },
            }),
        ],
        });

      }, []);

      
    
      return (
        <>
            <div id="map" style={{ width: '400px', height: '400px' }}></div>
            <div id="bg" onClick={() => setMapIsVisible(state => !state)}></div>
        </>
      )
}

export default MapComponent;