import React, { useMemo, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout'
import { formatDate, debounce } from '../../utils';
import { useSlider } from "../../utils/hook/useSlider"
import "./index.scss";

interface Tags {
    label: string;
    value: string | number;
    quantity: number
}

interface CategoryItem {
    year: number;
    blogs: Array<{ id: number, title: string, created_at: number }>
}

export interface ComponentProps {
    tags: Tags[];
    category: CategoryItem[];
}

export const getStaticProps: GetStaticProps = async () => {
    const tagsArr = ["webpack", "nuxt", "vue", "typescript", "node", "koa", "mongo", "mobx", "redux", "husky", "eslint"]
    const tags: Tags[] = tagsArr.map((record, index) => {
        return {
            label: record,
            value: record,
            quantity: index
        }
    });

    const category: CategoryItem[] = [
        {
            year: 2020,
            blogs: [
                { id: 1, title: "土豆悖论", created_at: 1588922228642, },
                { id: 2, title: "猴子算法有什么好学的？", created_at: 1588912228642, }
            ]
        },
        {
            year: 2019,
            blogs: [
                { id: 3, title: "土豆悖论", created_at: 1588932228642, },
                { id: 4, title: "猴子算法有什么好学的？", created_at: 1588955528642, },
                { id: 5, title: "猴子算法有什么好学的？", created_at: 1588949928642, }
            ]
        },
        {
            year: 2018,
            blogs: [
                { id: 6, title: "土豆悖论", created_at: 1588948528642, },
                { id: 7, title: "跳槽怎么就一定会成功啊？", created_at: 1588949928642, }
            ]
        },
    ]
    return { props: { tags, category } }
}


const FComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    const { tags, category } = props;
    const [firstRender,setFirstRender] = useState<boolean>(true)
    const [track, thumb, clickTrack, clickThumb, ratio] = useSlider({ horizon: false, initState: 0 });
    const articleNum = useMemo(() => {
        if (category.length < 1) return 0;
        let total = category.reduce((last, cur) => {
            return last + cur.blogs.length;
        }, category[0].blogs.length);
        return total
    }, [category]);
    useEffect(()=>{
        if(firstRender) {
            setFirstRender(false);
            return
        }else{
            const scrollToYear:(percent:number)=>void = (percent) => {
                const doc = document.body;
                console.log("document.body;",document.body)
                const pageHeight = doc.scrollTop;
                doc.scrollTop = pageHeight*(percent/100)
            }
            const debounceFn = debounce(scrollToYear,100);
            debounceFn(ratio)
        }
    },[ratio])
    return (
        <Layout>
            <div className="main-cover">
                <img src="../../static/mountain.jpg" alt="" />
            </div>
            <div className="main-body">
                <div className="category-content">
                    <section className="category-content-tags">
                        <span className="category-content-tags-title"><img src="../../static/tag.svg" alt="" />标签</span>
                        <ul className="category-content-tags-list">
                            {tags.map((v, i) => {
                                return (
                                    <li key={i}>{`${v.label}  (${v.quantity})`}</li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className="category-content-list">
                        {category.map(item => {
                            return (
                                <div key={JSON.stringify(item)} className="category-content-list-item">
                                    <div className="category-content-list-item-year">{item.year}</div>
                                    <div className="category-content-list-item-blogs">
                                        {item.blogs.map(blog => {
                                            return (
                                                <div key={blog.id} className="category-content-list-item-blogs-item">
                                                    <div className="category-content-list-item-blogs-item-date">
                                                        {formatDate(blog.created_at)}
                                                    </div>
                                                    <div className="category-content-list-item-blogs-item-title">
                                                        {blog.title}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            )
                        })}
                    </section>
                    <section className="category-content-slider">
                        <div className="category-content-slider-track" ref={track} onMouseDown={clickTrack}></div>
                        <div className="category-content-slider-slideBar" style={{ height: `${(ratio as number) * 100}%` }}>
                            <div className="category-content-slider-slideBar-thumb" ref={thumb} onMouseDown={clickThumb}></div>
                        </div>
                        <div className="category-content-slider-dateBar">
                            {category.map((item) => {
                                return (
                                    <div key={item.year} className="dateBlock"
                                        style={{ height: `${(item.blogs.length / articleNum) * 100}%` }}
                                    >
                                        {`${item.year}  -`}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default FComponent