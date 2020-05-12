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
                        <section className="category-content-cover">封面</section>
                        <section className="category-content-tags">标签</section>
                        <section className="category-content-list">列表</section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FComponent