
const User = async() => {
  const res = await fetch("http://localhost:5000/users")

  return  res.json();
};

export default User;
// import user from "../../../../models/user";
// import dbConnect from "../../../../config/dbConnect";

// dbConnect();

// export default async = ()=>{
//     const {method} = req;

//     switch (method){
//         case "GET":
//       try{
//         const user = await User.find({}).sort({_id:-1});
//         res.status(200).json({success:true, data:user});
//       }catch(error){
//         res.status(400).json({success:false});
//       }
//     }
// }