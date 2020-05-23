import React from 'react';
import Layout from "../../components/Layout";

export interface ComponentProps {

}

const FComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    console.log(props)
    return (
        <Layout>
            <div className="main-cover">
                <img src="../../static/aboutMe.jpg" alt="" />
            </div>
            <div className="main-body">
                
            </div>
        </Layout>
    )
}

export default FComponent