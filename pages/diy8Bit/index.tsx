import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md";
import { Container, Grid, Link } from "theme-ui";

export default function PrtjectHome(props: {posts: any}) {
    return (
        <>
            <Navbar />
            <center>
                <h1>Diy 6502 Based 8 Bit Computer</h1>
            </center>
            <Grid columns={[2, null, 2]} gap={2}>
                {/* Blog Articles */}
                <Container>
                    <h2>Blog Posts</h2>
                    <ul>
                        {props.posts.map((post: any) => (
                            <li key={post.slug}><Link href={post.slug}>{post.title}</Link></li>
                        ))}
                    </ul>
                </Container>
                <Container>
                    <h2>Live Stream</h2>
                    <p>Not online</p>
                </Container>
                <Container>
                    <h2>What the CPU is doing</h2>
                    <p>Not online</p>
                </Container>
                <Container>
                    <h2>Text to display</h2>
                    <p>Not online</p>
                </Container>
            </Grid>
        </>
    )
}
export const getStaticProps = async () => {
    const md = new MDhandler("_projects/diy8Bit/posts")
    const posts = md.getAllPosts([
        'title',
        'description',
        'isPublished',
        'publishedDate',
        'tags',
        'slug'
    ]);
    return {
        props: { posts },
    };
};
