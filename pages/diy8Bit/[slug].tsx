import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md"
import markdownToHtml from "@/lib/mdtohtml"
import { Container, Divider, Grid } from "theme-ui";

export default function ProjectPost(props: {post: any}) {
  const publishedDate = props.post.publishedDate || '1970/01/01'
  const shownDate = props.post.lastEdited ? `Last Edited: ${props.post.lastEdited}` : `Published: ${publishedDate}`
  return (
    <>
      <Navbar />
      <center>
        <Grid columns={[1, null, 2]} gap={3}>
          <p>{shownDate}</p>
          <h3>{props.post.title}</h3>
        </Grid>
        <Divider />
        <Container>
          <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
        </Container>
        <Footer />
      </center>
    </>
  )
}
export async function getStaticProps(params: any) {
  const md = new MDhandler(`_projects/diy8Bit/posts`)
  const post = md.getPostBySlug(params.params.slug, [
    'title',
    'publishedDate',
    'slug',
    'content',
    'lastEdited'
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
  const md = new MDhandler(`_projects/diy8Bit/posts`)
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