import styled from "styled-components";
import { useEffect, useState } from "react";
import { Device } from "./Devices";
import {TiSocialLinkedin} from "react-icons/ti";
import {TiSocialYoutube} from "react-icons/ti";
import {TiSocialInstagram} from "react-icons/ti";
import {FaTiktok} from "react-icons/fa";
import {TfiEmail} from "react-icons/tfi";
const Contact = () => {
    return (
        <Wrapper>
            <h2>Contact Me</h2>
            <Left>
            
                <a href="https://www.instagram.com/maya.esar/" target="_blank">
                    <div className="social">
                        <p>Instagram</p><div className="icon"><TiSocialInstagram /></div>
                    </div>
                </a>
                <a href="https://www.tiktok.com/@mayaesar" target="_blank">
                    <div className="social">
                        <p>TikTok</p><div className="icon"><FaTiktok /></div>
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCeV96f5YOc7iAe3BIEDfiUg" target="_blank">
                    <div className="social">
                        <p>YouTube</p><div className="icon"><TiSocialYoutube /></div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/mayaesar/" target="_blank">
                    <div className="social">
                        <p>LinkedIn</p><div className="icon"><TiSocialLinkedin /></div> 
                    </div>
                </a>
            </Left>
            <Form>
            <div className="circle"></div>
            <h1>Let's Collaborate!</h1>
                <p>OK, so now you know a little about me.<br/>
                    Let's connect and have a conversation.<br/>
                    Let's talk creativity.<br/>
                    Let's explore projects.<br/>
                    Who knows, we might just be a good fit.<br/></p>

            </Form>
        </Wrapper>
    );

}
const Wrapper = styled.div`
    padding-top: 40px;
    display: flex;
    .title{
        padding: 8px;
        background-color: #E6E1F1;
        border-bottom: 0.2px black solid;
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
    @media ${Device.laptop}{
        .title{
            font-size: 2vw;
        }
    }
    
`;

const Left = styled.div`
    margin: 5px;
    padding: 10px;
    margin-top: 35px;
    width: 35vw;
    h1{
        padding-bottom: 20px;
    }
    .social{
        margin-top: 10px;
        display: flex;
        gap: 5px;
        font-size: 3.5vw;
    }
    .icon{
        font-size: 3.5vw;
        padding-left: 20px;
    }
    @media ${Device.tablet}{
        width: 40vw;
        margin-top: 60px;
    }
    @media ${Device.laptop}{
        h1{
            font-size: 2vw;
        }
        p, li{
            font-size: 1.5vw;
        }
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
    @media ${Device.laptop}{
        h1{
            font-size: 2vw;
        }
        p, li{
            font-size: 1.5vw;
        }
        button{
            font-size: 1.5vw;
            border-radius: 2vw;
        }
    }
`;

export default Contact;