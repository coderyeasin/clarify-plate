'use client';

import { Toolbar } from "@radix-ui/react-toolbar"
import { Plate, PlateProvider, Value, createPlateEditor, replaceNodeChildren, resetEditorChildren } from "@udecode/plate-common"
import { serializeHtml } from "@udecode/plate-serializer-html"
import React, { FunctionComponent, ReactNode, useCallback, useMemo, useState } from "react"
import { plugins } from '@/lib/plate/plate-plugins';

export const usePlateProvider = (id: string) => {
  const [value, setValue] = useState<Value>()
  const editor = useMemo(() => createPlateEditor({ plugins }), [])
  const serialize = useCallback(
    () =>
      serializeHtml(editor, {
        nodes: editor.children,
      }),
    [editor])
  const clear = useCallback(() => {
    resetEditorChildren(editor)
  }, [editor])
  const setNewValue = useCallback(
    (newValue: Value) => {
      replaceNodeChildren(editor, { nodes: newValue, at: [] })
    },
    [editor]
  )
   const Provider = useCallback<FunctionComponent<{ children: ReactNode }>>(
    ({ children }) => (
      <PlateProvider id={id} editor={editor as any} onChange={(v) => setValue(v)}>
        {children}
      </PlateProvider>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return {
    id,
    value,
    setValue: setNewValue,
    clear,
    serialize,
    editor,
    PlateProvider: Provider,
  }
}

export const RichTextEditor: FunctionComponent<any> = ({ id }) => {
  return (
    <div className="group border rounded-lg overflow-hidden">
      <Plate id={id} editableProps={{ className: 'm-4', placeholder: 'Enter some rich text…' }} />
      <Toolbar />
    </div>
  )
}

// Storybook usage example:
export const Template = () => {
  const { PlateProvider, value, serialize, id, clear, setValue } = usePlateProvider('test')
  const [serialized, setSerialized] = React.useState('')
  return (
    <div className="m-12 flex flex-col gap-4 ">
      <PlateProvider>
        <RichTextEditor id={id} />
      </PlateProvider>
      <div>{JSON.stringify(value)}</div>
      <div></div>
      <div dangerouslySetInnerHTML={{ __html: serialized }} />
      <button onClick={() => setSerialized(serialize())} className="self-start">
        Serialize
      </button>
      <button onClick={() => clear()} className="self-start">
        Clear
      </button>
      <button
        onClick={() =>
          setValue([
            {
              type: 'p',
              children: [
                {
                  text: 'Some new text',
                },
              ],
            },
          ])
        }
        className="self-start"
      >
        Set Value
      </button>
    </div>
  )
}