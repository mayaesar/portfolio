import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Logo from "./assets/logo2023.svg"
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
        <Nav>
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
        </Nav>
        
        
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`;
const TopLogo = styled.div`
    position:fixed;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: white;
    img{
      width: 30vw;
    }
    @media ${Device.tablet}{
      img{
        width: 25vw;
      }
    }
    @media ${Device.laptop}{
        img{
          width: 15vw;
        }
    }
`;
const Nav = styled.div`

`;
const Pages = styled.div`
  padding: 5px;
  padding-top: 25vw;
  .page{
    border-bottom: 0.2px black solid;
  }
  @media ${Device.tablet}{
      padding-top: 18vw;
    }
  @media ${Device.laptop}{
      padding-top: 12vw;
    }
`;

export default App;
