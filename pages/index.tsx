import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Head from "next/head";
import { Container, Divider, Grid, Image, Link, NavLink, Paragraph } from "theme-ui";
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
    },
    {
      job: "Hack Club Bank OPS",
      description: "Helped process perks and answer support questions in the Slack channel",
      date: "27th Feb 2023 - ongoing",
    },
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
      <Navbar />
      <Container id="about">
        <center>
          <h2>Hi!</h2>
          <Image variant="me" src="/me.png"/>
          <br />
          <Paragraph>
            I'm 14 and a Student, Entrepeneur and Software Engineer,
            <br />
            Currently working with the amazing team over at <Link href="https://hackclub.com/bank">Hack Club Bank</Link>
          </Paragraph>
          I'm currently using these tools:
          <ul>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Theme-Ui</li>
            <li>Rust</li>
          </ul>
        </center>
      </Container>
      <Divider />
      <Container id="experience">
        <center>
          <h2>Experience</h2>
          <Grid columns={[2, null, 2]} gap={2}>
            {experience.map((exp) => (
              <Container key={exp.job} variant="borderedNotbackgroundCovered">
                <h3>{exp.job}</h3>
                <Paragraph>{exp.description}</Paragraph>
              </Container>
            ))}
          </Grid>
        </center>
      </Container>
      <Divider />
      <Container id="portfolio">
        <center>
          <h2>Portfolio</h2>
          <Grid columns={[2, null, 2]} gap={2}>
            {portfolioProjects.map((project) => (
              <Container key={project.name} variant="borderedNotbackgroundCovered">
                <h3>{project.name}</h3>
                <Paragraph>{project.description}</Paragraph>
                <NavLink href={project.url}>View!</NavLink>
              </Container>
            ))}
          </Grid>
        </center>
      </Container>
      <Divider />
      <Container id="projects">
        <center>
          <h2>Projects</h2>
          <Grid columns={[2, null, 2]} gap={2}>
            {projects.map((project) => (
              <Container key={project.name} variant="borderedNotbackgroundCovered">
                <h3>{project.name}</h3>
                <Paragraph>Year Completed: {project.yearCompleted}</Paragraph>
                <NavLink href={project.url}>View project page</NavLink>
              </Container>
            ))}
          </Grid>
        </center>
      </Container>
      <Footer />
    </>
  )
}