import { useState } from 'react'
import './App.css'
// import { Router } from 'express';
import EntryPage from './EntryPage';
import ProfilePage from './ProfilePage';

export default function App() {
  const [page, setProfilePage] = useState(false);

  if (page) {
    return (
      <div>
        <ProfilePage/>
      </div>
    )
  }

  return (
    <div>
      <EntryPage/>
      <button onClick={() => setProfilePage(true)}>enter</button>
    </div>
  );
}
