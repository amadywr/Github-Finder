import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { fetchUser, fetchUserRepos } from '../fetchUsers'
import { IoIosPeople, IoMdPeople } from 'react-icons/io'
import { AiFillDatabase } from 'react-icons/ai'
import { CiDatabase } from 'react-icons/ci'
import Repo from './Repo'
import moment from 'moment'
import Followers from './Followers'
import Followings from './Followings'

const UserProfile = ({ showBlur, setShowBlur }) => {
  const username = useParams().username
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetchUser(username).then((user) => setUser(user))
    fetchUserRepos(username).then((repos) => setRepos(repos))
  })

  const date = moment(user.created_at)
  const formatDate = date.fromNow()

  function handleBtnFollowers() {
    setShowBlur(true)
    navigate(`/users/${username}/followers`)
  }

  function handleBtnFollowings() {
    setShowBlur(true)
    navigate(`/users/${username}/followings`)
  }

  return (
    <>
      <div
        className={`user-profile container ${showBlur && 'blur'}`}
        disabled={true}
      >
        <div className='profile-top'>
          <img src={user.avatar_url} alt='user profile' />
          <div className='profile-top-wrapper'>
            <div className='profile-header'>
              <div>
                <div className='profile-title'>
                  <h1 className='profile-name'>{user.name}</h1>
                  <div className='profile-icons'>
                    <p className='profile-type'>{user.type}</p>
                    <p className='profile-hireable'>
                      {user.hireable ? 'Hireable' : 'Not hireable'}
                    </p>
                  </div>
                </div>
                <p className='profile-login'>{user.login}</p>
              </div>
              <a
                className='profile-visit'
                href={user.html_url}
                target='_blank'
                rel='noreferrer'
              >
                Visit Github Profile
              </a>
            </div>
            <p className='profile-bio'>
              {user.bio !== null ? user.bio : 'No bio'}
            </p>

            <div className='profile-links'>
              <div className='profile-links-divider profile-links-items'>
                <p className='profile-links-title'>Location</p>
                <p className='profile-links-number'>
                  {user.location !== null ? user.location : 'Null'}
                </p>
              </div>
              <div className='profile-links-divider profile-links-items'>
                <p className='profile-links-title'>Website</p>
                <p className='profile-links-number'>
                  {user.blog !== '' ? user.blog : 'Null'}
                </p>
              </div>
              <div className='profile-links-divider profile-links-items'>
                <p className='profile-links-title'>Twitter</p>
                <p className='profile-links-number'>
                  {user.twitter_username !== null
                    ? user.twitter_username
                    : 'Null'}
                </p>
              </div>
              <div className='profile-links-items'>
                <p className='profile-links-title'>Company</p>
                <p className='profile-links-number'>
                  {user.company !== null ? user.company : 'Null'}
                </p>
              </div>
            </div>
            <div>
              <p className='profile-links-title'>Joined Github</p>
              <p className='profile-links-number'>
                {user.created_at !== null ? formatDate : 'Null'}
              </p>
            </div>
          </div>
        </div>

        <div className='profile-middle'>
          <div className='profile-middle-column'>
            <div>
              <p
                className='profile-stats-title profile-FF'
                onClick={handleBtnFollowers}
              >
                Followers
              </p>
              <p className='profile-stats-number'>{user.followers}</p>
            </div>
            <IoIosPeople className='profile-stats-icons' />
          </div>

          <div className='profile-middle-column divider'>
            <div>
              <p
                className='profile-stats-title profile-FF'
                onClick={handleBtnFollowings}
              >
                Following
              </p>
              <p className='profile-stats-number'>{user.following}</p>
            </div>
            <IoMdPeople className='profile-stats-icons' />
          </div>

          <div className='profile-middle-column divider'>
            <div>
              <a href={'#profile-bottom'}>
                <p className='profile-stats-title profile-FF'>Public Repos</p>
              </a>

              <p className='profile-stats-number'>{user.public_repos}</p>
            </div>
            <AiFillDatabase className='profile-stats-icons' />
          </div>

          <div className='profile-middle-column divider'>
            <div>
              <p className='profile-stats-title'>Public Gists</p>
              <p className='profile-stats-number'>{user.public_gists}</p>
            </div>

            <CiDatabase className='profile-stats-icons' />
          </div>
        </div>

        <div className='profile-bottom' id='profile-bottom'>
          <h2>Public Repositories</h2>
          {repos.length <= 0 ? (
            <p>No repository</p>
          ) : (
            repos.map((repo) => <Repo key={repo.id} repo={repo} />)
          )}
        </div>
      </div>

      <Routes>
        <Route
          path='/followers'
          element={<Followers setShowBlur={setShowBlur} />}
        />
        <Route
          path='/followings'
          element={<Followings setShowBlur={setShowBlur} />}
        />
      </Routes>
    </>
  )
}

export default UserProfile
