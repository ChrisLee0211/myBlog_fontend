import React from 'react';
import {GetStaticProps} from 'next';
import Layout from '../../components/Layout'
import { formatDate } from "../../utils/index"
export  interface BlogItem {
    id:number,
    image:string,
    created_at:number,
    update_at:number,
    title:string,
    tag:Array<string>,
    read:number,
    desc:string
}

export const getStaticProps:GetStaticProps = async () => {
    const items:BlogItem[] = [
        {
            id:1,
            image:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            created_at:1588949928642,
            update_at:1588949928642,
            title:'测试文章',
            tag:['webpack'],
            read:999,
            desc:'知道了两种加密方式的优缺点之后 我们的HTTPS就很厉害了 它采用两者混合的加密方式 不是说对称加密的密钥不安全吗 那我们换一种思路 我们在传递过程把我们的对称加密中的密钥用非对称加密的方式去传递就好了 哈哈 这句话有点绕 我们上图客户端生成会话秘钥就是我们对称加密生成的密钥它用公钥加密之后进行传递(这个时候被加密的不是数据  是这个会话秘钥 等于把钥匙加密了)  这里的公钥就是非对称加密中的公钥 他是由服务器传递过去的（对外公开）服务端用非对称加密的私钥去解密 拿到我们的会话秘钥客户端和服务端都能用同一个会话秘钥进行加解密了这里的公钥就是非对称加密中的公钥 他是由服务器传递过去的（对外公开）服务端用非对称加密的私钥去解密 拿到我们的会话秘钥客户端和服务端都能用同一个会话秘钥进行加解密了'
        },
        {
            id:2,
            image:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            created_at:1588949928642,
            update_at:1588949928642,
            title:'测试文章',
            tag:['webpack',"react"],
            read:999,
            desc:'知道了两种加密方式的优缺点之后 我们的HTTPS就很厉害了 它采用两者混合的加密方式 不是说对称加密的密钥不安全吗 那我们换一种思路 我们在传递过程把我们的对称加密中的密钥用非对称加密的方式去传递就好了 哈哈 这句话有点绕 我们上图'
        },
        {
            id:3,
            image:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            created_at:1588949928642,
            update_at:1588949928642,
            title:'测试文章',
            tag:["vue","babel"],
            read:999,
            desc:'知道了两种加密方式的优缺点之后 我们的HTTPS就很厉害了 它采用两者混合的加密方式 不是说对称加密的密钥不安全吗 那我们换一种思路 我们在传递过程把我们的对称加密中的密钥用非对称加密的方式去传递就好了 哈哈 这句话有点绕 我们上图'
        },
        {
            id:4,
            image:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            created_at:1588949928642,
            update_at:1588949928642,
            title:'测试文章',
            tag:["redux","vuex","concent"],
            read:999,
            desc:'知道了两种加密方式的优缺点之后 我们的HTTPS就很厉害了 它采用两者混合的加密方式 不是说对称加密的密钥不安全吗 那我们换一种思路 我们在传递过程把我们的对称加密中的密钥用非对称加密的方式去传递就好了 哈哈 这句话有点绕 我们上图'
        },
        {
            id:5,
            image:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            created_at:1588949928642,
            update_at:1588949928642,
            title:'测试文章',
            tag:["mobx"],
            read:999,
            desc:'知道了两种加密方式的优缺点之后 我们的HTTPS就很厉害了 它采用两者混合的加密方式 不是说对称加密的密钥不安全吗 那我们换一种思路 我们在传递过程把我们的对称加密中的密钥用非对称加密的方式去传递就好了 哈哈 这句话有点绕 我们上图'
        },

    ];

    return {props:{items}}
}

export interface ComponentProps {
    items:Array<BlogItem>
}

const Blog: React.FC<ComponentProps> = (props: ComponentProps) => {
    const {items} = props
    return (
        <Layout>
        <div className="main-wrapper">
            <div className="main-body">
                {
                    items.map(record => {
                        return (
                            <div className="blog-content" key={record.id}>
                                <section className="blog-content-title">{record.title}</section>
                                <section className="blog-content-date">
                                    创建日期： {formatDate(record.created_at)}
                                    {record.tag.map((tag,index) => {
                                        return (
                                            <span key={index} className="blog-content-tag"><img src="../../static/tag.svg" alt=""/><a>{tag}</a></span>
                                        )
                                    })}
                                </section>
                                <section className="blog-content-desc">
                                    <div className="blog-content-desc-img">
                                        <img src={record.image} alt=""/>
                                    </div>
                                    <div className="blog-content-desc-text"><span>{record.desc}</span></div>
                                </section>
                                <section className="blog-content-comment">
                                    <span className="read">阅读({record.read})</span>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </Layout>
    )
}

export default Blog