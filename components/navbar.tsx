import Icon from "@hackclub/icons"
import Link from "next/link"
import animations from "@/styles/animations.module.scss"

export function Navbar(props: {grid: any}) {
    return (
        <>
            <div className={props.grid.name}>
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
            </div>
        </>
    )
}