import styled from "styled-components";
import { useEffect, useState } from "react";
import Projects from "./Projects";

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
    max-height: 75vh;
    overflow: scroll;
    .title{
        padding: 8px;
        background-color: white;
        width: 100vw;
        position: fixed;
        font-size: 5vw;
        padding-bottom: 5px;
    }
`;
const Nav = styled.div`
    padding: 5px;
    font-size: 5vw;
`;

const MyProjects = styled.div`
    margin: 5px;
    padding: 10px;
    margin-top: 30px;
    .buttonContainer{
        display: flex;
        gap: 10px;
        width: 100vw;
        padding-bottom: 12px;
        position: fixed;
        overflow-x: scroll;
    }
    button{
        font-size: 3.5vw;
        background-color: white;
        border: 0.2px black solid;
        border-radius: 2vw;
        min-width:75px;
    }
`;

export default Gallery;