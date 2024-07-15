import { IVehicle } from '../types/types.ts'
import Card from './Card.tsx'
import '../assets/styles/CardContainer.css'
import { v4 as uuidv4 } from 'uuid'

type CardContainerProps = {
    vehiclesList?: IVehicle[]
}

const CardContainer: React.FC<CardContainerProps> = ({vehiclesList}) => {
    return (
        <div className='card-container'>
            {vehiclesList?.map(vehicle => {
                return <Card vehicle={vehicle} key={uuidv4()}/>
            })}
        </div>
    );
}
 
export default CardContainer;