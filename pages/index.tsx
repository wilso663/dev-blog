import type { NextPage, GetStaticProps,NextApiResponse } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import * as path from 'path'
import HomeNav from '../components/HomeNav'
import MTGCard from '../components/MTGCard'
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export interface PostsType {
  frontMatter: {
    [key: string]: any;
  };
  slug: string;
}

export interface ProjectDataProps {
  src: string;
  title: string;
  tags: string[];
  description: string;
  demoURL: string;
  githubURL: string;
}

export type Props = {
  data: ProjectDataProps[];
}

const Home: React.FC<Props> = (props: Props) => {
  
  return (
    <div className="ml-4 mr-4 md:ml-28 md:mr-28">
      <Head>
        <title>Stephen's Portfolio &amp; Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeNav
      />
      <section className={styles["about-section"] + ' max-w-5xl mb-8'} id='about-section'>
        <h1 className={styles['greeting'] + ' font-bold text-xl md:text-3xl'}> Hi, I'm Stephen, a fullstack web developer in South Carolina.</h1>
        <div className={styles["mtg-card"]}>
        <MTGCard/>
        </div>
        <div className={styles["about-description"] + " mb-6"}>
          <p>I've worked as a Data Engineer and Production Supportwith the Atos-Syntel corporation at CUNA Mutual to create and maintain Big Data enterprise processes.</p>
          <div className="">
            <p>That blue trading card on this page? I used to love playing card games when I was younger, so I thought I'd try to remake one with Next.js and vanilla CSS. If you want read about how it was made or my other recent developments, the details are on my blog <Link href="/blog/mtg-card-css"><a className="text-blue-500 hover:underline">here.</a></Link></p>
            <p>I'm a graduate of the University of South Carolina Upstate in Spartanburg, SC with a Bachelor's Degree in Computer Science. I have also completed the Scrimba career path bootcamp for frontend development, my certification is located <a className="text-blue-500 hover:underline" href="https://scrimba.com/certificate/uB3mmVCW/gfrontend" target="_blank">here</a>
            </p>

            <p>My experience with Atos-Syntel has given me the opportunity to colloborate with large and small teams, multiple timezones, and directly with customers has allowed me to adapt and learn multiple technology stacks and roles.</p>

            <p>I am currently looking for a role as a Fullstack Developer.</p>
            <div className="cta-buttons flex mt-5 items-center">
              <a className="text-xs md:text-sm flex mr-5 px-2 py-2 
                            md:px-3 md:py-4 bg-black text-white 
                            rounded-md shadow-md hover:text-blue-500" 
                href="https://www.linkedin.com/in/wilso663" 
                target="_blank">View Linkedin
                <svg className="ml-2 mt-0.5 fill-current" 
                fill="#d1d5db" 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a className="text-xs md:text-sm flex mr-5 px-2 py-2 md:px-3 md:py-3 
                            border-2 border-gray-300 rounded-md shadow-md 
                            hover:text-blue-600" 
                 href="https://www.github.com/wilso663" target="_blank">View Github
                <svg className="ml-2 p-0.25 fill-current" 
                fill="#d1d5db" 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a className="text-xs md:text-sm flex mr-5 px-2 py-2 md:px-3 md:py-3 
                            border-2 border-cyan-500 shadow-md rounded bg-cyan-500 
                            text-white hover:text-blue-700" 
                 href="./assets/Stephen's Resume.pdf" 
                 download="Stephen's Resume.pdf">Download Resume
                <svg version="1.1" 
                fill="#FFF" 
                className="fill-current ml-1" 
                xmlns="http://www.w3.org/2000/svg"
	              width="20px" 
                height="20px" 
                viewBox="0 0 537.794 537.795">
                <g>
                  <g>
                    <path d="M463.091,466.114H74.854c-11.857,0-21.497,9.716-21.497,21.497v28.688c0,11.857,9.716,21.496,21.497,21.496h388.084
                      c11.857,0,21.496-9.716,21.496-21.496v-28.688C484.665,475.677,474.949,466.114,463.091,466.114z"/>
                    <path d="M253.94,427.635c4.208,4.208,9.716,6.35,15.147,6.35c5.508,0,11.016-2.142,15.147-6.35l147.033-147.033
                      c8.339-8.338,8.339-21.955,0-30.447l-20.349-20.349c-8.339-8.339-21.956-8.339-30.447,0l-75.582,75.659V21.497
                      C304.889,9.639,295.173,0,283.393,0h-28.688c-11.857,0-21.497,9.562-21.497,21.497v284.044l-75.658-75.659
                      c-8.339-8.338-22.032-8.338-30.447,0l-20.349,20.349c-8.338,8.338-8.338,22.032,0,30.447L253.94,427.635z"/>
                  </g>
                </g>
                </svg> 
              </a>
            </div>
            </div>
        </div>

      </section>
      <section className="mb-16" id="projects-section">
        <h2 className="font-bold text-xl mb-6">Recent Projects</h2>
        <div className="project--grid grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5" 
        style={{maxWidth: '68rem'}}>

          {props.data.map((project:any, index:any) => {
            return (
              <Project key={index} 
                src={project.src}
                title={project.title}
                tags={project.tags}
                description={project.description}
                demoURL={project.demoURL}
                githubURL={project.githubURL}
              />
            )
          })}

        </div>
      </section>
      <section id="contact-section"><h2 className="font-bold text-xl mb-4">Contact Me</h2>
      <ContactForm/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Home

export const getStaticProps = async() => {
    const PROJECT_PATH = path.join(process.cwd(), 'project-data')
    const fileContents = fs.readFileSync(PROJECT_PATH + '/data.json')
    const jsonData = JSON.parse(fileContents.toString())
    return {
      props: jsonData
    }
}
