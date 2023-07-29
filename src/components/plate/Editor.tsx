'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CommentsProvider } from '@udecode/plate-comments';
import { PLATE_SCOPE, Plate, PlateProvider, createPlateEditor, useEditorState, usePlateEditorState, usePlateStates, withTReact } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

import { commentsUsers, myUserId } from '@/lib/plate/comments';
import { MENTIONABLES } from '@/lib/plate/mentionables';
import { plugins } from '@/lib/plate/plate-plugins';
import { cn } from '@/lib/utils';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { CursorOverlay } from '@/components/plate-ui/cursor-overlay';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { MentionCombobox } from '@/components/plate-ui/mention-combobox';
import { MyValue } from '@/lib/plate/plate-types';
import { Node,Text, createEditor } from 'slate'
// import escapeHtml from 'escape-html'
import { HTML5Backend } from 'react-dnd-html5-backend';

import { serializeHtml,elementToHtml } from '@udecode/plate-serializer-html';
import { withReact } from 'slate-react';
import { DndProvider } from 'react-dnd';
import { HighlightHTML } from './HighlightHTML';


const initialValue = [
  {
    type: ELEMENT_PARAGRAPH,
    children: [{ text: 'Convert' }],
  },
];
// const Serialized = () => {
//   const editor = useEditorState();
//   const html = serializeHtml(editor, {
//     nodes: editor.children
//   });

//   console.log(html);
//   return html
// };

export default function Editor() {
  const [value, setValue] = useState()
  const [debugValue, setDebugValue] = useState();
  // const [editor] = useState(() => withReact(createEditor()))
  const containerRef = useRef(null);

// console.log('containerRef', containerRef);
// console.log('editorvalue', containerRef.current);
// console.log('editorvalue', containerRef.current?.innerText);


// plaintext
// const serialize = (nodes : any) => {
//   const plainTxt = nodes.map((n:any) => Node.string(n)).join('\n')
//   console.log('plainTxt',plainTxt);
//   return plainTxt
// }
// const [editor] = useState(() => withTReact(createPlateEditor({ plugins })))

// const editor = createPlateEditor({ plugins });
// const testHtml= serializeHtml(editor, {
//   nodes: editor.children,
// }
// );
// console.log('testHtml',testHtml);


// console.log('editor',editor);



// const serialize = (node) => {
//   if (Text.isText(node)) {
//     let string = escapeHtml(node.text)
//     if (node?.bold) {
//       string = `<strong>${string}</strong>`
//     }
//     return string
//   }

//   const children = node.children?.map((n) => serialize(n)).join('')

//   console.log('children',children);
//   switch (node.type) {
//     case 'quote':
//       return `<blockquote><p>${children}</p></blockquote>`
//     case 'paragraph':
//       return `<p>${children}</p>`
//     case 'link':
//       return `<a href="${escapeHtml(node.url)}">${children}</a>`
//     default:
//       return children
//   }
// }

// const handleChange = useCallback((nextValue) => {
//   setValue(nextValue);
//   // serialize slate state to a markdown string
//   onChange(value.map((v) => serialize(v)).join(''));
// }, [onChange]);
// console.log('editor', editor);

// const SerializeHtml = () => {
//   const editor = usePlateEditorState();

//   const html = useMemo(() => serializeHtml(editor, {
//     nodes: editor.children,
//   }), [editor.children]);
// console.log('html', html);

//   // return  <p>{html}</p>;
//   return  <HighlightHTML code={html} />;
// };

  return (
      <div className="relative">
        <PlateProvider plugins={plugins} initialValue={initialValue} 
        // onChange={value => {
        //   const isAstChange = editor.operations.some(
        //     (op:any) => 'set_selection' !== op.type
        //   )
        //   if (isAstChange) {
        //     const content = JSON.stringify(value)
        //     console.log('content', content);
            
        //   }
        // }}
        >
              <div
                // ref={containerRef}
                className={cn(
                  'relative flex max-w-[900px] overflow-x-auto',
                  '[&_.slate-start-area-top]:!h-4',
                  '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px]'
                )}
              >
                <Plate
                  editableProps={{                    
                    autoFocus: true,
                    className: cn(
                      'relative max-w-full leading-[1.4] outline-none [&_strong]:font-bold',
                      '!min-h-[400px] w-[900px] px-[96px] py-16'
                    ),
                  }}
                >
                  <FloatingToolbar>
                    <FloatingToolbarButtons />
                  </FloatingToolbar>
                  {/* <SerializeHtml  /> */}
                </Plate>
              </div>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
        </PlateProvider>
      </div>
  );
}
