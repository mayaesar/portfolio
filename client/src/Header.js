import styled from "styled-components";
import { useEffect, useState } from "react";
import { Device } from "./Devices";
import { Link } from "react-router-dom";
import Logo from "./assets/logo2023.svg";

const Header = () => {
    return(
        <Wrapper>
            <HeaderLinks to={"/"}>Home</HeaderLinks>
            <HeaderLinks to={"/about"}>About Me</HeaderLinks>
            <HeaderLinks to={"/gallery"}>Gallery</HeaderLinks>
            <HeaderLinks to={"/contact"}>Contact Me</HeaderLinks>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    position:fixed;
    left: 0;
    right: 0;
`;


const HeaderLinks = styled(Link)`
    text-decoration: none;
    padding: 2px;
    font-family: var(--primary-font-family);
    
`;
export default Header;