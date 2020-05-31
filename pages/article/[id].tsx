import React from 'react';
import ReactMarkdown from 'react-markdown'
import {GetStaticProps,GetStaticPaths} from 'next';
import Layout from '../../components/Layout';
import CodeBlock from '../../components/CodeBlock';
import { parseTime } from '../../utils';
import {articleData} from "../../utils/sample-data";
import "./index.scss";
export interface Article{
    id:number;
    title:string;
    created_at: number;
    author: string;
    quote:string[]|null;
    content: string;
}

export const getStaticProps: GetStaticProps = async () => {
    return {props:{article:articleData}}
}

export const getStaticPaths: GetStaticPaths = async () => {
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths:["/article/12"],fallback: false }
  }

export interface ComponentProps {
    article:Article
}

const ArticleContent: React.FC<ComponentProps> = (props: ComponentProps) => {
    const { article }= props;
    return (
        <Layout>
            <div className="main-wrapper">
                <div className="main-body">
                    <section className="article-header">
                        <div className="article-header-title">{article.title}</div>
                        <div className="article-header-baseInfo">
                            <span className="article-header-baseInfo-author">作者：{article.author}</span>
                            <span className="article-header-baseInfo-date">创建时间：{parseTime(article.created_at)}</span>
                        </div>
                    </section>
                    <section className="article-nav"></section>
                    <section className="article-body">
                        <ReactMarkdown 
                            source={article.content} 
                            renderers={{code:CodeBlock}}
                            escapeHtml={false}/>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default ArticleContent