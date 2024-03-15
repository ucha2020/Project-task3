export default function Card({item ,style}){
return (
    <div className="card" style={{...style,...{display:"flex" }}}>
      
      <img 
        src={item.url}
        alt={item.title}
        width="10%"
        display = "block"
        margin = "5px"
        
      />
    
      <div className="cardContainer">
      <p>
        {item.id}
      </p>
      <p>
        {item.title} 
      </p>
      </div>
    </div>
  );
}