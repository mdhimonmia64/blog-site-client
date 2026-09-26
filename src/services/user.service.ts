import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_API = env.AUTH_URL;

export const userService = {
    getSession: async function () {
        try{
            const cookieStore = await cookies();

            const res = await fetch(`${AUTH_API}/get-session`,{
                headers:{
                    Cookie:cookieStore.toString(),
                },
                cache:"no-store"
            })

            const session = await res.json();

            if(session === null){
                return {data:null,error:{message:"Session is Missing."}}
            }

            return {data:session,error:null}
        }catch(err){
            console.error(err);
            return{data:null,error:{message:"Something Went Wrong"}}
        }
    }
}