import React from 'react';
// import {GetStaticProps} from 'next';
import Layout from '../../components/Layout'
export interface ComponentProps {

}

const FComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    console.log(props)
    return (
        <Layout>
                <div className="main-cover">
                    <img src="../../static/mountain.jpg" alt=""/>
                </div>
                <div className="main-body">
                    <div className="category-content">
                        <section className="category-content-tags">
                            <span className="category-content-tags-title"><img src="../../static/tag.svg" alt=""/>标签</span>
                            <ul className="category-content-tags-list">
                                <li>react (12)</li>
                                <li>webpack (4)</li>
                                <li>vue (2)</li>
                                <li>Typescript (1)</li>
                                <li>koa (1)</li>
                                <li>redis (4)</li>
                            </ul>
                        </section>
                        <section className="category-content-list">列表</section>
                    </div>
                </div>
        </Layout>
    )
}

export default FComponent