import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-row flex-wrap justify-between'>


      <div className="pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
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
      <div className="pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:w-fit">
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
    </div>
  );
}
