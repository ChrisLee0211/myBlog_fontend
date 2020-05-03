import React,{useRef, useState, useCallback} from 'react';

export interface ComponentProps {

}

const MainHeader: React.FC<ComponentProps> = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [btnClass, setBtnClass] = useState<string>('');
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const clickBtn = useCallback(()=>{
        setMenuVisible(!menuVisible);
        console.log(menuVisible)
        if(menuVisible === true){
            setBtnClass('menu-btn-active')
        }else{
            setBtnClass('')
        }
    },[menuVisible])
    return (
        <div ref={headerRef} className="header-wrapper">
            <div className="header-menu">
                <section className="header-menu-logo">CLee's Blog</section>
                <section className="header-menu-btn">
                    <img onTouchEnd={clickBtn} className={btnClass} src={"../static/menu.svg"}alt=""/>
                </section>
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