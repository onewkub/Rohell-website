import HttpRequest from './httpRequest'

const ragnarokHttprequest = new HttpRequest(
  `${process.env.REACT_APP_ROHELL_API}` || 'http://localhost:3001/api'
)

export default ragnarokHttprequest
