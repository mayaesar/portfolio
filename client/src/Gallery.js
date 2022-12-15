import styled from "styled-components";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import { Device } from "./Devices";

const Gallery = () => {
    const [displayCategory, setDisplayCategory] = useState("all");


    return (
        <Wrapper>
            <h2>Gallery</h2>
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
    padding-top: 40px;
    .title{
        padding: 8px;
        background-color: #E6E1F1;
        border-bottom: 0.2px black solid;
        width: 100vw;
        position: fixed;
        font-size: 5vw;
        padding-bottom: 5px;
    }
    @media ${Device.laptop}{
        .title{
            font-size: 2vw;
        }
    }
`;

const MyProjects = styled.div`
    margin: 5px;
    padding: 10px;
    margin-top: 20px;
    .buttonContainer{
        background-color: white;
        display: flex;
        gap: 10px;
        width: 100vw;
        padding-bottom: 12px;
        position: fixed;
        overflow-x: scroll;
        padding-top: 12px;
    }
    button{
        font-size: 3.5vw;
        background-color: white;
        border: 0.2px black solid;
        border-radius: 2vw;
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