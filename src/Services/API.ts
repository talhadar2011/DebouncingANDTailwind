import axios from "axios";
import type { ApiResponse } from "../types/CharaterType";



const BASE_URL="https://rickandmortyapi.com/api/"

const axiosInstance=axios.create({baseURL:BASE_URL})

export const getAllCharaters= async ()=>{
    return(await axiosInstance.get<ApiResponse>("/character")).data.results
}