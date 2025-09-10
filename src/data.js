import CardM from "./components/CardM";
const loadData = kee =>
  kee && JSON.parse(localStorage.getItem(kee));
  const saveData = (kee, data) =>
  localStorage.setItem(kee, JSON.stringify(data));

const creatDatalist= (data) =>{
  const listArray = [...data].map((item) =>({
    title : item.title,
    id    : `ss${item.id}`,
    url   : item.url,
  }))
  return listArray;
}  

export{loadData,saveData,creatDatalist}
