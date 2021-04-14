import { BackTop } from 'antd'
import ActionList from 'components/action-list'
import DownloadPage from 'pages/download'
import Homepage from 'pages/home'
import RegisterPage from 'pages/register'
import './App.less'

function App() {
  return (
    <div className="App">
      {/* <Router /> */}
      <ActionList />
      <Homepage />
      <RegisterPage />
      <DownloadPage />
      <BackTop onClick={() => window.location.assign('#home')} />
    </div>
  )
}

export default App
