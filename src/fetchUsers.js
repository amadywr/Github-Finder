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

export async function fetchUserFollowers(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/followers`
  )
  const followers = await response.json()
  return followers
}

export async function fetchUserFollowings(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/following`
  )
  const followings = await response.json()
  return followings
}
