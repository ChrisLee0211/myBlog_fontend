import React, { useEffect,useState, useRef  } from 'react';
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
    const [srollTopVisible,setScrollTopVisible] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        console.log(wrapperRef.current)
        function watchScroll(e:any){
            const scrollTop = e.target.scrollingElement.scrollTop;
            if(scrollTop > 10){
                setScrollTopVisible(true)
            }else{
                setScrollTopVisible(false)
            }
        }
        document.addEventListener("scroll",watchScroll);
        // return document.removeEventListener("scroll", watchScroll)
    },[])
    return (
        <Layout>
            <div className="main-wrapper" ref={wrapperRef}>
                <div className="main-body">
                    <section className="article-header">
                        <div className="article-header-title">{article.title}</div>
                        <div className="article-header-baseInfo">
                            <span className="article-header-baseInfo-author">作者：{article.author}</span>
                            <span className="article-header-baseInfo-date">创建时间：{parseTime(article.created_at)}</span>
                        </div>
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-nav" style={{padding:"200px 0px"}}>
                        {/* 导航栏 */}xxxxxx
                    </section>
                    <section className="article-body">
                        <ReactMarkdown 
                            source={article.content} 
                            renderers={{code:CodeBlock}}
                            escapeHtml={false}/>
                    </section>
                    <div 
                        className={srollTopVisible?"article-scrollTop scrollTop-active":"article-scrollTop"}>
                        <img src="../../static/scrollTop.png" alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ArticleContent