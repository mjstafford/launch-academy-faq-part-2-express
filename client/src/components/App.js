import React from "react"
import {Route, Switch, BrowserRouter} from "react-router-dom"

import FAQList from "./FAQList.js"
import LauncherList from "./LauncherList.js"
import ShowContainer from "./ShowContainer.js"


const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FAQList}/>
        <Route exact path="/launchers" component={LauncherList}/>
        <Route exact path="/launchers/:id" component={ShowContainer}/>
      </Switch>
    </BrowserRouter>

  )
}

export default App