import styled from "styled-components";
import { Device } from "./Devices";
import Img2 from "./assets/IMG_1824.png";
import Img1 from "./assets/IMG_9908.jpeg";



const About = () => {
    return (
        <Wrapper>
            <h2>About Me</h2>
            <div className="info">
                <Text>
                    <br/>
                    <h1>Hey, I'm Maya.</h1><br/>
                    <p>I'M A FULL-STACK WEB DEVELOPER, WEB DESIGNER, CONTENT CREATOR READY TO SHOW THE WORLD WHAT I GOT!</p>
                    <br/>
                    <p> At age of 12 I started dancing, it was a medium to express myself and a great way to channel my creativity, 
                        in addition to expelling a ton of energy. Dancing allowed me to create something from nothing, which 
                        further fueled a joy that only comes from the love of THE creative process - and from then on, I knew 
                        that I wanted to be a creator.   In grade 9, I discovered a new form of art, the art of coding. Once 
                        again, I found myself able to tell a story, develop something from nothing through media & technology.<br/>
                        <br/>

                        Web development has allowed me to combine my two passions, creativity, and technology in a way that no other 
                        field ever could. Since then, I have honed my coding skills, learning different languages, and I have also 
                        explored the world of multimedia and design.  I remain on this journey to continue fueling my love of 
                        technology and design and look forward to the next chapters as new learnings and experiences continue to 
                        nourish my story.  
                    </p><br/>
                    <button>Contact Me</button>
                </Text>
                <Image className="img2">
                    <img src={Img2}/>
                </Image>
                <Image >
                    <img src={Img1}/>
                </Image>
                <Text>
                    <h1>In case you were wondering...</h1> <br/>
                    <ul>
                        <li>I grew up and live in Montreal (Go Habs go)</li>
                        <li>I can sing most of "The Element of the Periodic Table" song</li>
                        <li>I do my greatest and most creative work at night</li>
                        <li>I'm a Ravenclaw aka the clever and creative house </li>
                        <li>If you challenge me to a dance off I will win</li>
                    </ul>
                </Text>
            </div>

        </Wrapper>
    );

}
const Wrapper = styled.div`
    padding-top: 40px;
    .title{
        padding: 8px;
        background-color: white;
        border-bottom: 0.2px black solid;
        width: 100vw;
        position: fixed;
        font-size: 5vw;
        padding-bottom: 5px;
    }
    .img2{
        display: none;
    }
    @media ${Device.tablet}{
        font-size: 3.5vw;
    }
    @media ${Device.laptop}{
        .title{
            font-size: 2vw;
        }
        .info{
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
        }
        .img2{
            display: block;
        }
    }
`;
const Text = styled.div`
    margin: 5px;
    padding: 10px;
    margin-top: 15px;
    h1{
        font-size: 4.5vw;
    }
    p, li{
        font-size: 4vw;
    }
    li{
        padding-bottom: 3px;
    }
    button{
        font-size: 4.5vw;
        background-color: white;
        border: 1px black solid;
        margin-left: 5vw;
        padding: 5px;
    }
    @media ${Device.tablet}{
        padding-top: 20px;
    }
    @media ${Device.laptop}{
        h1{
            font-size: 2vw;
        }
        p, li{
            font-size: 1.5vw;
        }
        button{
            font-size: 1.5vw;
            border-radius: 2vw;
        }
    }
`;
const Image = styled.div`
        img{
            width: 60vw;
            margin-left: 20vw;
        }
        @media ${Device.laptop}{
            img{
                margin: 10vw;
                width: 30vw;
            }
        }
`;
export default About;