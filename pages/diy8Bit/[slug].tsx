import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md"
import markdownToHtml from "@/lib/mdtohtml"
import grid from "@/styles/projectPostGrid.module.scss";

export default function ProjectPost(props: {post: any}) {
  const publishedDate = props.post.publishedDate || '1970/01/01'
  return (
    <div className={grid.parent}>
      <Navbar grid={grid} />
      <div className={grid.postDate}>
        {publishedDate}
      </div>
      <div className={grid.postTitle}>
        {props.post.title}
      </div>
      <div className={grid.content} dangerouslySetInnerHTML={{ __html: props.post.content }} />
      <div className={grid.footer}>
        <Footer />
      </div>
    </div>
  )
}
export async function getStaticProps(params: any) {
  const md = new MDhandler(`_projects/diy8Bit/posts`)
  const post = md.getPostBySlug(params.params.slug, [
    'title',
    'publishedDate',
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