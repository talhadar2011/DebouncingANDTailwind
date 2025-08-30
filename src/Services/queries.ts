import { useQuery } from "@tanstack/react-query"
import { getAllCharaters } from "./API"



export function usegetAllCharater(name:any,setcalls:number){
    return useQuery({
        queryKey:["AllCharaters",name],
        queryFn:()=>getAllCharaters(name,setcalls)
    })
}