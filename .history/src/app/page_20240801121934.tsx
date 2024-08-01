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

    constructor(name: string, description: string, link: string, buttonLabel: string, frontendTechnologies: Array<string>, backendTechnologies: Array<string>) {
      this.name = name;
      this.description = description;
      this.link = link;
      this.buttonLabel = buttonLabel;
      this.frontendTechnologies = frontendTechnologies || [];
      this.backendTechnologies = backendTechnologies || [];
    }
  }

  const fullstack = new Project(
    "Fullstack",
    "En fullstack applicasjon med frontend, backend og database",
    "/Fullstack",
    "Gå til fullstack",
    fullstackFrontendTechnologies,
    fullstackBackendTechnologies
  );

  const numberStepper = new Project(
    "Number stepper",
    "Denne løsningen definerer en React-komponent som lar brukeren justere dato og tid ved hjelp av forskjellige knapper. Her er en kortfattet beskrivelse av funksjonaliteten:",
    "/NumberStepper",
    "Gå til Number stepper",
    fullstackFrontendTechnologies,
    []
  );

  interface ProjectProps {
    project: Project;
  }

  const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    return (
      <div className="flex flex-col justify-between pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
        <h2><span className="font-semibold mb-2">Prosjekt: </span>{project.name}</h2>
        <p>{project.description}</p>
        <div className="flex flex-row">
          {project.frontendTechnologies.length > 0 && (
            <div className="pr-2">
              <h3>Frontend</h3>
              <ul className="mb-4">
                {project.frontendTechnologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project.backendTechnologies.length > 0 && (
            <div className="pr-2">
              <h3>Backend</h3>
              <ul className="mb-4">
                {project.backendTechnologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

          )}
        </div>
        <Link className="link" href={project.link}>{project.buttonLabel}</Link>
      </div>
    );
  };

  return (
    <div className='flex flex-row flex-wrap '>

      <ProjectComponent project={fullstack} />
      <ProjectComponent project={numberStepper} />
    </div>
  );
}
