import styled from "styled-components";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import { Device } from "./Devices";

const Gallery = () => {
    const [displayCategory, setDisplayCategory] = useState("all");
    return (
        <Wrapper>
            <h1 id="gallery">Gallery</h1>
            <div className="border"></div>
            <MyProjects>
                <div className="buttonContainer">
                    <button className="btn active" onClick={() => setDisplayCategory("all")}> Show all</button>
                    <button className="btn" onClick={() => setDisplayCategory("full")}> Full-Stack</button>
                    <button className="btn" onClick={() => setDisplayCategory("front")}> Frontend</button>
                    <button className="btn" onClick={() => setDisplayCategory("layout")}> Web Layouts</button>
                    <button className="btn" onClick={() => setDisplayCategory("illustrator")}> Illustrator</button>
                    <button className="btn" onClick={() => setDisplayCategory("video")}> Video Edits</button>
                </div>
                <div>
                    <Projects displayCategory={displayCategory}/>
                </div>
            </MyProjects>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    padding-top: 10px;
    #gallery{
        margin: 5px;
        padding: 5px;
        font-size: 4.5vw;
    }
    @media ${Device.tablet}{
        #gallery{
            font-size: 4vw;
        }
    }
    @media ${Device.laptop}{
        #gallery{
            font-size: 2vw;
        }
    }
`;

const MyProjects = styled.div`
    margin: 5px;
    padding: 10px;
    .buttonContainer{
        display: flex;
        gap: 5px;
        width: 100%;
        overflow-x: scroll;
    }
    .btn{
        font-size: 3.5vw;
        font-family: var(--primary-font-family);
        background-color: #A0AEDC;
        border: var(--border);
        padding: 5px;
        min-width:95px;
    }
    @media ${Device.tablet}{
        padding: 30px;
        .buttonContainer{
            gap: 10px;
        }
        .btn{
            font-size: 3vw;
            min-width: 155px;
        }
    }
    @media ${Device.laptop}{
        padding-top: 28px;
        .btn{
            font-size: 1.5vw;
        }
    }
`;

export default Gallery;