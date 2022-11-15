import styled from "styled-components";
import { useEffect, useState } from "react";
import RestaurantImg from "./assets/covers/Screen Shot 2022-05-02 at 7.29.18 PM.png";
import KitchenImg from "./projectsFolder/kitchenDrawing/drawingthing.png";
import CorbusierImg from "./projectsFolder/leCorbusier/assignment1full.png";

const Projects = ({displayCategory}) => {
const [displaying, setDisplaying] = useState(null);

const projects = [
    {img: RestaurantImg,
        title:"Restaurant site",
        category:"front",
        description:"This was a class project at CDI College where I create a site with a minimum of 3 pages.",
        modal:"./assets/covers/Screen Shot 2022-05-02 at 7.29.18 PM.png",
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
            {displaying.map((project) => {
                return(
                    <Card>
                        <img src={project.img}/>
                        <div className="text">
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </Card>
                )
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
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
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
        font-size: 3.4vw;
    }

`;

export default Projects;