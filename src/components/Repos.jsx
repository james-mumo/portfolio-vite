import { useState } from "react"
import { FolderOpen, GitHub, LaunchOutlined } from "@mui/icons-material"

export default function Page({ repos }) {
  const RepoItem = ({ repo }) => {
    const { id, name, description, topics } = repo

    return (
      <div
        key={id}
        className="relative flex mx-auto flex-col w-full max-w-[380px] border-teal-500 text-[#01d293] bg-[#01d2931e] border rounded-sm shadow-md overflow-hidden my-4 hover:-translate-y-4 transition-all duration-700 gap-1">
        {/*  */}
        <span className="topcarddiv flex justify-between pt-2 pb-1 px-4">
          <FolderOpen style={{ fontSize: "24px", cursor: "pointer" }} />
          <div className="farRightDiv flex gap-3">
            <GitHub style={{ fontSize: "24px", cursor: "pointer" }} />
            <LaunchOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
          </div>
        </span>
        <h3 className="text-2xl w-full text-center font-bold">{name}</h3>
        {/*  */}
        <span className="flex items-center">
          <hr className="border-t border-teal-400 mx-3 w-3" />
          <span className="text-[#7fffd4] text-[11px] font-semibold">
            Project Desc
          </span>
          <hr className="border-t border-teal-400 mx-3 flex-grow" />
        </span>
        {/*  */}
        <p className="text-teal-300 px-2 max-h-[120px] overflow-y-scroll mb-10">
          {description}
        </p>

        <div className="bottomcarddiv items-center justify-center flex repoTags mt-2 py-2 px-3 absolute bottom-0 w-full h-10 bg-teal-700 border overflow-y-scroll overflow-scroll">
          {topics.slice(0, 3).map((topic, i) => (
            <span
              className="mr-3 border border-teal-500 px-3 py-0 rounded-md bg-teal-800 text-white"
              key={i}>
              {topic}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div id="repo" className="h-fit w-full flex flex-col gap-0 py-10 px-0">
      <span className="markup ml-8">&lt;section&gt;</span>
      {/*  */}
      <span className="markup ml-8">&lt;h1&gt;</span>
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-3 w-10" />
        <span className="text-[#7fffd4] text-[33px] font-semibold">
          Other Notable Projects
        </span>
        <hr className="border-t border-teal-400 mx-3 flex-grow" />
      </span>
      <span className="markup ml-8">&lt;/h1&gt;</span>
      {/*  */}

      <span className="markup ml-8">&lt;div&gt;</span>
      <div class="grid grid-cols-3 justify-items-evenly">
        {repos?.length > 0
          ? repos
              .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
              .slice(0, 9)
              .map((repo) => <RepoItem key={repo.id} repo={repo} />)
          : "Loading"}
      </div>

      <span className="markup ml-8">&lt;/div&gt;</span>

      <span className="markup ml-8">&lt;/section&gt;</span>
    </div>
  )
}
