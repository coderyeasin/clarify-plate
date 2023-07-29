'use client';
import { PlateEditor } from "@udecode/plate-common";
import { serializeHtml } from "@udecode/plate-serializer-html";
import { useMemo } from "react";

const EditorPreview = ({
    editor,
  }: {
    editor: PlateEditor | null;
  }) => {
    // html has type string | null
    const html = useMemo(
      () => {
        return(
          editor && serializeHtml(editor, {
            nodes: editor.children,
          })
        )
      },
      [editor, editor?.children]
    );
    
    if (!html) return null;
    console.log('html', html);
    console.log('editor', editor);
    
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
  export default EditorPreview