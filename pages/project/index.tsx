import React from 'react';
import Layout from '../../components/Layout';
import {GetStaticProps} from 'next';
import "./index.scss";

interface Project {
    id:number;
    name: string;
    link: string;
    desc: string
}

export const getStaticProps: GetStaticProps = async () => {
    const projects: Project[] =[
        {
            id:1,
            name:"项目一",
            link:"www.hupu.com",
            desc: "简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述"
        },
        {
            id:2,
            name:"项目一",
            link:"www.hupu.com",
            desc: "简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述"
        },
        {
            id:3,
            name:"项目一",
            link:"www.hupu.com",
            desc: "简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述"
        },
    ]
    return {props:{projects}}
}

export interface ComponentProps {
    projects: Project[]
}

const Project: React.FC<ComponentProps> = (props: ComponentProps) => {
    const {projects} = props;
    return (
       <Layout>
           <div className="main-wrapper">
                <div className="main-body">
                    {projects[0].name}
                </div>
           </div>
       </Layout>
    )
}

export default Project
