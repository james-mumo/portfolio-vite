import React from "react"
import { TagCloud } from "@frank-mayer/react-tag-cloud"

const TagSphere = ({ tags, width, height }) => (
  <div style={{ width, height, color: "#01d293", fontSize: "22px" }}>
    <TagCloud
      options={(w) => ({
        radius: Math.min(width, height, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClick={(tag, ev) => alert(tag)}
      onClickOptions={{ passive: true }}>
      {tags}
    </TagCloud>
  </div>
)

export default TagSphere
