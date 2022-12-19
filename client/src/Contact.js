import styled from "styled-components";
import { Device } from "./Devices";

const Contact = () => {
    return (
        <Wrapper>
            <h1 id="contact">Contact Me</h1>
            <div className="border"></div>
            <Text>
            <h2>Let's Collaborate!</h2>
                <p>OK, so now you know a little about me.<br/>
                    Let's connect and have a conversation.<br/>
                    Let's talk creativity.<br/>
                    Let's explore projects.<br/>
                    Who knows, we might just be a good fit.<br/></p>
            </Text>
        </Wrapper>
    );

}
const Wrapper = styled.div`
    padding-top: 10px;
    h1{
        margin: 5px;
        padding: 5px;
        font-size: 4.5vw;
    }
    h2{
        font-size: 4vw;
    }
    p{
        padding-top: 10px;
        font-size: 4vw;
    }
    @media ${Device.tablet}{
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
            font-size: 2vw;
        }
    }
`;

const Text = styled.div`
    margin: 5px;
    padding: 10px;
    display: grid;
    @media ${Device.laptop}{
        h2{
            font-size: 1.8vw;
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

export default Contact;