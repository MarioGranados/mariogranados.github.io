import COFFEE from "../Images/coffee.png";
import MOVIE from "../Images/movies.png";
import WEATHER from "../Images/weather.png";
import LOGO from "../Images/m.png";
const MoreProjects = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col" data-aos="fade-up">
          <a href="https://mariogranados.github.io/MovieProject/" className="text-decoration-none">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg shadow_hover"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${MOVIE})`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Movie Project
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={LOGO}
                      alt="MG"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>HTML, CSS, JS</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small></small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="col" data-aos="fade-down">
          <a href="https://mariogranados.github.io/Coffee-ProjectV2/" className="text-decoration-none">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg shadow_hover"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${COFFEE})`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Coffee Project
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={LOGO}
                      alt="MG"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>HTML, CSS, JS</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small></small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="col" data-aos="fade-up">
          <a href="https://mariogranados.github.io/weather-map-app/" className="text-decoration-none">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg shadow_hover"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${WEATHER})`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Weather Map Project
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={LOGO}
                      alt="MG"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>HTML, CSS, JS</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small></small>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MoreProjects;
