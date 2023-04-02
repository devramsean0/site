// TODO: Switch this page over
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar"
import { MDhandler } from "@/lib/md"
import markdownToHtml from "@/lib/mdtohtml"
import grid from "@/styles/blogPostGrid.module.scss";
import { Grid } from "theme-ui";

export default function BlogPost(props: {post: any}) {
    const publishedDate = props.post.publishedDate || '1970/01/01'
    return (
      <>
        <Navbar />
        <Grid columns={[1, null, 3]} gap={1}>
          <h3>{props.post.title}</h3>
          <h3>{String(publishedDate)}</h3>
          <Grid columns={[1, null, props.post.tags.length]} gap={1}>
            {props.post.tags.map((tag: string) => (
              <h3 key={tag}>{tag},</h3>
            ))}
          </Grid>
        </Grid>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
      </>
    )
}
export async function getStaticProps(params: any) {
  const md = new MDhandler("_posts")
  const post = md.getPostBySlug(params.params.slug, [
    'title',
    'publishedDate',
    'tags',
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
  const md = new MDhandler("_posts")
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