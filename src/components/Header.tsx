import FilterButtonImage from '/filter-left.svg'
import ArrowDown from '/arrow-down.svg'
import ArrowUp from '/arrow-up.svg'
import '../assets/styles/Header.css'
import { useState } from 'react'
import '../assets/styles/icons.css'
import { VehicleSortingType } from '../types/types'

interface HeaderProps {
    onSort: Function;
}

const Header: React.FC<HeaderProps> = ({onSort}) => {
    const [vehicleFiltersVisible, setVehicleFiltersVisible] = useState<Boolean>();

    const showVehicleFilters = () => {
        setVehicleFiltersVisible(state => !state)
    }

    return (
        <div className='header'>
            <h1 className='header__title'>Vehicles list</h1>
            <img src={FilterButtonImage} className='icon-button' alt='Filter' onClick={showVehicleFilters}/> 
            { vehicleFiltersVisible
                ? <div className='header__buttons-container'>
                    <button className='button primary' onClick={ () => onSort(VehicleSortingType.yearAscending)}>
                        Sort by year
                        <img src={ArrowUp} className='icon' />
                    </button>
                    <button className='button primary' onClick={ () => onSort(VehicleSortingType.yearDescending)}>
                        Sort by year
                        <img src={ArrowDown} className='icon' />
                    </button>
                    <button className='button primary' onClick={ () => onSort(VehicleSortingType.priceAscending)}>
                        Sort by price
                        <img src={ArrowUp} className='icon' />
                    </button>
                    <button className='button primary' onClick={ () => onSort(VehicleSortingType.priceDescending)}>
                        Sort by price
                        <img src={ArrowDown} className='icon'  />
                    </button>
                </div>
                : <></>}
        </div>
    )
};

export default Header;