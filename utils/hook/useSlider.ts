import {useRef, useEffect, useCallback, useState} from "react";

const fitRatio = (ratio:number) => Math.max(0,Math.min(1,ratio));

interface UseSliderProps {
    horizon: boolean;
    initState: number
}

const useSlider = (props:UseSliderProps):[React.RefObject<HTMLDivElement>,React.RefObject<HTMLDivElement>,(e:any)=>void,(e:any)=>void,number] => {
    const {horizon, initState=0} = props;
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const [ratio,setRatio] = useState<number>(initState);
    const [lastPostion,setLastPosition] = useState<number>(0);
    const [range,setRange] = useState<number>(0);
    // const [isDrag, setIsDrag] = useState<boolean>(false);
    const DragState = useRef(false);
    const isDrag = DragState.current;

    const clickTrack = useCallback((e:any)=>{
        e.persist()
        let val:number;
        if(horizon) {
            val = e.nativeEvent.offsetX/(trackRef.current as HTMLDivElement).clientWidth;
        }else{
            val= e.nativeEvent.offsetY/(trackRef.current as HTMLDivElement).clientHeight;
        }
        setRatio(fitRatio(val))
    },[horizon]);

    const clickThumb = useCallback((e:any)=>{
        e.persist()
        DragState.current = true;
        if(horizon) {
            setRange((trackRef.current as HTMLDivElement).clientWidth)
            setLastPosition(e.pageX);
        }else {
            setRange((trackRef.current as HTMLDivElement).clientHeight)
            setLastPosition(e.pageY)
        }
    },[horizon,DragState]);

    const handleMove = useCallback((e:any) => {
        
        if(DragState.current===false) return
        let pos:number;
        if(horizon){
            pos = e.pageX;
        }else {
            pos= e.pageY;
        }

        const hadMove:number = pos - lastPostion;
            const newRatio = ratio + (hadMove/range);
            console.log(newRatio)
            setLastPosition(pos);
            setRatio(fitRatio(newRatio));
    },[range,ratio,horizon,DragState]);

    const handleUp = useCallback((e:any)=>{
        if(DragState.current){
            DragState.current = false
            let pos:number;
            if(horizon){
                pos = e.pageX;
            }else {
                pos= e.pageY;
            }
            const hadMove:number = pos - lastPostion;
                const newRatio = ratio + (hadMove/range);
                setLastPosition(pos);
                setRatio(fitRatio(newRatio));
        }
    },[lastPostion,isDrag,range,ratio,horizon])
    useEffect(() => {
        document.addEventListener("mousemove",handleMove);
        document.addEventListener("mouseup",handleUp);
        return ()=>{
            document.removeEventListener("mousemove",handleMove);
            document.removeEventListener("mouseup",handleUp);
        }
    },[handleMove,handleUp]);
    return [trackRef,thumbRef,clickTrack,clickThumb,ratio]
};

export {useSlider}