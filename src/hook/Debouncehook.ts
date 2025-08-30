import { useEffect, useState } from "react";

 function DebonceHook<T>(value:T){
      const [debouncedValue, setDebouncedValue] = useState<T>(value);
    console.log(debouncedValue,"Debounce",value)
    useEffect(()=>{
       const Timer= setTimeout(()=>{

            setDebouncedValue(value)
        },500)
        return()=> clearTimeout(Timer)

    },[value])
    return debouncedValue

}
export default DebonceHook