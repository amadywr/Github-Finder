import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUserFollowings } from '../fetchUsers'
import { IoMdClose } from 'react-icons/io'

const Followings = ({ setShowBlur }) => {
  const username = useParams().username

  const [followings, setFollowings] = useState([])

  // eslint-disable-next-line
  useEffect(() => {
    fetchUserFollowings(username).then((followings) =>
      setFollowings(followings)
    )
  }, [])

  const navigate = useNavigate()

  function handleCloseBtn() {
    setShowBlur(false)
    navigate(`/users/${username}`)
  }

  return (
    <div className='following-followers'>
      <div className='close-btn-wrapper'>
        <IoMdClose className='close-btn' size={30} onClick={handleCloseBtn} />
      </div>

      <h1>Followings</h1>
      <div>
        {followings.length > 0 ? (
          followings.map((following) => (
            <p key={following.id} className={'items'}>
              {following.login}
            </p>
          ))
        ) : (
          <p>No Followings</p>
        )}
      </div>
    </div>
  )
}

export default Followings
