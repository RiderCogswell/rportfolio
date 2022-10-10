import React from "react";
import { SimpleGrid, Image } from "@mantine/core";

export const ProjectList = () => {    
    
    const projects = [
        {
            title: 'due',
            technologies: 'React, GraphQL, Mongoose, MongoDB, Express.js, Node.js',
            image: 'due.png',
            link: 'https://due-ucd.herokuapp.com/'
        },
        {
            title: 'Chatter',
            technologies: 'TypeScript, React, Socket.io, Node.js, Inquirer',
            image: 'chatter.png',
            link: 'https://chatterrr.vercel.app/'
        },
        {
            title: 'cmnt',
            technologies: 'Node.js, Express.js, MySQL, Sequelize, Handlebars, Heroku',
            image: 'cmnt.png',
            link: 'https://cmnt-app.herokuapp.com/'
        },
        {
            title: 'loople',
            technologies: 'Vanilla JS, HTML, CSS, Foundation, Youtube API, The News API',
            image: 'loople.png',
            link: 'https://ridercogswell.github.io/tunedin/'
        },        
        {
            title: 'Deep Thoughts',
            technologies: 'GraphQL, React, Mongoose, MongoDB, Express.js, Node.js',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Food Festival',
            technologies: 'Node.js, WebPack, HTML, CSS, PWA',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Shop-Shop',
            technologies: 'React, GraphQL, PWA, Mongoose, MongoDB, Express.js, Node.js, Stripe',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Shop-Shop',
            technologies: 'React, GraphQL, PWA, Mongoose, MongoDB, Express.js, Node.js, Stripe',

            image: 'loople.png',
            link: ''
        },
        {
            title: 'Shop-Shop',
            technologies: 'React, GraphQL, PWA, Mongoose, MongoDB, Express.js, Node.js, Stripe',
            image: 'loople.png',
            link: ''
        },
    ];

    return(
        <SimpleGrid cols={3} style={{margin: 'space-around'}}>
            {projects.map((project) => (
                <div onClick={() => window.location.replace(project.link)}  >
                    <Image 
                        src={require(`../../assets/${project.image}`)}
                        alt={project.title}
                        className='img-thumbnail mx-1'
                        key={project.title}
                        radius='md'
                    />
                    <div className="project-bio">
                        <h4>{project.title}</h4>
                        <p>{project.technologies}</p>
                    </div>
                </div>   
                
            ))}
        </SimpleGrid>
    );
};

export default ProjectList;