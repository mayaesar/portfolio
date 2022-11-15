import styled from "styled-components";
import { useEffect, useState } from "react";

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
    return(
        <Wrapper>
            <h2 onClick={() => setSelected("Contact")}>Contact Me</h2>
            {isOpen? "open":"closed"}
        </Wrapper>
    );

}
const Wrapper = styled.div`
`;

export default Contact;