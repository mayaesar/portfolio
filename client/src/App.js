import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import background from "./assets/bg-01-01.png"
import { BiArrowToTop } from "react-icons/bi";
const App = () => {
  const [scrollingTo, setScrollingTo] = useState();

  useEffect(() => {
    if(scrollingTo){
      const element = document.getElementById(`${scrollingTo}`);
      if (element){
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setScrollingTo();
  },[scrollingTo])
  return (
    <Bg>
        <Wrapper>
            <GlobalStyles />
            <Header setScrollingTo={setScrollingTo}/>
            <div className="border"></div>
            <Home/>
            <div className="border"></div>
            <About/>
            <div className="border"></div>
            <Gallery/>
            <div className="border"></div>
            <Contact />
            <div className="border"></div>
            <Footer />
            <div className="topBtn">
              <button onClick={() => setScrollingTo("top")}><BiArrowToTop/></button>
            </div>
      </Wrapper>
    </Bg>
    
  );
}
const Bg = styled.div`
  background-image: url(${background});
  background-repeat:repeat;
  background-size: cover;
  background-position: top;
`;
const Wrapper = styled.div`
  overflow-x: hidden;
  width: 90%;
  margin: auto;
  border-left: var(--border);
  border-right: var(--border);
  .border{
    border-top: var(--border);
  }
  .topBtn{
    font-size: 3.5vw;
    position: fixed;
    bottom: 20px;
    right:20px;
    z-index: 1;
    border: var(--border);
    color: red;
  }
  button{
    font-size: 3.5vw;
    border: var(--border);
    padding: 5px;
  }
`;


export default App;
