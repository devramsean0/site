import Head from "next/head";
import grid from "@/styles/homeGrid.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import animations from "@/styles/animations.module.scss";

export default function Home() {
  const projects = [
    {
      name: "6502 8Bit Computer",
      url: "/diy8Bit",
      yearCompleted: "2023"
    }
  ]
  const experience = [
    {
      job: "HWW reviewer",
      description: "Reviewed PRs for Hackclub's Hardware Winter Wonderland event",
      date: "17th Jan 2023 - 24th Feb 2023",
      image: "https://assets.hackclub.com/icon-rounded.svg",
    },
    {
      job: "Hack Club Bank OPS",
      description: "Helped process perks and answer support questions in the Slack channel",
      date: "27th Feb 2023 - ongoing",
      image: "https://assets.hackclub.com/hack-club-bank-light.svg"
    }
  ]
  const portfolioProjects = [
    {
      name: "IkeaStock",
      url: "https://github.com/Ikeastock",
      description: "A website that allows you to check the stock of a project in your local Ikea store",
    }
  ]
  return (
    <>
      <Head>
        <title>Sean Outram</title>
      </Head>
      <div className={grid.parent}>
        <Navbar grid={grid}/>
      </div>
      <div className={grid.about} id="about">
        <center>
            <Image src="/me.png" alt="Me" width={400} height={500}/>
            <h2>Hi, 👋</h2>
            <p>
                I'm 14 and a Student, Entrepeneur and Software Engineer,
                <br />
                however I'm taking more of a dive into the world of Electrical Engineering at the moment and have been participating in Hackclub's winter wonderland
            </p>
        </center>
      </div>
      <div className={grid.portfolio} id="portfolio">
        <center>
          <h2>Portfolio</h2>
          {portfolioProjects.map((project) => (
            <>
              <div className={`roundedBox ${animations.textSlideIn}`} key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Link href={project.url} style={{color: "#fff"}}>View Here</Link>
              </div>
              <br />
            </>
          ))}
        </center>
      </div>
      <div className={grid.experience} id="experience">
        <center>
          <h2>Experience</h2>
          {experience.map((job) => (
            <>
              <div className={`roundedBox ${animations.textSlideIn}`} key={job.job}>
                <Image src={job.image} width={100} height={100} alt="Job Image" />
                <h3>{job.job}</h3>
                <p>{job.description}</p>
                <p>{job.date}</p>
              </div>
              <br />
            </>
          ))}
        </center>
      </div>
      <div className={grid.projects} id="projects">
        <center>
          <h2>Projects</h2>
          {projects.map((project) => (
            <>
              <div className={`roundedBox ${animations.textSlideIn}`} key={project.name}>
                <h3>{project.name}</h3>
                <p>Year Completed: {project.yearCompleted}</p>
                <Link href={project.url} style={{color: "#fff"}}>View my progress here.</Link>
              </div>
              <br />
            </>
          ))}
        </center>
      </div>
      <div className={grid.footer}>
        <Footer />
      </div>
    </>
  )
}