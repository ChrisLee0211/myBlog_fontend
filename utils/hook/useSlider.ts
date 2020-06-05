import {useRef, useReducer, useEffect, useCallback, useState} from "react";

const fitRatio = (ratio:number) => Math.max(0,Math.min(ratio,1));

interface UseSliderProps {
    horizon: boolean;
    initState: number
}

const useSlider = (props:UseSliderProps) => {
    const {horizon, initState=0} = props;
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const [ratio,setRatio] = useState<number>(initState);
    const [lastPostion,setLastPosition] = useState<number>(0);
    const [range,setRange] = useState<number>(0);
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const handleClickTrack = useCallback((e:MouseEvent)=>{
        let val:number;
        if(horizon) {
            val = e.offsetX/(trackRef.current as HTMLDivElement).clientWidth;
        }else{
            val= e.offsetY/(trackRef.current as HTMLDivElement).clientHeight;
        }
        setRatio(fitRatio(val))
    },[horizon])
    const handleClickThumb = useCallback((e:MouseEvent)=>{
        setIsDrag(true);
        if(horizon) {
            setRange((trackRef.current as HTMLDivElement).clientHeight)
            setLastPosition(-e.pageY);
        }else {
            setRange((trackRef.current as HTMLDivElement).clientWidth)
            setLastPosition(e.pageX)
        }
    },[horizon]);

    const handleMove = useCallback((e:MouseEvent) => {
        if(isDrag){
            
        }
    },[lastPostion,isDrag,range]);

    const handleUp = useCallback((e:MouseEvent)=>{

    },[])
    useEffect(() => {

    },[])
}