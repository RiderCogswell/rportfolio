import React from "react";
import { SimpleGrid } from "@mantine/core";

export const ProjectList = () => {    
    
    const projects = [
        {
            title: 'due',
            technologies: 'React, GraphQL, Mongoose, MongoDB, Express.js, Node.js',
            description: 'Modern application to help everyone track their finances with a Non-Relational databsase and smart design.',
            image: 'due.png',
            link: 'https://due-ucd.herokuapp.com/'
        },
        // {
        //     title: 'cmnt',
        //     technologies: 'Node.js, Express.js, MySQL, Sequelize, Handlebars, Heroku',
        //     description: 'Cmnt is a Node.js application that empowers anonymous users with a random topic that they can comment on, like, share, etc.',
        //     image: 'cmnt.png',
        //     link: 'https://cmnt-app.herokuapp.com/'
        // }
    ];

    return(
        <SimpleGrid cols={3}>
            <div className='flex-row'>
                {projects.map((project) => (
                    <div className="projects" onClick={() => window.location.replace(project.link)}>
                        <img 
                            src={require(`../../assets/${project.image}`)}
                            alt={project.title}
                            className='img-thumbnail mx-1'
                            key={project.title}
                        />
                        <div className="project-bio">
                            <h3 className="project-name">{project.title}</h3>
                            <h4 className="project-bio">{project.technologies}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </SimpleGrid>
    );
};

export default ProjectList;