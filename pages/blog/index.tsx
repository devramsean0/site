import { Navbar } from "@/components/navbar";
import { getAllPosts } from "@/lib/md";
import grid from "@/styles/blogHomeGrid.module.scss";

export default function BlogHome(props: {posts: any}) {
    return  (
        <>
            <div className={grid.parent}>
                <Navbar grid={grid}/>
                <div className={grid.headerImage}></div>
                <div className={grid.posts}>
                    <center>
                        {props.posts.map((post: any) => (
                            <>
                                <div key={post.title} className="roundedBox">
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                    <a href={`/blog/${post.slug}`} style={{color: "#fff"}}>Read More</a>
                                </div>
                                <br />
                            </>
                        ))}
                    </center>
                </div>
            </div>
        </>
    )
}
export const getStaticProps = async () => {
    const posts = getAllPosts([
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