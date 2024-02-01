import React from 'react'

export default function Contact() {
  return (
    <section id="Contact">
    <div className="container shadow-1-strong p-5 mt-5">
      <h2 className="h2 fw-light mb-4">Contact</h2>
      <div className="row">
        <div className="col-md-6 pe-4">
          <div>
            <a href="tel:+0718-111-0011" className="contactdata"><i className="contacticon fa-solid fa-phone text-muted pe-3"></i>+91 8460405676</a>
          </div>
          <div className="mt-1"><a href="mailto:walter@company.com" className="contactdata"><i className="contacticon fa-regular fa-envelope text-muted pe-3"></i>narendra.nayak.surat@gmail.com </a></div>
          <form className="pt-4">
            <div className="pt-4"><input type="text" placeholder="Name" required className="form-control"/></div>
            <div className="pt-4"><input type="email" placeholder="Email Address" required className="form-control"/></div>
            <div className="pt-4 pb-4"><textarea placeholder="Message" className="form-control pb-5"></textarea></div>
            <button type="submit" className="btn btn-info form-control text-white">SEND</button>
          </form>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d755.4781727127194!2d-73.97944!3d40.763945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb250d%3A0xdb570ddcb766e3a8!2sNew%20York%20City%20Center!5e0!3m2!1sen!2sin!4v1703345143175!5m2!1sen!2sin"
            width="100%" style={{border:0}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" className="iframe1"></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}
