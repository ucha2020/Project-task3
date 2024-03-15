import { useMemo } from "react";
export default function usePagingArray(
    totalCardCount,
    cardsParPage ,
    siblingCount ,
    currentPage)
    {
    const pageRange = useMemo(() => {
        const totalPageCount = Math.ceil( totalCardCount / cardsParPage);
        const middlePageArr = Array(siblingCount * 2 + 1);
       
        if(totalPageCount < 5){
          const pageArray = [];
            for (let index = 1; index <= totalPageCount; index++) {
                pageArray.push(index)   
            }
            const paginationArray = ["<",...pageArray,">"]
            return paginationArray
        }
        
        if(currentPage <= siblingCount+1){
            for (let index = 0; index < middlePageArr.length ; index++) {
                middlePageArr[index] = index + 1; 
            }
            const paginationArray = ["<",...middlePageArr,"...",totalPageCount,">"];
            return paginationArray;
        }

        if(currentPage >= totalPageCount - (siblingCount+1)){
            for (let index = 0; index < middlePageArr.length; index++) {
            middlePageArr[index] = totalPageCount - index 
            }
            middlePageArr.reverse();
            const paginationArray = ["<",1,"...",...middlePageArr,">"];

            return paginationArray;           
        }

        if(currentPage){
            const leftSiblingsArray = Array(siblingCount);
            const rightSiblingsArray = Array(siblingCount);
            for (let index = 0; index < siblingCount; index++) {
                leftSiblingsArray[index] =  currentPage - (index + 1);
                rightSiblingsArray[index] = currentPage + (index + 1); 
            }
            leftSiblingsArray.reverse();
            const middlePageArr = [...leftSiblingsArray,currentPage,...rightSiblingsArray];
            const paginationArray = ["<",1,"...",...middlePageArr,"...",totalPageCount,">"];
        
            return paginationArray;           
        }                 
    }, [totalCardCount, cardsParPage, siblingCount, currentPage]);
    
    return pageRange;
  }
 