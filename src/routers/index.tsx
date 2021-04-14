import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import Register from 'pages/register'
import Download from 'pages/download'

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/download">
          <Download />
        </Route>
      </Switch>
    </>
  )
}

export default Router
