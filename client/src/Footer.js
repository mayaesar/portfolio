import styled from "styled-components";
import {TiSocialLinkedin} from "react-icons/ti";
import {TiSocialYoutube} from "react-icons/ti";
import {TiSocialInstagram} from "react-icons/ti";
import {FaTiktok} from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { Device } from "./Devices";


const Footer = () => {
    return(
        <Wrapper>
            <a href="https://www.instagram.com/maya.esar/" target="_blank">
                <div className="social">
                    <div className="icon"><TiSocialInstagram /></div>
                </div>
            </a>
            <a href="https://www.tiktok.com/@mayaesar" target="_blank">
                <div className="social">
                    <div className="icon"><FaTiktok /></div>
                </div>
            </a>
            <a href="https://www.youtube.com/channel/UCeV96f5YOc7iAe3BIEDfiUg" target="_blank">
                <div className="social">
                    <div className="icon"><TiSocialYoutube /></div>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/mayaesar/" target="_blank">
                <div className="social">
                    <div className="icon"><TiSocialLinkedin /></div> 
                </div>
            </a>
            <a href="https://github.com/mayaesar" target="_blank">
                <div className="social">
                    <div className="icon"><GoMarkGithub /></div> 
                </div>
            </a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 5px;
    margin-bottom: 15px;
    display: flex;
    gap: 10px;
    border-bottom: var(--border);
    .icon{
        font-size: 5vw;
    }
`;

export default Footer;