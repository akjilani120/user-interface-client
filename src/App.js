import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginDesign/Login";
import Navbar from "./Pages/Navbar/Navbar";
import AddEmployee from "./Pages/Profile/AddEmployee";
import PersonalAdress from "./Pages/Profile/PersonalAdress";
import PIM from "./Pages/Profile/PIM";
import PIMDashboard from "./Pages/Profile/PIMDashboard";
import Profile from "./Pages/Profile/Profile";
function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} ></Navbar>    
      
    
       <Routes>
       <Route path="/dashboard" element={<PIMDashboard></PIMDashboard>}>
        <Route path="pmi"  element={<PIM></PIM>}></Route>
        <Route path="addEmployee" element={<AddEmployee></AddEmployee>}></Route>
        <Route index element={<PersonalAdress user ={user}></PersonalAdress>}></Route>
        </Route>       
        <Route path="/" element={<Login
        setUser={setUser}/>}></Route>
        <Route path="/profile" element={<Profile
        user={user}
        />}></Route>
       
       </Routes>
    </div>
  );
}

export default App;
