import styled from "styled-components";
import { useEffect, useState } from "react";

const Home = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        if(selected === "Home"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [selected])
    return isOpen?(
        <Wrapper>
            <div className="video">
                Insert Video Here
            </div>
            <Text>
            <h1>Welcome</h1>  <br/> 
            <p>Here's my 10 second elevator pitch. <br/> 
                I'm a dynamic, bubbly individual whose mind is in a constant state of ideation. 
                I've been blessed to find my true love so early in my life; one that combines my love of 
                technology and creativity.  How great is that? <br/><br/> 
                My curiosity and creativity are at the forefront of who I am, and am currently embracing 
                new ways to take people on journeys through technology. 
                I've got lots to learn, but am committed to my art, and have many stories to tell.</p>
                <br/> 
                <button onClick={() => setSelected("About")}>Learn more</button>
            </Text>
        </Wrapper>
    ):(
        <>
        </>
    );

}
const Wrapper = styled.div`
    .video{
        height: 200px;
        margin: 5px;
        border: 0.2px black solid;
    }

`;

const Text = styled.div`
    margin: 5px;
    padding: 5px;
    h1{
        font-size: 4vw;
    }
    p{
        font-size: 3.5vw;
    }
    button{
        font-size: 3.5vw;
        background-color: white;
        border: 0.2px black solid;
        border-radius: 2vw;
    }

`;

export default Home;