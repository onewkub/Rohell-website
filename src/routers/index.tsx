import { Switch, Route} from 'react-router-dom'

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/register">
          Register
        </Route>
        <Route exact path="/download">
          Download
        </Route>
      </Switch>
    
    </>
  )
}

export default Router
