import Icon from "@hackclub/icons"
import Link from "next/link"
import { Grid, Heading, NavLink } from "theme-ui"

export function Navbar() {
    return (
        <>
{/*         <div className={props.grid.name}>
                <Link className={animations.textFadeIn} href="/">Sean Outram</Link>
            </div>
            <div className={props.grid.navBtn1}>
                <center>
                <Link className={animations.textSlideIn} href="/#about">About</Link>
                </center>
            </div>
            <div className={props.grid.navBtn2}>
                <center>
                <Link className={animations.textSlideIn} href="/blog">Blog</Link>
                </center>
            </div>
            <div className={props.grid.navBtn3}>
                <center>
                <Link className={animations.textSlideIn} href="/#portfolio">Portfolio</Link>
                </center>
            </div>
            <div className={props.grid.navBtn4}>
                <center>
                <Link className={animations.textSlideIn} href="/#experience">Experience</Link>
                </center>
            </div>
            <div className={`${props.grid.navBtn6} ${animations.textSlideIn}`}>
                <center>
                <a href="mailto:outramsean0@gmail.com"><Icon glyph="email"size={55}/></a>
                <a href="https://github.com/devramsean0"><Icon glyph="github"size={55}/></a>
                </center>
            </div> */}
            <Grid variant="nav" gap={1} columns={[2, null, 6]}>
                <NavLink href="/"><Heading variant="headingWithWhiteHighlight">Sean Outram</Heading></NavLink>
                <NavLink href="/#about"><Heading variant="headingWithWhiteHighlight">About</Heading></NavLink>
                <NavLink href="/#experience"><Heading variant="headingWithWhiteHighlight">Experience</Heading></NavLink>
                <NavLink href="/#portfolio"><Heading variant="headingWithWhiteHighlight">Portfolio</Heading></NavLink>
                <NavLink href="/blog"><Heading variant="headingWithWhiteHighlight">Blog</Heading></NavLink>
                <NavLink href="mailto:outramsean0@gmail.com"><Heading variant="headingWithWhiteHighlight"><Icon glyph="email" size={64}/></Heading></NavLink>
            </Grid>
        </>
    )
}