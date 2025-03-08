import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
          <div className="container-fluid d-flex justify-content-between">
            <nav className="pull-left">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="http://www.ezioinfotech.com">
                    Ezio Infotech Pvt Ltd.
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Help </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Licenses </a>
                </li>
              </ul>
            </nav>
            <div className="copyright">
              2025, made with <i className="fa fa-heart heart text-danger"></i> by
              <a href="http://www.ezioinfotech.com">Ezio Infotech</a>
            </div>
            <div>
              Distributed by
              <a target="_blank" href="https://ezioinfotech.com/">Ezio Infotech</a>.
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
