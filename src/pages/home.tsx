function Homepage() {
  // const handleOnClik = () => {
  // const href = window.location.href
  // console.log(window.location.assign(host))
  // console.log(host)
  // window.location.host = host
  // }

  return (
    <div className="home-content" id="home">
      <h1 className="neonTitle">Raghell (Ragnarok)</h1>
      <div className="home-action">
        {/* <Button>Register</Button> */}
        <a href="#register" className="neonBtn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </a>
        <a href="#download" className="neonBtn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Download
        </a>
        {/* <Button>Download</Button> */}
      </div>
    </div>
  )
}

export default Homepage
