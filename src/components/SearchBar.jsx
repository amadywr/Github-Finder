import React from "react"
import { fetchUsers } from "../fetchUsers"
import { useState } from "react"

const SearchBar = ({ setUsers }) => {
  const [username, setUsername] = useState("")
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (username.length === 0) {
      console.log("enter a username")
      setError(true)
    } else {
      setUsers(await fetchUsers(username))

      setUsername("")
    }
  }

  return (
    <div className="container searchbar">
      <form onSubmit={handleSubmit} className="search-form">
        <p>{error && "Please enter a username"}</p>
        <input
          className="search-input"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
    </div>
  )
}

export default SearchBar
