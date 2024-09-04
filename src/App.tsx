import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './Routes/Auth/Auth';
import './assets/styles/index.css'
import { UserContext, UserInterface } from './assets/Contexts/UserContext';
import Home from './Routes/Home/Home';
import { getUser } from './functions/user';

function App(): React.JSX.Element {
  const [user, setUser] = useState<UserInterface | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getUser().then((value) => {
      setLoading(false)
      setUser(value)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <span>Loading...</span>
    )
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HashRouter>
        {!user ? <Auth /> :
          <div className="App">
            <Routes>
              <Route element={<Home />} path='/'/>
              <Route path='/dashboard' />
              <Route path='/accounts' />
            </Routes>
          </div>
        }
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
