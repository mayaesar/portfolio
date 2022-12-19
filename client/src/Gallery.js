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
        @media ${Device.tablet}{
        h1{
            font-size: 4vw;
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
    button{
        font-size: 3.5vw;
        background-color: #A0AEDC;
        border: var(--border);
        padding: 5px;
        min-width:75px;
    }
    @media ${Device.tablet}{
        padding: 30px;
        .buttonContainer{
            gap: 10px;
        }
        button{
            font-size: 3vw;
            min-width: 150px;
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