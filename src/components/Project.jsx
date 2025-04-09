import React from 'react'
import projectImg1 from '../front/images/amazon_sponsored.png'
import projectImg2 from '../front/images/project2.png'
import projectImg3 from '../front/images/project3.png'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <>
      <div className="project_wrapper" id="projects">
        <div className="container">
          <div className="project_wrap">
            
            <div className="projext_wrap_ttext">
              <h6>Projects</h6>
            </div>

            <div className="projext_wrap_box">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_img" data-aos="fade-right" data-aos-duration="2000">
                    <img src="/images/bluuhealth.png" alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_inner" data-aos="fade-left" data-aos-duration="2000">
                    <div className="project_wrap_box_text" >
                      <h6>Bluu Health</h6>
                      <p> HIPAA Compliant EHR Software - A secure platform for managing appointments, billing, and claims. AI powered tools help practitioners quickly generate summaries of patient history and past visits.</p>
                    </div>
                    <div className="project_wrap_box_list">
                      <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>tailwind.js</li>
                      </ul>
                      <ul>
                        <li>react.js</li>
                        <li>node.js</li>
                        <li>mongoDB</li>
                        <li>gcp</li>
                      </ul>
                    </div>
                    <div className="project_wrap_box_btn">
                      {/* <Link to="/gallery" target='_blank' className="common_btn">View More</Link> */}
                      {/* <Link to="" target='_blank' className="common_btn">Github Link</Link> */}
                      <Link to="https://bluuhealth.com/" target='_blank' className="common_btn">Demo Link</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="projext_wrap_box">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_img" data-aos="fade-right" data-aos-duration="2000">
                    <img src="/images/idenfodirect.png" alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_inner" data-aos="fade-left" data-aos-duration="2000">
                    <div className="project_wrap_box_text" >
                      <h6>Idenfo Direct</h6>
                      <p> Enable seamless onboarding, fight financial crime through
                          Anti-Money Laundering and Know Your Customer services.</p>
                    </div>
                    <div className="project_wrap_box_list">
                      <ul>
                        <li>microservices</li>
                        <li>aws</li>
                        <li>redis</li>
                        <li>kafka</li>
                      </ul>
                      <ul>
                        <li>python</li>
                        <li>javascript.js</li>
                        <li>nest.js</li>
                        <li>vue.js</li>
                        <li>mongoDB</li>
                      </ul>
                    </div>
                    <div className="project_wrap_box_btn">
                      {/* <Link to="/gallery" target='_blank' className="common_btn">View More</Link>
                      <Link to="" target='_blank' className="common_btn">Github Link</Link> */}
                      <Link to="https://www.idenfodirect.com/" target='_blank' className="common_btn">Demo Link</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="projext_wrap_box">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_img" data-aos="fade-right" data-aos-duration="2000">
                    <img src="images/oliv.png" alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_inner" data-aos="fade-left" data-aos-duration="2000">
                    <div className="project_wrap_box_text" >
                      <h6>Oliv</h6>
                      <p>A platform for businesses and job seekers to connect and explore opportunity. Allows talent to find internships and graduate job while enabling them to enhance their resume with AI features. </p>
                    </div>
                    <div className="project_wrap_box_list">
                      <ul>
                        <li>aws</li>
                        <li>elasticsearch</li>
                        <li>mysql</li>
                        <li>javascript.js</li>
                      </ul>
                      <ul>
                        <li>next.js</li>
                        <li>node.js</li>
                        <li>python</li>
                        <li>mongoDB</li>
                      </ul>
                    </div>
                    <div className="project_wrap_box_btn">
                      {/* <Link to="/gallery" target='_blank' className="common_btn">View More</Link>
                      <Link to="/" target='_blank' className="common_btn">Github Link</Link> */}
                      <Link to="https://oliv.com/" target='_blank' className="common_btn">Demo Link</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Project
