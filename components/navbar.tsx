import grid from "@/styles/grid.module.scss"
import Icon from "@hackclub/icons"
import Link from "next/link"
export function Navbar() {
    return (
        <>
            <div className={grid.name}>
                <h1>Sean Outram</h1>
            </div>
            <div className={grid.navBtn1}>
                <center>
                <Link href="/#about">About</Link>
                </center>
            </div>
            <div className={grid.navBtn2}>
                <center>
                <Link href="/blog">Blog</Link>
                </center>
            </div>
            <div className={grid.navBtn3}>
                <center>
                <Link href="/#portfolio">Portfolio</Link>
                </center>
            </div>
            <div className={grid.navBtn4}>
                <center>
                <Link href="/#experience">Experience</Link>
                </center>
            </div>
            <div className={grid.navBtn6}>
                <center>
                <a href="mailto:outramsean0@gmail.com"><Icon glyph="email"size={55}/></a>
                <a href="https://github.com/devramsean0"><Icon glyph="github"size={55}/></a>
                </center>
            </div>
        </>
    )
}