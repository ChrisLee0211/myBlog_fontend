import React,{useRef, useEffect} from 'react';

export interface ComponentProps {

}

const MainHeader: React.FC<ComponentProps> = () => {
    // const [headerWidth, setHeaderWidth] = useState<number>(0)
    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const header = headerRef.current as HTMLDivElement;
        const autoGetHeaderWidth = (e:any) => {
            console.log(e)
        }
        header.addEventListener("resize",autoGetHeaderWidth);
        return ()=>header.removeEventListener("resize",autoGetHeaderWidth)
    },[])
    return (
        <div ref={headerRef} className="header-wrapper">
            <section className="normal-menu">
                <div className="normal-menu-logo">logo</div>
                <div className="normal-menu-button"></div>
            </section>
            <section className="flex-menu"></section>
        </div>
    )
}

export default MainHeader