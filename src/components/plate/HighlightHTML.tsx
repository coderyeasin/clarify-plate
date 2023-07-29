import React from 'react';
import { formatHTML } from './formatHTML';
import  { Highlight, } from 'prism-react-renderer';

export const HighlightHTML = ({ code }: { code: string }) => (
    <Highlight
      code={formatHTML(code)}
      language="jsx"
    >
        
      {({ className, style, tokens, getLineProps, getTokenProps } : { className:any, style:any, tokens:any, getLineProps:any, getTokenProps:any }) => (
        <pre className={className} style={style}>
          {tokens.map((line:any, i:any) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token:any, key:any) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
  