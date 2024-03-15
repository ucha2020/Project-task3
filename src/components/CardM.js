export default function CardM({item ,cardStyle, imgStyle}){
    return (
        <div className={cardStyle} >
            
                <img className={imgStyle}
                    src={item.url}
                    alt={item.title}
                    
                />
           
            <div className="cardContainer">
                <h4><b>ID : </b>{item.id}</h4>
                <h3>title : {item.title} </h3>  
            </div>
        </div>
    )
    }
