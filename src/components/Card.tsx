import { IVehicle } from "../types/types"
import '../assets/styles/Card.css'
import '../assets/styles/buttons.css'
import { useState } from "react";
import Map from './Map.tsx'
import MapComponent from "./Map.tsx";

type CardProps = {
    vehicle: IVehicle,
    removeVehicle: Function,
}

const Card: React.FC<CardProps> = ({vehicle, removeVehicle}) => {
    const [currentVehicle, setCurrentVehicle] = useState(vehicle)
    const [fieldsToRender, setFieldsToRender] = useState(['name', 'model', 'year', 'color', 'price'])
    const [fieldsToEdit, setFieldsToEdit] = useState(['name', 'model', 'price'])
    const [vehicleIsEditing, setVehicleIsEditing] = useState(false);
    const [mapIsVisible, setMapIsVisible] = useState(false);

    const enableVehicleEditing = () => {
        setVehicleIsEditing(state => !state)
    }

    return (
        <div className="card">
            {Object.entries(currentVehicle).map(([key, value]) => {
                if(fieldsToRender.includes(key))
                    return (
                        <div className="card__field">
                            <p className="title">{key}:</p>
                            { vehicleIsEditing && fieldsToEdit.includes(key)
                                ? <input className="input" type="text" placeholder={value} value={value} onChange={(event) => {
                                    setCurrentVehicle(state => ({
                                        ...state,
                                        [key]: event.target.value
                                    }))
                                }}/>
                                : <p className="value">{value}</p>
                            }
                        </div>
                    )
            })}
            <div className="buttons-container">
                <button className="button primary" onClick={() => enableVehicleEditing()}>{ vehicleIsEditing ? "Save" : "Edit"}</button>
                <button className="button danger" onClick={() => removeVehicle(vehicle.id)}>Delete</button>
                <img className="icon-button" src="/geo-alt.svg" onClick={() => setMapIsVisible(state => !state)}/>
            </div>
            { mapIsVisible 
                && <MapComponent 
                    setMapIsVisible={setMapIsVisible} 
                    latitude={currentVehicle.latitude} 
                    longtitude={currentVehicle.longitude}
                /> }
        </div>
    );
};

export default Card;