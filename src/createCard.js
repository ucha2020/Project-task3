import CardM from "./components/CardM";
export default function(personArray){
   const CardsArray = personArray.map((person)=><CardM item={person} cardStyle={"formCard"} imgStyle={"formImg"}/>)
   return CardsArray;
}