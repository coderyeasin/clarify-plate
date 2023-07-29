'use client';
import { Plate, PlateEditor, PlateProvider, createPlateEditor, deserializeHtml, usePlateEditorState } from '@udecode/plate-common';
import { serializeHtml } from '@udecode/plate-serializer-html';
import { plugins } from '@/lib/plate/plate-plugins';
import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { FixedToolbar } from '../plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '../plate-ui/fixed-toolbar-buttons';
import { cn } from '@/lib/utils';
import EditorPreview from './EditorPreview';
import MyEditor from './MyEditor';

const editableProps= {
    spellCheck: false,
    autoFocus: false,
    readOnly: false,
    placeholder: 'Type…',
  };

  // const initialValue = [
  //   {
  //     type: ELEMENT_PARAGRAPH,
  //     children: [{ text: 'Convert' }],
  //   },
  // ];

function CustomEditor(){
const [editor, setEditor] = useState<PlateEditor | null>(null);
const [, handleUpdateEditor] = useReducer((x) => x + 1, 0);
  return (
    <div className='border border-blue-700'>
     <EditorPreview editor={editor}/>
     <MyEditor setEditor={setEditor} handleUpdateEditor={handleUpdateEditor}/>
    </div>
  )
}
export default CustomEditor
