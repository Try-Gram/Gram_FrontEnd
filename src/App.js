import { Login, Home, Direct } from "./pages";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/direct" element={<Direct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

