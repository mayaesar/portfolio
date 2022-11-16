import styled from "styled-components";
import { useEffect, useState } from "react";
import { Device } from "./Devices";

const Contact = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        if(selected === "Contact"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [selected])
    return isOpen?(
        <Wrapper>
            <h2 onClick={() => setSelected("Contact")} className="title">Contact Me</h2>
            <Left>
                <h1>My Socials</h1>
                <div className="social">
                    <p>Instagram</p><p>LOGO</p>
                </div>
                <div className="social">
                    <p>TikTok</p><p>LOGO</p>
                </div>
                <div className="social">
                    <p>YouTube</p><p>LOGO</p>
                </div>
                <div className="social">
                    <p>LinkedIn</p><p>LOGO</p>
                </div>
            </Left>
            <Form>
            <div className="circle"></div>
            <h1>Let's Talk!</h1>
            <button>
                <h1>icon</h1>
                <p>mayaesar@gmail.com</p>
            </button>

            </Form>
        </Wrapper>
    ):(
        <Nav>
            <h2 onClick={() => setSelected("Contact")} className="title">Contact Me</h2>
            <div className="icons">
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
            </div>
        </Nav>
    );

}
const Wrapper = styled.div`
    max-height: 60vh;
    overflow: scroll;
    display: flex;
    .title{
        padding: 8px;
        background-color: white;
        width: 100vw;
        position: fixed;
        font-size: 5vw;
        padding-bottom: 5px;
    }
    h1{
        font-size: 4.5vw;
    }
    p{
        font-size: 4vw;
    }
    @media ${Device.tablet}{
        max-height: 55vh;
        overflow: scroll;
    }
`;
const Nav = styled.div`
    padding: 5px;
    font-size: 5vw;
    .icons{
        display: flex;
        gap: 5px;
    }
    @media ${Device.tablet}{
        font-size: 4vw;
    }
`;
const Left = styled.div`
    margin: 5px;
    padding: 10px;
    margin-top: 35px;
    width: 35vw;
    border:0.2px black solid;
    h1{
        padding-bottom: 20px;
    }
    .social{
        margin-top: 10px;
        display: flex;
        gap: 5px;
        font-size: 3.5vw;
    }
    @media ${Device.tablet}{
        width: 40vw;
        margin-top: 60px;
    }
`;
const Form = styled.div`
    margin: 5px;
    padding: 10px;
    display: grid;
    width: 50vw;
    @media ${Device.tablet}{
        margin-left: 10px;
    }
`;

export default Contact;