import { Outlet, NavLink } from "react-router-dom";

export default function Layout(){
  return (
    <div className="layoutPage">
    <nav> 
      <div className="navBar">
       
            <NavLink className="link " to="/">PagingList</NavLink>
         
            <NavLink className="link" to="/ScrollPage">ScrollPage</NavLink>
         
            <NavLink className="link" to="/FormPage">FormPage</NavLink>
          
      </div>

      <Outlet />
    </nav>
   
    </div>
  )
};

