import FilterButtonImage from '/filter-left.svg'
import ArrowDown from '/arrow-down.svg'
import ArrowUp from '/arrow-up.svg'
import MapIcon from '/geo-alt.svg'
import '../assets/styles/Header.css'
import { useState } from 'react'
import '../assets/styles/icons.css'
import { VehicleSortingType } from '../types/types'

type HeaderProps = {
    onSort: Function,
    setGeneralMap: Function,
}

const Header: React.FC<HeaderProps> = ({onSort, setGeneralMap}) => {
    const [vehicleFiltersVisible, setVehicleFiltersVisible] = useState<Boolean>();

    const showVehicleFilters = () => {
        setVehicleFiltersVisible(state => !state)
    }

    return (
        <div className='header'>
            <h1 className='header__title'>Vehicles list</h1>
            <img src={MapIcon} className='icon-button' alt='Filter' onClick={() => setGeneralMap(state => !state)}/> 
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