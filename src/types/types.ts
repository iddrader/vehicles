export interface IVehicle {
    id: number;
    name: string;
    model: string;
    color: string;
    price: number;
    year: number;
    latitude: number;
    longitude: number;
}

export enum VehicleSortingType {
    yearAscending = "yearAscending",
    yearDescending = "yearDescending",
    priceAscending = "priceAscending",
    priceDescending = "priceDescending",
}