import React, {useState, useEffect} from "react"

const ShowContainer = (props) => {
  const [launcher, setLauncher] = useState({
    name: "",
    bio: ""
  })
  
  const fetchLauncher = async () => {
    //specific id
    const launcherId = props.match.params.id
    
    try {
      //because we string interpolate the fetch for unique id add ``
      const response = await fetch(`/api/v1/launchers/${launcherId}`)
      //error handle
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      //parse response into json object
      const launcherData = await response.json()
      setLauncher(launcherData.launcher)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchLauncher()
  }, [])

  return (
    <div>
      <h1> Launcher Show Container </h1>
      <h3>
        {launcher.name}
      </h3>
      <div>
        {launcher.bio}
      </div>
    </div>
  )
}

export default ShowContainer