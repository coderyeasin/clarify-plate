'use client';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/plate-ui/button';
import Editor from '@/components/plate/Editor';
import CustomEditor from '@/components/plate/CustomEditor';
import TestEditor from '@/components/plate/TestEditor';
import { RichTextEditor, Template } from '@/components/plate/Access';

export default function IndexPage() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl">
          Plate Playground
        </h1>

      <div className="max-w-[1336px] rounded-lg border bg-background shadow">
        {/* <Editor /> */}
        {/* <CustomEditor />   */}
        <TestEditor  />
        {/* <Template /> */}
        {/* <RichTextEditor /> */}
      </div>
    </section>
  );
}
