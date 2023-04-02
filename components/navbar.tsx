import Icon from "@hackclub/icons"
import Link from "next/link"
import { Grid, NavLink } from "theme-ui"

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
                <NavLink href="/"><h2>Sean Outram</h2></NavLink>
                <NavLink href="/#about"><h2>About</h2></NavLink>
                <NavLink href="/#experience"><h2>Experience</h2></NavLink>
                <NavLink href="/#portfolio"><h2>Portfolio</h2></NavLink>
                <NavLink href="/blog"><h2>Blog</h2></NavLink>
                <NavLink href="mailto:outramsean0@gmail.com"><h2><Icon glyph="email" size={64}/></h2></NavLink>
            </Grid>
        </>
    )
}