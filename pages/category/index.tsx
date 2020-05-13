import React from 'react';
// import {GetStaticProps} from 'next';
import Layout from '../../components/Layout'
export interface ComponentProps {

}

const FComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    console.log(props)
    return (
        <Layout>
            <div className="main-wrapper">
                <div className="main-body">
                    <div className="category-content">
                        <section className="category-content-cover">
                            <img src="https://user-gold-cdn.xitu.io/2020/5/8/171f3c48e142a180?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""/>
                        </section>
                        <section className="category-content-tags">
                            <span className="category-content-tags-title"><img src="../../static/tag.svg" alt=""/>标签</span>
                            <ul className="category-content-tags-list">
                                <li>标签一</li>
                                <li>标签一</li>
                                <li>标签一</li>
                                <li>标签一</li>
                                <li>标签一</li>
                                <li>标签一</li>
                            </ul>
                        </section>
                        <section className="category-content-list">列表</section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FComponent