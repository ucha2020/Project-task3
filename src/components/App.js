import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import {loadData,saveData,creatDatalist} from "../data"
import NoPage from "./ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayPage from "./DisplayPage";
import FormPage from "./FormPage";
import ScrollPage from "./ScrollPage";
import Layout from "./layout";

const url = "https://jsonplaceholder.typicode.com/photos";

export default function App(){
    const [loading,setLoading] = useState(true);
    const [cardList ,setCardList] = useState();
    const [siblingCount ,setSiblingCount] = useState(2);
    const [savedData, setSavedData] = useState(loadData(`ss5000`));    
    const { data, error} = useFetch(url, savedData);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsParPage, setCardsParPage] = useState(20);    
    const indexOfLastCard = currentPage * cardsParPage
    const indexOfFirstCard = indexOfLastCard - cardsParPage;
    const currentCards = cardList &&  cardList.slice(indexOfFirstCard,indexOfLastCard)
    
    function handlePageClick(obj,value){
        console.log(obj );
       if(  typeof value == "number"){
        setCurrentPage(value);
        
        }else {
            if (value === "<") {
                setCurrentPage((currentPage)=>currentPage - 1);
                
            }else {
                if (value === ">") {
                    setCurrentPage((currentPage)=>currentPage + 1);
                    
                }
            }
        }
    }
    useEffect(()=>{
        if(data && !savedData){
            const dattaList = creatDatalist(data);
            saveData(`ss${data.length}`,dattaList);
            const loadedData = loadData(`ss${data.length}`);
            setSavedData(loadedData);
            console.log(loadedData);                 
        }
        
    },[data,savedData]);

    
    useEffect(()=>{
        if(savedData){
            const dataList32 = savedData.slice(0,210);
            setCardList(dataList32);
            setLoading(false);
        }
        //clear the saved data from the local storage when this 
        //component unmounts.
       // return localStorage.clear();  
    },[savedData]);

    return ( 
        cardList?
          <>        
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                 <Route index element={<DisplayPage
                    currentCards={currentCards}
                    totalCardCount = {cardList.length}
                     cardsParPage = {cardsParPage}
                     siblingCount = {siblingCount}
                     currentPage = {currentPage}
                     handlePageClick = {handlePageClick}
                    />}/>
                 <Route path= "ScrollPage" element={<ScrollPage dataList = {cardList}/>} />
                 <Route path="FormPage" element={<FormPage dataList = {cardList}/>}/>
                 <Route path="*" element={<NoPage />} />
               </Route>
              </Routes>
            </BrowserRouter>
          </>:
        <p>loading...</p>
      ) 
       
}