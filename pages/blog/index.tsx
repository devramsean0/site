import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md";
import { useRouter } from "next/router";
import { Container, Grid, Link, NavLink } from "theme-ui";

export default function BlogHome(props: {posts: any}) {
    const listOfTags = [
        "misc",
        "dcd",
        "tech",
        "diy8Bit",
        "my_past",
        "school"
    ]
    const router = useRouter();
    const tag = router.query.tag || null;
    var posts: any[] = props.posts;
    if (tag) {
        if (listOfTags.includes(tag as string)) {
            posts = props.posts.filter((post: any) => post.tags.includes(tag));
        } else {
            return (
                <h1>Invalid Tag!</h1>
            )
        }
    }
    var newPosts: any[] = [];
    posts.map((post: any) => {
        if (Boolean(post.isPublished) || process.env.NODE_ENV === "development") {
            newPosts.push(post);
        }
    })
    posts = newPosts;
    return  (
        <>
            <Navbar />
            {/* Tags */}
            <center>
                <h2>Tags</h2>
                <Grid columns={[1, null, listOfTags.length]} gap={2}>
                    {listOfTags.map((tag: string) => (
                        <NavLink href={`/blog?tag=${tag}`} key={tag}><h3>{tag}</h3></NavLink>
                    ))}
                </Grid>
            </center>
            {/* Posts */}
            <Grid columns={[2, null, 2]} gap={1}>
                {posts.map((post: any) => (
                    <Container key={post.slug} variant="borderedNotbackgroundCovered">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Container>
                ))}
            </Grid>
        </>
    )
}
export const getStaticProps = async () => {
    const md = new MDhandler("_posts")
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
