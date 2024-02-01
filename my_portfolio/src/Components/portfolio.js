import React from 'react'
import img1 from './image/pr1.png'
import img2 from '../Components/image/pr2.png'

export default function Portfolio() {
  return (
    <>
    <section id="Portfolio">
    <div class="container shadow-1-strong p-5 mt-5">
      <h2 class="h2 fw-light mb-4">Portfolio</h2>
      <div class="row g-0">
        <div class="col-md-6">
        <img className="img-fluid" src={img1}/>
        </div>
        <div class="col-md-6">
          <div class="ps-5 pt-1">
            <p class="text-teal pt-5">Frontend / HTML / CSS / JavaScript</p>
            <h1>Photo Agency Website</h1>
            <p class="text-muted">Built highly performant website front end for a Photography agency. Delivered codebase
              in HTML, CSS and
              modern JavaScript.</p>
          </div>
        </div>
      </div>
      <div class="row g-0 flex-row-reverse">
        <div class="col-md-6 "><img className="img-fluid" src={img2}/></div>
        <div class="col-md-6 pe-3">
          <div class="ps-5">
            <p class="text-teal pt-5">Graphic Design / Photoshop / Sketch</p>
            <h1>Restaurant Website Design</h1>
            <p class="text-muted">Web design for popular resturant chain involving complex layouts done in both
              Photoshop and Sketch. Collaborated with back-end and front-end team for finished product.</p>
          </div>
        </div>

      </div>

      <div class="row g-0">
        <div class="col-md-6"><img className="img-fluid" src={img1}/></div>
        <div class="col-md-6">
          <div class="ps-5">
            <p class="text-teal pt-5">Frontend / HTML / CSS / JavaScript</p>
            <h1>Photo Agency Website</h1>
            <p class="text-muted">Built highly performant website front end for a Photography agency. Delivered codebase
              in HTML, CSS and
              modern JavaScript.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  </>
  )
}
