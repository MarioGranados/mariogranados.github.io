import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-secondary fixed-bottom">
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-light">
              &copy; 2023 Mario Granados
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="https://www.linkedin.com/in/marioagranados/">
                <FaLinkedin size={42}/>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://github.com/MarioGranados">
                <FaGithubSquare size={42}/>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
        </div>
        
    </>
  );
};
export default Footer;
