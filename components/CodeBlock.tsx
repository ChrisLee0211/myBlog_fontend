import React, { useLayoutEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import xonokai from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';

export interface ComponentProps {
    language: string|undefined;
    value: any
}

const FComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    const {language=undefined, value} = props;
    useLayoutEffect(()=> {
        SyntaxHighlighter.registerLanguage("ts", jsx);
        SyntaxHighlighter.registerLanguage("javascript", javascript);
        SyntaxHighlighter.registerLanguage("js", javascript);
    }, [])

    return (
        <figure className="highlight">
        <SyntaxHighlighter language={language} style={xonokai}>
          {value}
        </SyntaxHighlighter>
      </figure>
    )
}

export default FComponent