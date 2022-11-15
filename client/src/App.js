import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Logo from "./assets/nobglogo-01.svg"
import { Device } from "./Devices";
import { useState } from "react";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const App = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <Wrapper>
            <TopLogo onClick={() => setSelected("Home")}>
                <img src={Logo} />
            </TopLogo>
        {/* <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={< Home selected={selected} setSelected={setSelected}/>} />
          </Routes>
        </Router> */}
        <GlobalStyles />
        <MobileNav>
        <Pages>
            <div className="page">
              <Home selected={selected} setSelected={setSelected}/>
            </div>
            <div className="page">
              <About selected={selected} setSelected={setSelected}/>
            </div>
            <div className="page">
              <Gallery selected={selected} setSelected={setSelected}/>
            </div>
            <div className="page">
              <Contact selected={selected} setSelected={setSelected}/>
            </div>
        </Pages>
        </MobileNav>
        
        
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;
const TopLogo = styled.div`
    position:fixed;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    img{
      width: 20vw;
    }
    @media ${Device.mobileL}{
        img{
            width: 30vw;
        }
    }
`;
const MobileNav = styled.div`
  display: none;
  @media ${Device.mobileL}{
    display: block;
  }
`;
const Pages = styled.div`
  padding: 5px;
  padding-top: 20vw;
  .page{
    border-bottom: 0.2px black solid;
  }
`;

export default App;
