import { useState } from "react";
import Card from "./Card";
import { FixedSizeList  } from "react-window"; 
export default function ScrollPage({dataList}){
  
return (
  <div className="scrollPage">
  <FixedSizeList
    height={window.innerHeight}
    width={window.innerWidth - 20}
    itemCount={dataList.length}
    itemSize={50}
  > 
    {
    ({index, style }) => { return <Card style = {style} item = {dataList[index]} />}
     }
  </FixedSizeList>
  </div>
);      
    
}