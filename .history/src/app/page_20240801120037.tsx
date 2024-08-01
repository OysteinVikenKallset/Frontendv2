import Image from "next/image";
import Link from 'next/link'

export default function Home() {

  const fullstackBackendTechnologies = ['C#', '.net', 'SQL lite'];
  const fullstackFrontendTechnologies = ['HTML', 'React.js', 'Next.js', 'Axios.js', 'JavaScript', 'TypeScript', 'Tailwind.css'];
  const numberStepperTechnologies = ['HTML', 'Moment.js', 'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind.css'];


  class Project {
    name: string;
    description: string;
    link: string;
    buttonLabel: string;
    frontendTechnologies: Array<string>;
    backendTechnologies: Array<string>;

    constructor(name: string, description: string, link:string, buttonLabel:string, frontendTechnologies: Array<string>, backendTechnologies: Array<string>) {
      this.name = name;
      this.description = description;
      this.link = link;
      this.buttonLabel = buttonLabel;
      this.frontendTechnologies = frontendTechnologies || [];
      this.backendTechnologies = backendTechnologies || [];
    }
  }

  const fullstack = new Project("Fullstack", "En fullstack applicasjon med frontend, backend og database", "/Fullstack", "Gå til fullstack", fullstackFrontendTechnologies, fullstackBackendTechnologies);

  interface ProjectProps {
    project: Project;
  }

  const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    return (
      <div className="flex flex-col justify-between pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
        <h2><span className="font-semibold">Prosjekt: </span>{project.name}</h2>
        <div className="flex flex-row">
          <div className="pr-2">
            <h3>Frontend</h3>
            <ul>
              {project.frontendTechnologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Backend</h3>
            <ul>
              {project.backendTechnologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link className="link" href="/Fullstack">Gå til Fullstack</Link>
      </div>
    );
  };

  return (
    <div className='flex flex-row flex-wrap '>


      <div className="flex flex-col justify-between pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
        <h2><span className="font-semibold">Prosjekt: </span>Fullstack</h2>
        <div className="flex flex-row">
          <div className="pr-2">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Axios.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Tailwind.css</li>
            </ul>
          </div>
          <div>
            <h3>Backend</h3>
            <ul>
              <li>C#</li>
              <li>.net</li>
              <li>SQL lite</li>
            </ul>
          </div>

        </div>
        <Link className="link" href="/Fullstack">Gå til Fullstack</Link>
      </div>
      <div className="flex flex-col justify-between pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
        <h2><span className="font-semibold">Prosjekt:</span>Numberstepper</h2>
        <ul>
          <li>HTML</li>
          <li>Moment.js</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Tailwind.css</li>
        </ul>
        <Link className="link" href="/NumberStepper">Gå til NumberStepper</Link>
      </div>
      <ProjectComponent project={fullstack} />
    </div>
  );
}
