'use client';
import { Plate, PlateEditor, PlateProvider } from "@udecode/plate-common";
import { FixedToolbar } from "../plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "../plate-ui/fixed-toolbar-buttons";
import { plugins } from "@/lib/plate/plate-plugins";

const MyEditor = ({
    setEditor,
    handleUpdateEditor,
  }: {
    setEditor: (editor: PlateEditor | null) => void;
    handleUpdateEditor: () => void;
  }) => (
    <PlateProvider
    plugins={plugins}       
    editorRef={setEditor}
    onChange={handleUpdateEditor} >
    <Plate    />
    <FixedToolbar>
    <FixedToolbarButtons />
  </FixedToolbar>
  </PlateProvider>
  );
  export default MyEditor