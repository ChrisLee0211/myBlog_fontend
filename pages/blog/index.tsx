import React from 'react';
import {GetStaticProps} from 'next';
import Layout from '../../components/Layout'

interface BlogItem {
    id:number,
    image:string,
    created_at:number,
    update_at:number,
    title:string,
    tag:string,
    read:number,
    desc:string
}

export const getStaticProps:GetStaticProps = async () => {
    const items:BlogItem[] = [
        {
            id:1,
            image:'',
            created_at:1892038421,
            update_at:12937384463,
            title:'测试文章',
            tag:'webpack',
            read:999,
            desc:'测试描述'
        },
        {
            id:1,
            image:'',
            created_at:1892038421,
            update_at:12937384463,
            title:'测试文章',
            tag:'webpack',
            read:999,
            desc:'测试描述'
        },
        {
            id:1,
            image:'',
            created_at:1892038421,
            update_at:12937384463,
            title:'测试文章',
            tag:'webpack',
            read:999,
            desc:'测试描述'
        },

    ];

    return {props:{items}}
}

export interface ComponentProps {
    items:Array<BlogItem>
}

const Blog: React.FC<ComponentProps> = (props: ComponentProps) => {
    const {items} = props
    return (
        <Layout>
        <div className="blog-wrapper">
           {
               items.map(record => {
                   return (
                       <div className="blog-content">
                           <section className="blog-content-date">{record.created_at}</section>
                           <section className="blog-content-desc">
                               <div className="blog-content-desc-img"></div>
                               <div className="blog-content-desc-text"></div>
                           </section>
                           <section className="blog-content-desc-comment">
                               <span className="read">{record.read}</span>
                           </section>
                       </div>
                   )
               })
           }
        </div>
        </Layout>
    )
}

export default Blog