import React from 'react';
import Layout from "../../components/Layout";
import "./index.scss";
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
                <section className="about-title">关于我</section>
                <section className="about-introduction">
                    <p>Hi，我叫李铭辉，家在广东东莞，于2017年毕业，目前是一名爱料理、爱健身的前端工程师，常用网名是<b>Chrislee</b>（缩写Clee），欢迎大家来到我的个人博客。</p>
                    <br/>
                    <p>我目前就职于广东荣文科技集团有限公司广州开发部，主要业务集中在物联网设备数据可视化方向，职位是软件开发部的前端负责人，日常主要和小组的其他小伙伴通力配合完成公司主要业务平台——<b>智慧城市平台</b>的前端建设。</p>
                    <br/>
                    <p>我个人本身并不是计算机专业出身，当初投身于前端完全是兴趣所致。从大学自学入门到毕业后工作这几年，靠着积累一步步完善缺失的知识体系，当中走过的弯路，踩过的坑，都会尽可能地用博客记录下来，希望能帮助其他正在走这条路的小伙伴。</p>
                    <br/>
                    <p>另外，对于前端领域的问题，非常欢迎大家找我一起探讨，毕竟有难题就证明自身有上升空间嘛，这是我的邮箱：<b><a href="1018596741@qq.com">1018596741@qq.com</a></b> or <b><a href="lee13650098286@gamil.com">lee13650098286@gamil.com</a></b> </p>
                    <br/>
                    下面是我个人常用的博客地址和git仓库，还有个人简历，欢迎查阅～
                </section>
                <section className="about-link">
                    <a href="https://blog.csdn.net/weixin_42833042">CSDN博客</a>
                    <a href="https://github.com/ChrisLee0211">Github</a>
                    <a href="">个人简历(里面提供下载)</a>
                </section>
            </div>
        </Layout>
    )
}

export default FComponent