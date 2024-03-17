import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error(
        'Please define Mongo DB URI'
    )
}

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnect() {
    if (cached.conn) {
      return cached.conn
    }
  
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      }
  
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose
      })
    }
  
    try {
      cached.conn = await cached.promise
    } catch (e) {
      cached.promise = null
      throw e
    }
  
    return cached.conn
  }

  export default dbConnect;

// import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI;

// const dbConnect = async () =>{
//     const connectionState = mongoose.connection.readyState;

//     if(connectionState === 1){
//         console.log("Already connected");
//         return;
//     }

//     if(connectionState === 2){
//         console.log("Connecting...");
//         return;
//     }
//     try{
//         mongoose.connect(MONGODB_URI!,{
//             dbName:"restapinext14",
//             bufferCommands:false
//         })
//         console.log("Connected");
//     }catch(error){
//         console.log("Error in connecting to database", error);
//         throw new Error("Error in connecting to database");
//     }
// }

// export default dbConnect;