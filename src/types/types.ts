import { Coordinate } from "ol/coordinate";

export interface IVehicle {
    id: number;
    name: string;
    model: string;
    color: string;
    price: number;
    year: number;
    latitude: Coordinate;
    longitude: Coordinate
}

export enum VehicleSortingType {
    yearAscending = "yearAscending",
    yearDescending = "yearDescending",
    priceAscending = "priceAscending",
    priceDescending = "priceDescending",
}