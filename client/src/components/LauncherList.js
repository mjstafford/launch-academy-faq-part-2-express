import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

const LauncherList = props => {
  const [launchers, setLaunchers] = useState([])
  useEffect(() => {fetchData() }, [])

  const fetchData = async () => {
    const response = await fetch("/api/v1/launchers")
    const launchersData = await response.json()
    setLaunchers(launchersData.launchers)
}

  const launcherList = launchers.map(launcher => {
    return (
      <li key={launcher.id}>
        <Link to={`/launchers/${launcher.id}`}>{launcher.name}</Link>
      </li>
    )
  })

  return (
    <div>
      <h1>Launchers Page</h1>
      <ul>{launcherList}</ul>
    </div>
  )
}

export default LauncherList
