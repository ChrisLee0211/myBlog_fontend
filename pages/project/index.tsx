import React, { useMemo } from 'react';
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
            desc: "简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述简单的项目描述"
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

interface ActiveItem extends Project {
    active: boolean;
}

const Project: React.FC<ComponentProps> = (props: ComponentProps) => {
    const {projects} = props;
    const projectList:ActiveItem[] = useMemo(() => {
        return projects.map(v => {
            let data: ActiveItem = {...v} as ActiveItem;
            data["active"] = false;
            return data
        })
    },[projects]);
    const activeClass:string = "project-active ";
    return (
       <Layout>
           <div className="main-wrapper">
                <div className="main-body">
                    <section className="project-list">
                        {
                            projectList.map(project => {
                                return (
                                    <div 
                                        key={project.id} 
                                        className={project.active?`${activeClass} project-list-item`:`project-list-item`}
                                        >
                                            <header>
                                                <h3 className="project-list-item-title">{project.name}</h3>
                                                <span className="project-list-item-link">点击进入</span>
                                            </header>
                                            <div className="project-list-item-content" dangerouslySetInnerHTML={{__html:project.desc}}>
                                            </div>
                                            {
                                                !project.active && <div className="loadmore">加载更多...</div>
                                            }
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
           </div>
       </Layout>
    )
}

export default Project
