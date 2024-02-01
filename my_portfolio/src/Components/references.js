import React from 'react'
import img1 from './image/reference.png'
import img2 from './image/reference2.png'

export default function References() {
  return (
    <section id="References">
    <div className="container shadow-1-strong p-5 mt-5">
      <h2 className="h2 fw-light mb-4">References</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex">
            <div><img src={img1} width="70" alt=""/></div>
            <div>
              <h6 className="ms-4 pt-3">Aiyana</h6>
              <p className="text-small aos-init ms-4">CEO / Web Design Company</p>
            </div>
          </div>
          <div className="d-flex pt-2">
            <div><i className="text-secondary fa-solid fa-quote-left"></i></div>
            <div>
              <p className="lead mx-2 aos-init aos-animate pe-5" data-aos="fade-left" data-aos-delay="100">Walter displays
                exemplary professionalism and is able to take on challenges. He learns quickly and is an asset to any
                team.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex">
            <div><img src={img2} width="70" alt=""/></div>
            <div>
              <h6 className="ms-4 pt-3">Alexander</h6>
              <p className="text-small aos-init ms-4">Front-end Developer / Web Design Company</p>
            </div>
          </div>
          <div className="d-flex pt-2">
            <div><i className="text-secondary fa-solid fa-quote-left"></i></div>
            <div>
              <p className="lead mx-2 aos-init aos-animate pe-5" data-aos="fade-left" data-aos-delay="100">Walter is a great
                co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
