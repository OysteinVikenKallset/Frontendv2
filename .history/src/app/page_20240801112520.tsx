import React from 'react';
import Link from 'next/link';

const TechList = ({ title, technologies }) => {
  return (
      <div>
          <h3>{title}</h3>
          <ul>
              {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
              ))}
          </ul>
      </div>
  );
};




const ProjectDetails = ({ projectName, technologies, link }) => {
  return (
      <div className="flex flex-col justify-between pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
          <h2><span className="font-semibold">Prosjekt:</span> {projectName}</h2>
          <ul>
              {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
              ))}
          </ul>
          <Link className="link" href={link}>Gå til {projectName}</Link>
      </div>
  );
};




const Page = () => {
    const backendTechnologies = ['C#', '.net', 'SQL lite'];
    const projectTechnologies = ['HTML', 'Moment.js', 'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind.css'];

    return (
        <div>
            <div>
                <TechList title="Backend" technologies={backendTechnologies} />
            </div>
            <Link className="link" href="/Fullstack">Gå til Fullstack</Link>
            <ProjectDetails 
                projectName="Numberstepper" 
                technologies={projectTechnologies} 
                link="/NumberStepper" 
            />
        </div>
    );
};

export default Page;