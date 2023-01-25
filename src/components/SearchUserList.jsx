import React from "react"
import SearchUser from "../components/SearchUser"

const SearchUserList = ({ users }) => {
  return (
    <div className="container search-users-list">
      {users.length !== 0 &&
        users.map((user) => <SearchUser key={user.id} user={user} />)}
    </div>
  )
}

export default SearchUserList
