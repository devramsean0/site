import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md";
import grid from "@/styles/blogHomeGrid.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

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
            <div className={grid.parent}>
                <Navbar grid={grid}/>
                <div className={grid.tags}>
                    <center>
                        <h2>Tags:</h2>
                        {listOfTags.map((tag: string) => (
                            <div key={tag}>
                               <Link href={`/blog?tag=${tag}`}>{tag}</Link>
                           </div>
                        ))}
                    </center>
                </div>
                <br />
                <div className={grid.posts}>
                    <center>
                        {posts.map((post: any) => (
                            <div key={post.slug}>
                                <div className="roundedBox">
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                    <a href={`/blog/${post.slug}`} style={{color: "#fff"}}>Read More</a>
                                </div>
                                <br />
                            </div>
                        ))}
                    </center>
                </div>
            </div>
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
