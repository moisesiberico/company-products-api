import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://cluster0.rgqfn.mongodb.net/RESTAPI_DB --username dbuser",
  PORT: process.env.PORT || 4000,
  SECRET: 'products-api'
};
 