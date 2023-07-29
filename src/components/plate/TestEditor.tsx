'use client';
import { plugins } from '@/lib/plate/plate-plugins';
import { Plate, usePlateEditorState } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { serializeHtml } from '@udecode/plate-serializer-html';
import React, { useMemo } from 'react'
import { HighlightHTML } from './HighlightHTML';

const editableProps= {
  spellCheck: false,
  autoFocus: false,
  readOnly: false,
  placeholder: 'Type…',
};
  const initialValue = [
    {
      type: ELEMENT_PARAGRAPH,
      children: [{ text: 'Test' }],
    },
  ];

const SerializeHtml = () => {
    const editor = usePlateEditorState();
  
    const html = useMemo(() => serializeHtml(editor, {
      nodes: editor.children,
    }), [editor.children]);
  console.log('html', html);
  
    return  <p>{html}</p>;
    // return  <HighlightHTML code={html} />;
  };
function TestEditor() {
  return (
    <div className='border border-slate-700'>
    <Plate     
    editableProps={editableProps}
    // plugins={plugins}
    initialValue={initialValue}
    >
        <SerializeHtml />
   </Plate>
    </div>
  )
}

export default TestEditor