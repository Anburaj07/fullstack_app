import styled from "styled-components";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <DIV className="App">
      <Navbar />
      <AllRoutes />
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  background-image: linear-gradient(to top, #b0b0b0 0%, #9a9b9d 100%);
  height: 950px;
`;
