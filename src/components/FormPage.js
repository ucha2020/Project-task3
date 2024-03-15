import { useState } from "react";
import createCard from "../createCard";
export default function  Form ({}){
    const [title, setTitle] = useState();
    const [id, setId] = useState();
    const [files, setFiles] = useState();
    const [url, setUrl] = useState();
    const [personArray, setPersonArray] = useState([]);
    const [idToBeDeleted, setIdToBeDeletd] = useState();
    const [CardsArray, setCardsArray] = useState();
    console.log(personArray.length);

    function handleFileChange(event) {
      event.preventDefault();
      const files = event.target.files
      console.log(files);
      setFiles(files)
      setUrl(URL.createObjectURL(files[0]))
      console.log(files[0]);
    }
    
    function handleFormCancel(event) {
      event.preventDefault();
      if(files){
        setUrl(null);
        URL.revokeObjectURL(url)
      }  
    }
    function confirmId(idToBeDeleted){
      let person = null;
      personArray.forEach(item => {
        if(item.id === idToBeDeleted){
          person = item;
          return person
        }
      });
      return person;
    }
    function handleItemDelete(event){
      event.preventDefault();
      const person = confirmId(idToBeDeleted)
      console.log(person);
      if(person){
        const index = personArray.indexOf(person);
        const newPersonArray = [...personArray];
        newPersonArray.splice(index,1);
        console.log(newPersonArray);
        setPersonArray(newPersonArray);
        setCardsArray(createCard(newPersonArray));
      }
      else{
        alert(`no card with this id of" ${idToBeDeleted}" enter a valid ID`)
      }
    }
    function handleSubmit (event){
        event.preventDefault();
        const person = {title,id,url}
        console.log(person);
        const updatedPersonArray = [...personArray];
        updatedPersonArray.push(person);
        setPersonArray(updatedPersonArray);
        setCardsArray( createCard(updatedPersonArray));
    }
    return (
      <div className="formDiv">
    <form className="form1">
      <div >
        <label htmlFor="file-upload"> <span>Upload a file</span> </label>
        <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange}  accept="image/*"/>
        <div className="imageBar"> 
          <img className="image" src={url} alt="image" style={{height:"auto" ,maxWidth:"20%"}}/>
          <div className="cardDiv">{personArray.length}</div>
        </div>
      </div>
      
      
      <div >
        <label htmlFor="id"> Enter the card's id to be created</label>
        <input
          type="number"
          name="id"
          id="id"
          autoComplete="id"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div >
        <label htmlFor="title">Enter the card's title to be created</label>
        <input 
          type="text"
          name="title" 
          required 
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="action">
        <button  id="cancel" onClick={handleFormCancel}> Clear </button>
        <button  id="submit"onClick={handleSubmit} > Create Card </button>
      </div>
    </form>
    <div className="cardsDiv">
      <div className="cardsDisplayDiv">
        {(personArray.length > 0)&& CardsArray.map((card)=>card)}
      </div>
      <form className="cardsControlDiv">
        <input
          className="deleteInput"
          type="number"
          name="idToBeDeleted"
          value={idToBeDeleted}
          required
          placeholder="id of card to be deleted"
          onChange={(e) => setIdToBeDeletd(e.target.value)}
        />
        <button className="deleteButton" onClick={handleItemDelete}> delete </button>
    </form>
    </div>
    </div>
    )
}
