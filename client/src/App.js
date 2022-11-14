import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <Wrapper>
        <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={< Home />} />
          </Routes>
        </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;

export default App;
