import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar"
import { getPostBySlug, getAllPosts } from "@/lib/md"
import markdownToHtml from "@/lib/mdtohtml"
import grid from "@/styles/blogPostGrid.module.scss";

export default function BlogPost(props: {post: any}) {
    const publishedDate = props.post.publishedDate || '1970/01/01'
    console.log(props.post)
    return (
      <div className={grid.parent}>
        <Navbar grid={grid} />
        <div className={grid.headerImage}></div>
        <div className={grid.title}>
          <h2>{props.post.title}</h2>
        </div>
        <div className={grid.publishedDate}>
          <h3>{String(publishedDate)}</h3>
        </div>
        <div className={grid.tags}>
          <ul>
          {props.post.tags.map((tag: string) => (
            <li key={tag}>{tag}</li>
          ))}
          </ul>
        </div>
        <div className={grid.content} dangerouslySetInnerHTML={{ __html: props.post.content }} />
        <div className={grid.footer}>
          <Footer />
        </div>
      </div>
    )
}
export async function getStaticProps(params: any) {
    const post = getPostBySlug(params.params.slug, [
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
    const posts = getAllPosts(['slug'])
  
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