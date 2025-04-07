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
                    <img src={projectImg1} alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_inner" data-aos="fade-left" data-aos-duration="2000">
                    <div className="project_wrap_box_text" >
                      <h6>Name of Project</h6>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione est alias error porro quidem explicabo nulla reiciendis. Nobis, dolorem quam.  </p>
                    </div>
                    <div className="project_wrap_box_list">
                      <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>tailwind.js</li>
                        <li>javascript.js</li>
                      </ul>
                      <ul>
                        <li>react.js</li>
                        <li>node.js</li>
                        <li>mongoDB</li>
                      </ul>
                    </div>
                    <div className="project_wrap_box_btn">
                      <Link to="/gallery" target='_blank' className="common_btn">View More</Link>
                      <Link to="" target='_blank' className="common_btn">Github Link</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="projext_wrap_box">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_img" data-aos="fade-right" data-aos-duration="2000">
                    <img src={projectImg2} alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_inner" data-aos="fade-left" data-aos-duration="2000">
                    <div className="project_wrap_box_text" >
                      <h6>Name of Project</h6>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione est alias error porro quidem explicabo nulla reiciendis. Nobis, dolorem quam.  </p>
                    </div>
                    <div className="project_wrap_box_list">
                      <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>tailwind.js</li>
                        <li>javascript.js</li>
                      </ul>
                      <ul>
                        <li>react.js</li>
                        <li>node.js</li>
                        <li>mongoDB</li>
                      </ul>
                    </div>
                    <div className="project_wrap_box_btn">
                      <Link to="/gallery" target='_blank' className="common_btn">View More</Link>
                      <Link to="" target='_blank' className="common_btn">Github Link</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="projext_wrap_box">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_img" data-aos="fade-right" data-aos-duration="2000">
                    <img src={projectImg3} alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="project_wrap_box_inner" data-aos="fade-left" data-aos-duration="2000">
                    <div className="project_wrap_box_text" >
                      <h6>Name of Project</h6>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione est alias error porro quidem explicabo nulla reiciendis. Nobis, dolorem quam.  </p>
                    </div>
                    <div className="project_wrap_box_list">
                      <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>tailwind.js</li>
                        <li>javascript.js</li>
                      </ul>
                      <ul>
                        <li>react.js</li>
                        <li>node.js</li>
                        <li>mongoDB</li>
                      </ul>
                    </div>
                    <div className="project_wrap_box_btn">
                      <Link to="/gallery" target='_blank' className="common_btn">View More</Link>
                      <Link to="/" target='_blank' className="common_btn">Github Link</Link>
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
