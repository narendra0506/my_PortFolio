import React from 'react'

export default function Navbar(props) {
  return (
    <section>
    <div className="container pt-3 data">
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder name" href="#">{props.title}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#References">References
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Contact">Contact
            </a>
          </li>
        </ul>
          </div>
        </div>
      </nav>
      
    </div>
  </section>
  )
}
