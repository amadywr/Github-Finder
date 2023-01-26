import { useEffect, useState } from 'react'
import { TiAttachmentOutline } from 'react-icons/ti'
import { AiFillEye, AiFillStar } from 'react-icons/ai'
import { CgGitFork } from 'react-icons/cg'
import { RxInfoCircled } from 'react-icons/rx'

const Repo = ({ repo }) => {
  const [showBtn, setShowBtn] = useState(true)

  // eslint-disable-next-line
  useEffect(() => {
    if (
      repo.homepage === null ||
      repo.homepage === ' ' ||
      repo.homepage === ''
    ) {
      setShowBtn(false)
    }
  }, [repo.homepage])

  return (
    <div className='repo'>
      <div className='repo-header'>
        <div className='repo-name'>
          <TiAttachmentOutline className='repo-header-icon' />
          <a
            href={repo.html_url}
            className='repo-link'
            target='_blank'
            rel='noreferrer'
          >
            <h1 className='repo-header-name'>{repo.name}</h1>
          </a>
        </div>
        {repo.fork === false ? (
          <p className='repo-owns'>Owns</p>
        ) : (
          <p className='repo-forked'>Forked</p>
        )}
      </div>
      <p className='repo-description'>
        {repo.description !== null ? repo.description : 'No Description'}
      </p>
      <div className='repo-bottom'>
        <div className='repo-stats'>
          <p>
            {repo.watchers_count} <AiFillEye className='repo-stats-icon' />
          </p>
          <p>
            {repo.stargazers_count} <AiFillStar className='repo-stats-icon' />
          </p>
          <p>
            {repo.forks} <CgGitFork className='repo-stats-icon' />
          </p>
          <p>
            {repo.open_issues_count}{' '}
            <RxInfoCircled className='repo-stats-icon' />
          </p>
        </div>

        {showBtn === true && (
          <a
            href={repo.homepage}
            target='_blank'
            rel='noreferrer'
            className='repo-link'
          >
            <p className='demo-available'>View Demo</p>
          </a>
        )}
      </div>
    </div>
  )
}

export default Repo
