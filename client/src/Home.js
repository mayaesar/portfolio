import styled from "styled-components";
import { Device } from "./Devices";
import FinalVideo from "./assets/finalProjectVideo.mov";

const Home = ({setScrollingTo}) => {
    return (
        <Wrapper id="top">
            <div className="video" >
                <video src={FinalVideo} type="video/mov" controls="controls" autoplay="true"/>
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
                    <button onClick={() => setScrollingTo("about")}>Learn more</button>
            </Text>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    padding-top: 10px;
    video{
        width: 90%;
        margin-left: 5%;
        border: var(--border);
    }
    @media ${Device.laptop}{
        margin: 10px;
        display: flex;
        justify-content: center;
        gap: 50px;
        video{
            margin-top: 75px;
            width: 35vw;
        }
    }
`;

const Text = styled.div`
    margin: 5px;
    padding: 5px;
    h1{
        font-size: 4.5vw;
    }
    p{
        font-size: 4vw;
    }
    button{
        font-size: 3.5vw;
        background-color: #A0AEDC;
        border: var(--border);
        padding: 5px;
        font-family: var(--primary-font-family);
    }

    @media ${Device.tablet}{
        margin: 10px;
        padding: 10px;
        h1{
            font-size: 4vw;
        }
        p{
            font-size: 3.2vw;
        }
        button{
            font-size: 3.2vw;
        }
    }
    @media ${Device.laptop}{
        h1{
            font-size: 1.8vw;
        }
        p{
            font-size: 1.5vw;
        }
        button{
            font-size: 1.8vw;
        }
    }
`;

export default Home;