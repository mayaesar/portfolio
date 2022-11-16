import styled from "styled-components";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import { Device } from "./Devices";

const Gallery = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(true);
    const [displayCategory, setDisplayCategory] = useState("all");

    useEffect(() => {
        if(selected === "Gallery"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [selected]);

    return isOpen?(
        <Wrapper>
            <h2 onClick={() => setSelected("Gallery")} className="title">Gallery</h2>
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
    ):(
        <Nav>
            <h2 onClick={() => setSelected("Gallery")} className="title">Gallery</h2>
        </Nav>
    )

}
const Wrapper = styled.div`
    max-height: 60vh;
    overflow: scroll;
    .title{
        padding: 8px;
        background-color: white;
        width: 100vw;
        position: fixed;
        font-size: 5vw;
        padding-bottom: 5px;
    }
    @media ${Device.tablet}{
        max-height: 55vh;
        overflow: scroll;
    }
`;
const Nav = styled.div`
    padding: 5px;
    font-size: 5vw;
    @media ${Device.tablet}{
        font-size: 4vw;
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
`;

export default Gallery;