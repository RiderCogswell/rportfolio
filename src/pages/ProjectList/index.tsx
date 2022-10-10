import React from "react";
import { SimpleGrid, Image, Anchor } from "@mantine/core";

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
        <SimpleGrid cols={3}      
             breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
            {projects.map((project) => (
                <Anchor href={project.link} color='dimmed' >
                    <Image 
                        src={require(`../../assets/${project.image}`)}
                        alt={project.title}
                        className='img-thumbnail mx-1'
                        key={project.title}
                        radius='md'
                    />
                    <div className="project-bio link">
                        <h4 style={{color: 'var(--tertiary-color)'}}>{project.title}</h4>
                        <p>{project.technologies}</p>
                    </div>
                </Anchor>   
                
            ))}
        </SimpleGrid>
    );
};

export default ProjectList;