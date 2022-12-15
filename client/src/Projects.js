import styled from "styled-components";
import { useEffect, useState } from "react";
import RestaurantImg from "./assets/covers/Screen Shot 2022-05-02 at 7.29.18 PM.png";
import KitchenImg from "./projectsFolder/kitchenDrawing/drawingthing.png";
import CorbusierImg from "./projectsFolder/leCorbusier/assignment1full.png";
import SchedulerProject from "./projectsFolder/schedulerProject/Screenshot 2022-11-17 at 2.04.28 PM.png";
import GarfieldGame from "./projectsFolder/garfieldGame/Screenshot 2022-11-17 at 1.56.00 PM.png";
import GroupProject from "./projectsFolder/eComGroup/Screen_Shot_2022-11-17_at_14.44.09.png";
import Modal from "./Modal";
import { Device } from "./Devices";

const Projects = ({displayCategory}) => {
const [displaying, setDisplaying] = useState(null);
const [show, setShow] = useState(false);
const [modal, setModal] = useState(null);

const projects = [
    {img:SchedulerProject,
        title:"Add me to your Schedule",
        category:"full",
        description:"This is a reverse scheduler where you add your free time to your calendar and connect with friends to make plans.",
        modal:null,
        link:null,
        },
    {img:GroupProject,
        title:"E-commerce site",
        category:"full",
        description:"This was a group project at Concordia's bootcamp where we had to create an E-commerce site with the products we were given.",
        modal:null,
        link:null,
        },
    {img:GarfieldGame,
        title:"Garfield Game",
        category:"front",
        description:"This was a project at Concordia's bootcamp where I created a game that involved the player to use their keyboard.",
        modal:null,
        link:"https://classy-smakager-3ffa68.netlify.app/",
        },
    {img: RestaurantImg,
        title:"Restaurant site",
        category:"front",
        description:"This was a class project at CDI College where I create a site with a minimum of 3 pages.",
        modal: RestaurantImg,
        link:null,
        },
    {img: KitchenImg,
        title:"Kitchen Drawing",
        category:"illustrator",
        description:"This was a project for Illustration 1 at CDI College where I re-created an image.",
        modal: KitchenImg,
        link:null,
        },
    {img:CorbusierImg,
        title:"Le Corsbusier",
        category:"layout",
        description:"This was a project for Layout Fundamental at CDI College where I re-created a site for Le Corbusier.",
        modal: CorbusierImg,
        link:null,
        },
    // {img:null,
    //     title:null,
    //     category:null,
    //     description:null,
    //     modal:null,
    //     link:null,
    //     },
]

    useEffect(() => {
        if(displayCategory === "all"){
            setDisplaying(projects);
        }
        else{
            let tempArray = [];
            projects.map((project) => {
                if(project.category === displayCategory){
                    tempArray.push(project)
                }
            })
            setDisplaying(tempArray);
        }
    }, [displayCategory])

    return displaying?(
        <Wrapper>
            <Modal show={show} modal={modal} onClose={() => setShow(false)}/>
            {displaying.map((project) => {
                if(project.modal !== null){
                    return(
                        <Card onClick={() => {
                            setShow(true) 
                            setModal(project.modal)}}>
                            <img src={project.img}/>
                            <div className="text">
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                            </div>
                        </Card>
                    );
                }
                else{
                    return(
                        <a href={project.link} target="_blank">
                            <Card>
                                <img src={project.img}/>
                                <div className="text">
                                    <h1>{project.title}</h1>
                                    <p>{project.description}</p>
                                </div>
                            </Card>
                        </a>
                        
                    );
                }
            })}
        </Wrapper>
    ):(
        <>
        </>
    );
}

const Wrapper = styled.div`
    max-width: 90vw;
    margin: auto;
    padding-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    @media ${Device.tablet}{
        padding-top: 110px;
    }
    @media ${Device.laptop}{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    a{
        text-decoration: none;
    }
`;
const Card = styled.div`
    background-color: white;
    border: 0.2px black solid;
    padding: 2px;
    img{
        margin: 2vw;
        width: 40vw;
        height: 20vw;
        object-fit: cover;
    }
    .text{
        padding: 5px;
        height: 70px;
        overflow: scroll;
    }
    h1{
        font-size: 4vw;
    }
    p{
        font-size: 3.5vw;
    }
    @media ${Device.tablet}{
        h1{
            font-size: 3.7vw;
        }
    }
    @media ${Device.laptop}{
        img{
            margin: 1vw;
            width: 20vw;
            height: 11vw;
        }
        h1{
            font-size: 1.5vw;
        }
        p, li{
            font-size: 1vw;
        }
    }
    
`;

export default Projects;