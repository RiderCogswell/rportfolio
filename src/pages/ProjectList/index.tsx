import React from "react";
import { SimpleGrid, Image } from "@mantine/core";

export const ProjectList = () => {    
    
    const projects = [
        {
            title: 'due',
            technologies: 'React, GraphQL, Mongoose, MongoDB, Express.js, Node.js',
            description: 'Modern application to help everyone track their finances with a Non-Relational databsase and smart design.',
            image: 'due.png',
            link: 'https://due-ucd.herokuapp.com/'
        },
        {
            title: 'cmnt',
            technologies: 'Node.js, Express.js, MySQL, Sequelize, Handlebars, Heroku',
            description: 'Cmnt is a Node.js application that empowers anonymous users with a random topic that they can comment on, like, share, etc.',
            image: 'cmnt.png',
            link: 'https://cmnt-app.herokuapp.com/'
        },
        {
            title: 'loople',
            technologies: 'Vanilla JS, HTML, CSS, Foundation, Youtube API, The News API',
            description: 'Loople is an interactive webpage that allows a user to search a topic and be given a response on the latest news, videos, and in the future, social media posts',
            image: 'loople.png',
            link: 'https://ridercogswell.github.io/tunedin/'
        },        
        {
            title: 'Deep Thoughts',
            technologies: 'GraphQL, React, Mongoose, MongoDB, Express.js, Node.js',
            description: 'Social network platform allowing users, to comment, friend, post and react!',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Food Festival',
            technologies: 'Node.js, WebPack, HTML, CSS, PWA',
            description: 'Website for local food festival where you can reserve tickets, check the schedule, and more!',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Shop-Shop',
            technologies: 'React, GraphQL, PWA, Mongoose, MongoDB, Express.js, Node.js, Stripe',
            description: 'E-Commerce Application utilizing modern technologies.',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Shop-Shop',
            technologies: 'React, GraphQL, PWA, Mongoose, MongoDB, Express.js, Node.js, Stripe',
            description: 'E-Commerce Application utilizing modern technologies.',
            image: 'loople.png',
            link: ''
        },
        {
            title: 'Shop-Shop',
            technologies: 'React, GraphQL, PWA, Mongoose, MongoDB, Express.js, Node.js, Stripe',
            description: 'E-Commerce Application utilizing modern technologies.',
            image: 'loople.png',
            link: ''
        },
    ];

    return(
        <SimpleGrid cols={4} spacing={'xl'} >
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