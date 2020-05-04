import React, { useRef, useState, useCallback } from 'react';
import Link from "next/link";
export interface ComponentProps {

}

const MainHeader: React.FC<ComponentProps> = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [btnClass, setBtnClass] = useState<string>('header-menu-btn');
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuBottom, setMenuBottom] = useState<string>('32vh');
    const clickBtn = useCallback(() => {
        setMenuVisible(!menuVisible);
        if (menuVisible === true) {
            setBtnClass('header-menu-btn-active');
            setMenuBottom('-20vh');
        } else {
            setBtnClass('header-menu-btn');
            setMenuBottom('32vh')
        }
    }, [menuVisible])
    return (
        <div ref={headerRef} className="header-wrapper">
            <div className="header-menu">
                <section className="header-menu-logo">CLee's Blog</section>
                <section className={btnClass}>
                    <img onTouchEnd={clickBtn} src={"../static/menu.svg"} alt="" />
                </section>
                <ul className="header-menu-content" >
                    <li className="header-menu-content-item">
                        <Link href={"/blog"} as={`/blog`}>首页</Link>
                    </li>
                    <li className="header-menu-content-item">分类</li>
                    <li className="header-menu-content-item">项目</li>
                    <li className="header-menu-content-item">关于我</li>
                </ul>
            </div>
            <ul className="header-menu-flexContent" style={{ bottom: menuBottom }}>
                <li className="header-menu-flexContent-item">首页</li>
                <li className="header-menu-flexContent-item">分类</li>
                <li className="header-menu-flexContent-item">项目</li>
                <li className="header-menu-flexContent-item">关于我</li>
            </ul>
        </div>
    )
}

export default MainHeader