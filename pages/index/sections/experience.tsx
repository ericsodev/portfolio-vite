import React from "react";
import Layout from "../layout";

export default function Experience() {
  return (
    <Layout>
      <div
        className="lg:col-start-2 col-span-1 lg:col-span-4 row-span-6 row-start-1 md:row-span-4
         md:row-start-2 lg:justify-self-start justify-self-center px-6 md:px-0 flex flex-col gap-4"
      >
        <div className="flex items-center gap-6">
          <h1 className="inline-block text-white text-3xl md:text-5xl font-semibold 2xl:text-6xl">
            my <strong className="text-purple">experience</strong>
          </h1>
          <div className="h-[2px] grow shrink mr-6 bg-indigo-300/60 rounded-lg"></div>
        </div>
        {/* <div className="mt-4 text-white">
          <p>
            My name is Eric and I am in my third year at the University of
            Toronto studying computer science.
          </p>
        </div> */}
      </div>
    </Layout>
  );
}
