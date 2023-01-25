import React from "react"
import { TiAttachmentOutline } from "react-icons/ti"
import { AiFillEye, AiFillStar } from "react-icons/ai"
import { CgGitFork } from "react-icons/cg"
import { RxInfoCircled } from "react-icons/rx"

const Repo = ({ repo }) => {
  return (
    <a
      href={repo.html_url}
      className="repo-link"
      target="_blank"
      rel="noreferrer"
    >
      <div className="repo">
        <div className="repo-header">
          <TiAttachmentOutline className="repo-header-icon" />
          <h1 className="repo-header-name">{repo.name}</h1>
        </div>
        <p className="repo-description">
          {repo.description !== null ? repo.description : "No Description"}
        </p>
        <div className="repo-stats">
          <p>
            {repo.watchers_count} <AiFillEye className="repo-stats-icon" />
          </p>
          <p>
            {repo.stargazers_count} <AiFillStar className="repo-stats-icon" />
          </p>
          <p>
            {repo.forks} <CgGitFork className="repo-stats-icon" />
          </p>
          <p>
            {repo.open_issues_count}{" "}
            <RxInfoCircled className="repo-stats-icon" />
          </p>
        </div>
      </div>
    </a>
  )
}

export default Repo
