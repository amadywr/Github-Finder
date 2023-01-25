import React from "react"
import { Link } from "react-router-dom"

const SearchUser = ({ user }) => {
  return (
    <Link to={`users/${user.login}`}>
      <div className="search-user-wrapper">
        <div className="search-user">
          <img src={user.avatar_url} alt="users" />
          <div>
            <h4 className="search-user-login">{user.login}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SearchUser
