import { useState } from 'react'
import Character from '../components/character'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';

export default function Home() {
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  return (

    <div>
      <NavBar setStatusFilter={setStatusFilter} setNameFilter={setNameFilter} />
      <Character statusFilter={statusFilter} nameFilter={nameFilter} />
    </div>
  )
}
