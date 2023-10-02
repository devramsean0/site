import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md";
import markdownToHtml from "@/lib/mdtohtml";
import { Container } from "theme-ui";

export default function TrafficLightProjectPost(props: {post: any}) {
    const post = props.post
    return (
        <>
            <Navbar />
            <center>
                <h2>{post.title}</h2>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </center>
        </>
    )
}
export async function getStaticProps(params: any) {
    const md = new MDhandler(`_projects/traffic-light-project/webdiary`)
    const post = md.getPostBySlug(params.params.slug, [
      'title',
      'slug',
      'content',
    ])
    const content = await markdownToHtml(post.content || '')
    
    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    }
  }
  export async function getStaticPaths() {
    const md = new MDhandler(`_projects/traffic-light-project/webdiary`)
    const posts = md.getAllPosts(['slug'])
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
  }