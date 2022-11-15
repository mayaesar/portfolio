import styled from "styled-components";
import { useEffect, useState } from "react";

const Gallery = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        console.log(selected)
        if(selected === "Gallery"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [selected])
    return(
        <Wrapper>
            <h2 onClick={() => setSelected("Gallery")}>Gallery</h2>
            {isOpen? "open":"closed"}
        </Wrapper>
    );

}
const Wrapper = styled.div`
`;

export default Gallery;