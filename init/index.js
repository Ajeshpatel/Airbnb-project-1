const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"   

main()       
   .then(() => {
    console.log("connected to DB")
   })
   .catch((err) =>{
    console.log(err);
   });
async function main() {       
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    //map functin individual object ke liye, un obj ke andar jakar ek new property ko add krega.
    initData.data = initData.data.map((obj)=>({...obj, owner: "65e6b821741d9f6424162e62"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();

