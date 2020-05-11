import React from 'react';
// import {GetStaticProps} from 'next';
import Layout from '../../components/Layout'
export interface ComponentProps {

}

const FComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    console.log(props)
    return (
        <Layout>
            <div className="category-wrapper">
                分类页:1
            </div>
        </Layout>
    )
}

export default FComponent