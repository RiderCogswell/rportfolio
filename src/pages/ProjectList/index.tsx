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
        <SimpleGrid 
            spacing='xl'      
            breakpoints={[
                { minWidth: 'sm', cols: 2 },
                { minWidth: 'md', cols: 3 },
                { minWidth: 1200, cols: 4 },
            ]}
        >
            {projects.map((project) => (
                <Anchor 
                    href={project.link} 
                    color='dimmed' 
                    target='_blank'
                >
                    <h2 
                        className="link" 
                        style={{color: 'var(--tertiary-color)', marginBottom: '25px'}}
                    >
                        {project.title}
                    </h2>
                    <Image 
                        src={require(`../../assets/${project.image}`)}
                        alt={project.title}
                        className='img-thumbnail mx-1'
                        key={project.title}
                        radius='md'
                    />
                    <div 
                        className="project-bio link" 
                        style={{marginTop: '25px'}}
                    >
                        <p>{project.technologies}</p>
                    </div>
                </Anchor>             
            ))}
        </SimpleGrid>
    );
};

export default ProjectList;