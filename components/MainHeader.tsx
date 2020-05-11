import React, { useState, useCallback, useMemo, memo } from 'react';
import Router from 'next/router'
export interface ComponentProps {

}

const MainHeader: React.FC<ComponentProps> = () => {
    const [btnClass, setBtnClass] = useState<string>('header-menu-btn');
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuBottom, setMenuBottom] = useState<string>('32vh');
    const [current,setCurrent] = useState<string>("blog")
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
        setCurrent(val)
        Router.push({
            pathname:path
        },path);
    },[current])
    const menuList = useMemo(()=>{
        const menuArr = [
            {path:"/blog",value:"blog",label:"首页"},
            {path:"/category",value:"category",label:"分类"},
            {path:"/project",value:"project",label:"项目"},
            {path:"/about",value:"about",label:"关于我"},
        ]
        console.log("current",current)
        return menuArr.map(v => {
            return {
                path: v.path,
                value: v.value,
                label: v.label,
                active: v.value === current? true:false
            }
        })
    },[current]);
    return (
        <div className="header-wrapper">
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

export default memo(MainHeader)