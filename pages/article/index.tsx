import React, { useEffect } from 'react';
import Router from "next/router";
import Layout from '../../components/Layout';

export interface ComponentProps {

}

const Article: React.FC<ComponentProps> = (props: ComponentProps) => {
    console.log(props)
    useEffect(() => {
        if(Router.pathname === "/article") {
            Router.push("/blog")
          }
    }, [])
    return (
        <Layout>
            <div className="main-wrapper">
                <div className="main-body">
                   
                </div>
            </div>
        </Layout>
    )
}

export default Article