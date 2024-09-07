
import notecontext from "./notecontext";
import { useState } from "react";

const Notesate=(props)=>{
   let allnotestate=[
    {
      "_id": "66d8bbda9c1e10ddbbc637f3",
      "title": "hallo world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 01:28:18 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d8bc12w9c1e10ddbbc637f7",
      "title": "hallo world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 01:29:14 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d945f42wc9e2d70635cdcb6",
      "title": "hallo_world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 11:17:32 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d945f442c9e2d70635cdcb6",
      "title": "hallo_world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 11:17:32 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d945f4e2c9e2d70635cdcb6",
      "title": "hallo_world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 11:17:32 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "66d945f42cd9e2d70635cdcb6",
      "title": "hallo_world",
      "disc": "i am sk rijwan",
      "tag": "hwc",
      "data": "Thu Sep 05 2024 11:17:32 GMT+0530 (India Standard Time)",
      "__v": 0
    },


    

  ]
    const[note,setnote]=useState(allnotestate)

    return(
        <notecontext.Provider value={{note,setnote}}>
            {props.children}
        </notecontext.Provider>
        
    )
}

export default Notesate