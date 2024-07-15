import { IVehicle } from "../types/types"
import { useEffect } from 'react';
import '../assets/styles/Map.css';
import {Feature, Map, View} from 'ol/index.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj.js';

type GeneralMapComponentProps = {
    vehiclesList: IVehicle[] | undefined,
    setGeneralMap: Function,
}

const GeneralMapComponent: React.FC<GeneralMapComponentProps> = ({vehiclesList, setGeneralMap}) => {
    useEffect(() => {
        useGeographic();
        const pointsList = vehiclesList?.map((vehicle) => {
            return new Point([vehicle.longitude, vehicle.latitude])
        })

        const map = new Map({
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: pointsList?.map(point => new Feature(point))
                    }),
                    style: {
                        'circle-radius': 4,
                        'circle-fill-color': 'red',
                    },
                }),
            ],
        });

    }, []);

    return (
    <>
        <div id="map" style={{ width: '400px', height: '400px' }}></div>
        <div id="bg" onClick={() => setGeneralMap((state: boolean) => !state)}></div>
    </>
    )
}

export default GeneralMapComponent