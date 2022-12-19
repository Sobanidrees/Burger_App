import Header from "./Header/Header";
import Main from "./Main/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./Header/Login";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<Main />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
