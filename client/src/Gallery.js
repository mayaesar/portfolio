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
        h1{
            margin: 5px;
            padding: 5px;
            font-size: 4.5vw;
        }
    @media ${Device.laptop}{
        
    }
`;

const MyProjects = styled.div`
    margin: 5px;
    padding: 10px;
    .buttonContainer{
        background-color: white;
        display: flex;
        gap: 5px;
        width: 100%;
        overflow-x: scroll;
    }
    button{
        font-size: 3.5vw;
        background-color: white;
        border: var(--border);
        padding: 5px;
        min-width:75px;
    }
    @media ${Device.tablet}{
        min-height: 120px;
        padding-top: 30px;
        .buttonContainer{
            position: fixed;
            overflow-x: scroll;
        }
        button{
            width: 170px;
            font-size: 3.5vw;
            padding: 6px;
        }
    }
    @media ${Device.laptop}{
        padding-top: 28px;
        button{
            font-size: 1.4vw;
            border-radius: 1.5vw;
        }
    }
`;

export default Gallery;