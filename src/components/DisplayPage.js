import CardM from "./CardM"
import PagingList from "./PagingList"
export default function DisplayPage({
  currentCards,
  totalCardCount,
  cardsParPage,
  siblingCount ,
  currentPage ,
  handlePageClick,
}){
    return <div className='displayPage'>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">CARD LIST</h2>

      <div className="displayContainer">
        {currentCards.map((item)=> 
        <CardM cardStyle="DisplayCard" imgStyle={"displayImg"} item={item} key={item.id}/>)}
       </div> 
         <div>
           <PagingList 
              totalCardCount = {totalCardCount}
              cardsParPage = {cardsParPage}
              siblingCount = {siblingCount}
              currentPage = {currentPage}
              handlePageClick = {handlePageClick}
            />
         </div>              
          
    </div> 
}
