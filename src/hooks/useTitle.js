import { useEffect } from "react"

const useTitle = title =>{
   useEffect(()=>{
    document.title = `Radiant-Adornaments | ${title}`;
   },[])
}

export default useTitle;