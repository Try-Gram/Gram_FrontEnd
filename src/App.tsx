import { global } from "styles/GlobalStyle";
import { Login, Home, Direct } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {global}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/direct" element={<Direct />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
