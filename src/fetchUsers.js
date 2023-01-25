export async function fetchUsers(username) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${username}`
  )
  const users = await response.json()
  return users.items
}

export async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()
  return user
}

export async function fetchUserRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()
  return repos
}
