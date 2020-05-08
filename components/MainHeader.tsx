import React, { useRef, useState, useCallback, useMemo } from 'react';
import Router from 'next/router'
export interface ComponentProps {

}

const MainHeader: React.FC<ComponentProps> = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [btnClass, setBtnClass] = useState<string>('header-menu-btn');
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuBottom, setMenuBottom] = useState<string>('32vh');
    const [current,setCurrent] = useState<string>("/blgo")
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
    const goToPath = useCallback((path,val)=>{
        Router.push({
            pathname:path
        },path);
        setCurrent(val)
    },[])
    const menuList = useMemo(()=>{
        return [
            {path:"/blog",value:"blog",label:"首页",active:true},
            {path:"/category",value:"category",label:"分类",active:false},
            {path:"/project",value:"project",label:"项目",active:false},
            {path:"/about",value:"about",label:"关于我",active:false},
        ]
    },[current]);
    return (
        <div ref={headerRef} className="header-wrapper">
            <div className="header-menu">
                <section className="header-menu-logo">CLee's Blog</section>
                <section className={btnClass}>
                    <img onTouchEnd={clickBtn} src={"../static/menu.svg"} alt="" />
                </section>
                <ul className="header-menu-content" >
                    {
                        menuList.map((record) => {
                            return (
                                <li 
                                    className="header-menu-content-item"
                                    style={{background:record.active?"lightblue":"none"}}
                                    onClick={()=>{goToPath(record.path,record.value)}}
                                    key={record.value}
                                    >
                                    {record.label}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <ul className="header-menu-flexContent" style={{ bottom: menuBottom }}>
            {
                        menuList.map((record) => {
                            return (
                                <li 
                                    className="header-menu-flexContent-item"
                                    style={{background:record.active?"lightblue":"none"}}
                                    onClick={()=>{goToPath(record.path,record.value)}}
                                    key={record.value}
                                    >
                                    {record.label}
                                </li>
                            )
                        })
            }
            </ul>
        </div>
    )
}

export default MainHeader