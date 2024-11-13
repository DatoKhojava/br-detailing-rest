import { Document } from "mongoose";

export interface IVehicle extends Document {
  manufacturer: string; // ტოიოტა
  carModel: string; // სუპრა
  // location: string;
  status: boolean; // განბაჟებული, განუბაჟებელი
  year: string; // გამოშვების წელი
  fuel: string; // (ბენზინი, დიზელი, ჰიბრიდი)
  engine: number; // ძრავის მოცულობა (1.5, 1.2, 0.5)
  mileage: number; // გარბენი
  category: string; // (სედანი, ჰეჩბექი, ლიმუზინი)
  transmission: string; // (ავტომატიკა, მექანიკა, ვარიატორი)
  steeringWheel: string; // (მარჯვენა, მარცხენა)
  driveWheels: string; // (წინა, უკანა, 4x4)
  // technicalInspection: boolean; // (კი, არა)
  // catalyst: boolean; // (კი, არა)
  serialNumber: string; // DA-010-TO
  airbags: boolean; // კი - არა
  vinCode: string;
  // gallery: string // (ავტომობილის ფოტოები)
  // history: [string];
}
