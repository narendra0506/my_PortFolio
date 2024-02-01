import React from 'react'

export default function About() {
  return (
    <section id="about">
    <div className="container shadow-1-strong p-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h2 fw-light mb-4">About Me</h2>
            <p style={{lineHeight: "1.7rem"}}>Hello! I’m Narendra Nayak. I am passionate about UI/UX design and Web Design. I am a skilled front-end
              developer. I am a quick learner and a team
              worker that gets the job done.</p>
            <p style={{lineHeight: "1.7rem"}}>
              I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time
              schemas.
            </p>
        </div>
        <div className="col-md-6 ps-5">
          <h2 className="h2 fw-light bio1">Bio</h2>
          <div className="d-flex">
            <div className="col-6 bio">
              <div className="fw-bolder pb-3"><i className="fa-solid fa fa-calendar-days p-2"></i>Age</div>
              <div className="fw-bolder pb-3"><i className="fa-solid fa fa-envelope p-1"></i>Email</div>
              <div className="fw-bolder pb-3"><i className="fa-brands fa fa-skype p-1"></i>Skype</div>
              <div className="fw-bolder pb-3"><i className="fa-solid fa fa-phone p-1"></i>Phone</div>
              <div className="fw-bolder pb-3"><i className="fa-solid fa fa-location-dot p-1"></i>Skype</div>
            </div>

            <div className="col-6 mt-2">
              <div className=" pb-3">30</div>
              <div className=" pb-3">narendra.nayak.suart@gmail.com</div>
              <div className=" pb-3">narendranayak@skype.com </div>
              <div className=" pb-3">+91 8460405676</div>
              <div className=" pb-2">67,Surat-Gujarat-394221 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
