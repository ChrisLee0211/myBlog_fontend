import React, { useEffect,useState, useRef, useCallback  } from 'react';
import ReactMarkdown from 'react-markdown'
import {GetStaticProps,GetStaticPaths} from 'next';
import Layout from '../../components/Layout';
import CodeBlock from '../../components/CodeBlock';
import { parseTime,debounce } from '../../utils';
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
    const [scrollTopClass, setScrollTopClass] = useState<string>("article-scrollTop")
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        
        const toggleScrollTop:Function = (scrollTop:number) => {
            if(scrollTop > 10){
                setScrollTopClass("article-scrollTop scrollTop-active")
            }else{
                setScrollTopClass("article-scrollTop scrollTop-hidden")
            }
        }
        const debounceFn = debounce(toggleScrollTop,100)
        function watchScroll(e:any){
            const scrollTop = e.target.scrollingElement.scrollTop;
            debounceFn(scrollTop)
        }
        document.addEventListener("scroll",watchScroll);
        return ()=>{
            document.removeEventListener("scroll", watchScroll)
        }
    },[]);

    const jumpToTop = useCallback(()=>{
        if(document.scrollingElement){
            document.scrollingElement.scrollTop = 0
        }
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
                        className={scrollTopClass}
                        onClick={()=>{jumpToTop()}}
                    >
                        <img src="../../static/scrollTop.png" alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ArticleContent