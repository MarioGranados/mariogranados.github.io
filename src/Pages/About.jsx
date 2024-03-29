import ME from '../Images/me.jpeg'
const About = () => {
    return(<>
      <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" data-aos='fade-up'>
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={ME} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={{borderRadius: '10%'}}/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Who is this guy?</h1>
        <p className="lead">I am a US Navy veteran with a passion for creating modern websites and custom applications for businesses. I enjoy learning new technologies and I am always searching for the next challenge.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Looking To Hire?</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Need a Website?</button>
        </div>
      </div>
    </div>
  </div>
    </>)
}
export default About;