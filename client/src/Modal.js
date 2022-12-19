import styled from "styled-components";

const Modal = ({modal, show, onClose}) => {
    return show?(
        <Wrapper>
            <div className="modalContent">
                <button onClick={() => onClose()}>X</button>
                <img src={modal}/>
            </div>
        </Wrapper>
    ):(
        null
    )
}
const Wrapper = styled.div`
    z-index: 1;
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    .modalContent{
        padding: 2vw;
        width: 90vw;
        max-height: 80vh;
        overflow: scroll;
        background-color: white;
    }
    button{
        background-color: rgba(255, 255, 255, 0.0);
        text-decoration: none;
        padding: .2vw;
        margin-right: 1vw;
    }
    img{
        width: 85vw;
        object-fit: cover;
    }
`;
export default Modal;