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
