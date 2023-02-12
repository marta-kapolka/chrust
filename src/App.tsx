import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Leaderboard } from './components/leaderboard/Leaderboard.component';
import { Home } from "./routes/home/Home.component";
import { Navigation } from './routes/navigation/Navigation.component';

import { User, temporaryUsers } from './temporaryData';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(temporaryUsers)
  }, [])

  const addBrushwoodHandler = (receivingUser: User): void => {
    const newUsers = users.map((user: User) => {
      return user.id === receivingUser.id ?
        {
          ...user,
          brushwoodAmount: user.brushwoodAmount + 1,
        } : 
        user;
    })

    setUsers(newUsers);
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home users={ users } addBrushwoodHandler={ addBrushwoodHandler } />} />
        <Route path="leaderboard" element={<Leaderboard users={ users } />} />
      </Route>
    </Routes>
  );
}

export default App;
