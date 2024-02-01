import React from 'react'

export default function Skills() {
  return (
    <section id="skills">
    <div className="container shadow-1-strong p-5 mt-5">
      <h2 className="h2 fw-light mb-4">Professional Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="pb-4">
            <h5>HTML</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{width: "90%"}}>MASTER</div>
            </div>
          </div>
          <div className="pb-4">
            <h5>CSS</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{width: "80%"}}>EXPERT</div>
            </div>
          </div>
          <div className="pb-4">
            <h5>JavaScript</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{width: "75%"}}>ADVANCE</div>
            </div>
          </div>
          <div className="pb-4">
            <h5>WordPress</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{width: "65%"}}>ADVANCE</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="pb-4">
            <h5>Adobe Photoshop</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info" style={{width: "90%"}}>MASTER</div>
            </div>
          </div>

          <div className="pb-4">
            <h5>Adobe Illustrator</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info" style={{width: "80%"}}>EXPERT</div>
            </div>
          </div>

          <div className="pb-4">
            <h5>Sketch</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info" style={{width: "78%"}}>ADVANCE</div>
            </div>
          </div>

          <div className="pb-4">
            <h5>Adobe XD</h5>
            <div className="progress skill" role="progressbar" aria-label="Example with label" aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info" style={{width: "67%"}}>ADVANCE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
