import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  lastname: string;
  privateNumber: string;
  email: string;
  password: string;
  phoneNumber: string;
}

// იუზერის ტიპი
// ავღწეროთ იუზერის ტიპი, ადმინისტრატორი და მომხმარებელი

// ავტომობილის სქემა რომელსაც იუზერი ამატებს (იუზერის სქემას ემატება) - cars: [Car]
// brand
// vin code
// tech passport photo (1)
// car images (5)
// age
// model
// gas type
// transmition
// engine type
// history: [History]

// კონკრეტული ავტომობილის ისტორია
// მიყვანის თარიღი
// მანქანის იდ (სახელმწიფო ნომერი)
// პრობლემის ტიპი
// სერვისის ფასი
// დასრულების თარიღი
// კომენტარი

// დამატებითი სერვისები
// ჩემი მანქანების სიიდან ვირჩევთ ერთ-ერთს, ვამატებთ კომენტარს მანქანის შესახებ, 
// დატოვების სასურველი თარიღი (კალენდარში არჩევა)
// ევაკუატორის სერვიცი | ავტო ასისტენტი | შემცვლელი ავტომობილის ქირაობა