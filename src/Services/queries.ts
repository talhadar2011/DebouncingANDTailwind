import { useQuery } from "@tanstack/react-query"
import { getAllCharaters } from "./API"
import type { ApiResponse } from "../types/CharaterType"



export function usegetAllCharater(){
    return useQuery({
        queryKey:["AllCharaters"],
        queryFn:getAllCharaters
    })
}