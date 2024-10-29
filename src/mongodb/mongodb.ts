import { connect } from "mongoose";

export default async function mongooseConnect(): Promise<void> {
  const mongoDBURI = process.env.MONGODB_URL ?? "";
  await connect(mongoDBURI);
}
