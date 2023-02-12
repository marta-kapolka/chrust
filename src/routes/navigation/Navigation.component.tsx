import { Link, Outlet } from "react-router-dom"

import './Navigation.styles.scss'

export const Navigation = (): JSX.Element => {
  return (
    <div className="navigation-container">
      <h1 className="navigaton-header">Mistrzostwa Suchar Śląskich</h1>
      <Outlet />
      <div className="navigaton-links-container">
        <Link to="/" className="navigaton-link">/Chrust/</Link>
        <Link to="leaderboard" className="navigaton-link">Najlepsiejsi</Link>
      </div>
    </div>
  )
}