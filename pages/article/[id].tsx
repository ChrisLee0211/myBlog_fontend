import React from 'react';
import Layout from '../../components/Layout';

export interface ComponentProps {

}

const ArticleContent: React.FC<ComponentProps> = (props: ComponentProps) => {
    console.log(props)
    return (
        <Layout>
            <div className="main-wrapper">
                <div className="main-body">
                    sssss
                </div>
            </div>
        </Layout>
    )
}

export default ArticleContent