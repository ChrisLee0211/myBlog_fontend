import { User } from '../interfaces'
import {Article} from "../pages/article/[id]"
/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const articleData: Article = {
  id:1,
  title: "测试文章",
  created_at: 1588949928642,
  quote: ["wwww.baidu.com"],
  author: "clee",
  content: `
  <code class='language-js hljs javascript'> 
    const a= 1 
  <code>
  
  `,
}