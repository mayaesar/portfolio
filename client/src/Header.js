import styled from "styled-components";
import { Device } from "./Devices";
import Logo from "./assets/logo2023.svg";

const Header = ({setScrollingTo}) => {
    return(
        <Wrapper>
            <img src={Logo}/>
            <h2 onClick={() => setScrollingTo("about")}>About Me</h2>
            <h2 onClick={() => setScrollingTo("gallery")}>Gallery</h2>
            <h2 onClick={() => setScrollingTo("contact")} className="last">Contact Me</h2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 10px;
    border-top: var(--border);
    display: flex;
    gap: 5px;
    img{
        margin-left: 5px;
        padding-bottom: 10px;
        width: 22vw;
        border-right: var(--border);
    }
    h2{
        padding-top: 25px;
        border-right: var(--border);
    }
    .last{
        border: none;
    }


`;

export default Header;