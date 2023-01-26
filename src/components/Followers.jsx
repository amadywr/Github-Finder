import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUserFollowers } from '../fetchUsers'
import { IoMdClose } from 'react-icons/io'

const Followers = ({ setShowBlur }) => {
  const username = useParams().username

  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetchUserFollowers(username).then((followers) => setFollowers(followers))
  })

  const navigate = useNavigate()

  function handleCloseBtn() {
    setShowBlur(false)
    navigate(`/users/${username}`)
  }

  // function handleUsersBtn(user) {
  //   setShowBlur(false)
  //   navigate(`/users/${user}`)
  // }

  return (
    <div className='following-followers'>
      <div className='close-btn-wrapper'>
        <IoMdClose className='close-btn' size={30} onClick={handleCloseBtn} />
      </div>

      <h1>Followers</h1>
      <div>
        {followers.map((follower) => (
          <p key={follower.id} className={'items'}>
            {follower.login}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Followers
