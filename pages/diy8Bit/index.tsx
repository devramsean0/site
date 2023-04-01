import { MDhandler } from "@/lib/md";
import Link from "next/link";

export default function PrtjectHome(props: {posts: any}) {
    return (
        <>
            <h1>Diy 8Bit Computer</h1>
            <ul>
                {props.posts.map((post: any) => (
                    <li key={post.slug}>
                        <a href={`/diy8Bit/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
            <Link href="/">[Return Home]</Link>
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
