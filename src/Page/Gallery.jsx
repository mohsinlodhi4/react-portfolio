import React from 'react'
import projectImg1 from '../front/images/amazon_sponsored.png'
import projectImg2 from '../front/images/project2.png'
import projectImg3 from '../front/images/project3.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
// import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const Gallery = () => {
  return (
    <>

        <Header/>

        <div className="index_banner_wrapper gallery_banner">
            <div className="container">
                <div className="index_banner_wrap">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="index_banner_left" data-aos="zoom-in" data-aos-duration="2000">
                                <div className="index_banner_wrap_text">
                                    <h6>About Project</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="gallery_wrapper">
            <div className="container">
                <div className="gallery-wrap">
                    <div className="gallery_wrap_tbox">
                        <div className="gallery_wrap_ttext" data-aos="fade-right" data-aos-duration="2000">
                            <h6>Project Heading</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae sunt debitis harum optio quisquam. Perferendis esse magni dolores facere aliquid placeat commodi?</p>
                        </div>
                        <div className="gallery_wrap_btn" data-aos="fade-left" data-aos-duration="2000">
                            <Link to="/gallery" target='_blank' className="common_btn">Demo Link</Link>
                        </div>
                    </div>
                    <div className="gallery_wrap_images">
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg1} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg3} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg1} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg3} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg1} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg3} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg1} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="gallery_wrap_img_box">
                            <img src={projectImg3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Gallery
