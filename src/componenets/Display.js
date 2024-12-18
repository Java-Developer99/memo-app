import { memo, useRef } from "react"


function Display() {
    let useRefData=useRef(0);
    console.log(useRefData);

   return(
    <>
        <h1>Hello I am Dispaly {useRefData.current ++}</h1>
    </>
   )
}

export default memo(Display)
