import React from 'react'
import Narendra from "./image/Narendra nayak.jpg"

export default function Home() {
    return (
        <section>
            <div className="container my-5 ">
                <div className="imgbox shadow">
                    <div className="databox p-5 -2">
                        <img src={Narendra} className="img-thumbnail shadow-2-strong" width="160" />
                            <h1 className="textname text-white pt-4">Narendra Nayak</h1>
                            <p className="text-white">Front-end Developer</p>
                            <a href="#"><i className="fa-brands fa-twitter icon"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook icon"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram icon"></i></a>
                            <a href="#"><i className="fa-brands fa-github icon"></i></a>
                            <div className="p-4"><a className="btn btn-outline-white bg-dark text-white  btn-light border-3"
                                href="../resume/Narendra _Nayank.doc" download="Narendra _Nayank.doc"><span style={{fontSize: "0.75rem"}}> DOWNLOAD CV</span></a>
                                <a className="btn btn-info btn-lg shadow-sm mt-1 aos-init aos-animate text-white fs-6 ms-2" href="#"><span style={{fontSize: "0.75rem"}}>HIRE ME</span></a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
