import styled from "styled-components";
import { useEffect, useState } from "react";

const Home = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        console.log(selected)
        if(selected === "Home"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [selected])
    return(
        <Wrapper>
            {isOpen? "open":"closed"}
        </Wrapper>
    );

}
const Wrapper = styled.div`
`;

export default Home;