import { IVehicle } from "../types/types"
import '../assets/styles/Card.css'
import '../assets/styles/buttons.css'

interface CardProps {
    vehicle: IVehicle;
}

const Card: React.FC<CardProps> = ({vehicle}) => {
    return (
        <div className="card">
            <div className="card__p">
                <p className="title">Name:</p>
                <p>{vehicle.name}</p>
            </div>
            <div className="card__p">
                <p className="title">Model:</p>
                <p>{vehicle.model}</p>
            </div>
            <div className="card__p">
                <p className="title">Color:</p>
                <p>{vehicle.color}</p>
            </div>
            <div className="card__p">
                <p className="title">Price:</p>
                <p>{vehicle.price}</p>
            </div>
            <div className="card__p">
                <p className="title">Year:</p>
                <p>{vehicle.year}</p>
            </div>
            <button className="button primary">Edit</button>
            <button className="button danger">Delete</button>
        </div>
    );
};

export default Card;