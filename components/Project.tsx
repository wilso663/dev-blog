import Image from 'next/image'
import styles from '../styles/Project.module.css'

type ProjectProps = {
  src: string;
  title: string;
  tags: string[];
  description: string;
  demoURL: string;
  githubURL: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className="project" style={{maxWidth: "350px"}}> 
      <div className="p-3 rounded-md shadow-inner mb-3" style={{maxWidth: "350px", background: '#e2e2e266'}}>   
      <Image
        className="shadow-2xl rounded-sm"
        src={props.src}
        alt={`Cover image for ${props.title} project`}
        width={2400}
        height={1600}
        layout="responsive"
        object-fit="cover"
      />
      </div>
      <h3 className="font-bold mb-2">{props.title}</h3>
      <div className="project--tags flex justify-start mb-3">
        {props.tags.map((tag, index) => {
          return (
            <span key={index} className={styles["project--tag"] + " px-1 py-1 md:px-2 font-bold bg-gray-200 rounded-full mr-2 shadow-inner"}>{tag}</span>
          )
        })}
      </div>
      <p className="text-gray-600 text-sm lg:text-base mb-3">{props.description}</p>
      <div className="project--links flex justify-between" >
        <a className="bg-black pl-2 py-0 md:py-1 lg:py-3 hover:text-blue-500 flex flex-auto lg:mr-4 justify-center items-center rounded-md text-white  text-xs md:text-sm " href={props.demoURL} target="_blank">
          <svg className="fill-current mr-3" fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 64 64">
            <g>
              <path d="M63,30.1C52.9,18.2,42.2,12,32,12c-10.2,0-20.9,6.2-31,18.1c-1,1.1-1,2.8,0,3.9C11.1,45.8,21.8,52,32,52
                c10.2,0,20.9-6.2,31-18.1C63.9,32.8,63.9,31.2,63,30.1z M32,48c-8.7,0-18.4-5.7-27.4-16c9-10.3,18.7-16,27.4-16
                c8.7,0,18.4,5.7,27.4,16C50.4,42.3,40.7,48,32,48z"/>
              <path d="M32,20c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S38.6,20,32,20z M32,40c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8
                S36.4,40,32,40z"/>
            </g>
          </svg>
          Live Demo
        </a>
        <a className="hover:text-blue-500 flex flex-auto items-center justify-center rounded-md bg-white border-2 border-gray-300 text-xs md:text-sm" href={props.githubURL} target="_blank" >
          <svg className="mt-0.5 ml-2 mr-2 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Github repo
        </a>
      </div>
    </div>
  )
}

export default Project