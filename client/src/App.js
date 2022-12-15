import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Header from "./Header";
import "./assets/fonts/PPNeueMachina-PlainUltrabold.otf"

const App = () => {
  
  return (
    <Wrapper>
        <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={< Home/>}/>
            <Route path="/about" element={< About/>}/>
            <Route path="/gallery" element={< Gallery/>}/>
            <Route path="/contact" element={< Contact/>}/>
          </Routes>
        </Router>
        <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;


export default App;
