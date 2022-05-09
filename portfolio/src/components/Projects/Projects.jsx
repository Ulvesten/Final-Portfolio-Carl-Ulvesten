import React from 'react';
import './Projects.css';
import { ProjectHighlight } from '../components';
import { useEffect, useState } from 'react';
import projects from '../../projects';
import './Projects.css';

function Projects() {
    /* const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../public/projects.json');
                const projects = await response.json();
                console.log(projects);
                setProjects(projects);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []); */
    return (
        <div id='Projects'>
            {projects.map((project, i) => (
                <ProjectHighlight
                    key={i}
                    {...project}
                    even={i % 2 === 0}
                    id='ProjectHighlight'
                />
            ))}
        </div>
    );
}

export default Projects;
