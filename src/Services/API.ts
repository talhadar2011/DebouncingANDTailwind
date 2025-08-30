import axios from "axios";
import type { ApiResponse } from "../types/CharaterType";

function qs(params: Record<string, string>) {
  console.log(params,"pramsvalue")
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
}

const BASE_URL="https://rickandmortyapi.com/api/character/"

const axiosInstance=axios.create({baseURL:BASE_URL})

export const getAllCharaters= async (name:any,setcalls:React.Dispatch<React.SetStateAction<number>>)=>{
     if (setcalls) {
    setcalls((c) => c + 1); // increment API call counter
  }
    return(await  axiosInstance.get<ApiResponse>(`?${qs({ name })}`)).data.results
    
}