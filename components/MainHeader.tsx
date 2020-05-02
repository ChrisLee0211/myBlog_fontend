import React,{useRef} from 'react';

export interface ComponentProps {

}

const MainHeader: React.FC<ComponentProps> = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={headerRef} className="header-wrapper">
            <div className="header-menu">
                <section className="header-menu-logo">logo</section>
                <section className="header-menu-btn">三</section>
                <ul className="header-menu-content">
                    <li className="header-menu-content-item">首页</li>
                    <li className="header-menu-content-item">分类</li>
                    <li className="header-menu-content-item">项目</li>
                    <li className="header-menu-content-item">关于我</li>
                </ul>
            </div>
        </div>
    )
}

export default MainHeader