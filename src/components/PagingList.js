
import usePagingArray from "../usePagingArray";
export default function PagingList({
    totalCardCount,
    cardsParPage,
    siblingCount ,
    currentPage,
    handlePageClick  
  }){
    const paginationArray = usePagingArray(
      totalCardCount, 
      cardsParPage, 
      siblingCount , 
      currentPage);
    const pagingList = paginationArray.map((value,index)=><a className="pagingItem" 
          href="#"
          key={`${index }${value}`}
          onClick={(event)=>{ handlePageClick(event,value)}} >{value}
    </a>  )  
    return (
      
         <div className="pagingBar">
            {pagingList}
         </div>
      
    ) 
  }
  