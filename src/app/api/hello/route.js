export async function GET(request){
 return new Response("Hello Next.js!")
}
// import {NextResponse} from "next/Server";
// import connect from "@/utils/db";

// export const GET = async()=>{
//     try{
//         await connect();
//         return <p> Database is connected </p>
//     }catch(error){
//         return new NextResponse("Error in fetching data" + error,{status:500});
//     }
// };