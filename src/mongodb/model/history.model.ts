import { Document } from "mongoose";

export interface IHistory extends Document {
    vehicleId: string;
    startDate: string
    serialNumber: string
    problemType: string
    servicePrice: string
    endDate: string
    comment: string
}

