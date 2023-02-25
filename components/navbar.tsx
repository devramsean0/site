import Icon from "@hackclub/icons"
import Link from "next/link"
export function Navbar(props: {grid: any}) {
    return (
        <>
            <div className={props.grid.name}>
                <Link href="/">Sean Outram</Link>
            </div>
            <div className={props.grid.navBtn1}>
                <center>
                <Link href="/#about">About</Link>
                </center>
            </div>
            <div className={props.grid.navBtn2}>
                <center>
                <Link href="/blog">Blog</Link>
                </center>
            </div>
            <div className={props.grid.navBtn3}>
                <center>
                <Link href="/#portfolio">Portfolio</Link>
                </center>
            </div>
            <div className={props.grid.navBtn4}>
                <center>
                <Link href="/#experience">Experience</Link>
                </center>
            </div>
            <div className={props.grid.navBtn6}>
                <center>
                <a href="mailto:outramsean0@gmail.com"><Icon glyph="email"size={55}/></a>
                <a href="https://github.com/devramsean0"><Icon glyph="github"size={55}/></a>
                </center>
            </div>
        </>
    )
}