import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export class MDhandler {
  private directory: string;
  constructor(directory: string) {
    this.directory = join(process.cwd(), directory);
  }
  // getPostsSlugs
  public getPostSlugs() {
    return fs.readdirSync(this.directory)
  }
  // getPostBySlug
  public getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(this.directory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
  
    type Items = {
      [key: string]: string
    }
  
    const items: Items = {}
  
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug
      }
      if (field === 'content') {
        items[field] = content
      }
  
      if (typeof data[field] !== 'undefined') {
        items[field] = data[field]
      }
    })
  
    return items
  }
  //
  public getAllPosts(fields: string[] = []) {
    const slugs = this.getPostSlugs()
    const posts = slugs
      .map((slug) => this.getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  }
}