import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchUserList from './components/SearchUserList'
import Footer from './components/Footer'

function App() {
  const [users, setUsers] = useState([])
  const [showBlur, setShowBlur] = useState(false)

  return (
    <div className={`homepage `}>
      <Router>
        <Navbar showBlur={showBlur} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <SearchBar setUsers={setUsers} users={users} />
                <SearchUserList users={users} />
              </>
            }
          />

          <Route
            path='/users/:username/*'
            element={
              <UserProfile showBlur={showBlur} setShowBlur={setShowBlur} />
            }
          />
          <Route
            path='*'
            element={<h1 className='container'>Error 404 page not found</h1>}
          />
        </Routes>
        <Footer showBlur={showBlur} />
      </Router>
    </div>
  )
}

export default App
