import styled from "styled-components";
import Logo from "./assets/nobglogo-01.svg"
import { Device } from "./Devices";
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";
const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return(
        <Wrapper>
            <TopLogo>
                <img class="logo" src={Logo} />
            </TopLogo>
            <HamburgerMenu>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </HamburgerMenu>
                {
                    isOpen?(
                        <OpenedMenu>
                    <li>
                        Home
                    </li>
                    <li>
                        About Me
                    </li>
                    <li>
                        Gallery
                    </li>
                    <li>
                        Contact Me
                    </li>
                </OpenedMenu>
                    ):(
                        <></>
                    )
                }
            
        </Wrapper>
    );

}
const Wrapper = styled.div`
    img{
        width: 15vw;
    }
`;
const TopLogo = styled.div`
    position:fixed;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    @media ${Device.mobileL}{
        width: 40vw;
        img{
            width: 30vw;
        }
    }
`;
const HamburgerMenu = styled.div`
    display: none;
    @media ${Device.mobileL}{
        display: block;
        position:fixed;
        left: 80vw;
        top: 8vw;
    }
`;
const OpenedMenu = styled.div`
    z-index: -1;
    list-style: none;
    padding: 20px;
    background-color: lightgray;
    position: absolute;
    left: 55vw;
    top: 6vw;
    width: 40vw;
    padding-top: 50px;
    li{
        padding: 5px;
    }
`;

export default Header;