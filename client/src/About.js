import styled from "styled-components";
import { useEffect, useState } from "react";

const About = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        console.log(selected)
        if(selected === "About"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [selected])
    return(
        <Wrapper>
            <h2 onClick={() => setSelected("About")}>About Me</h2>
            {isOpen? "open":"closed"}
        </Wrapper>
    );

}
const Wrapper = styled.div`

`;

export default About;