import React from 'react'
import BannerImg from '../front/images/sixth-wrap-img.png'


const Banner = () => {
  return (
    <>
        <div className="index_banner_wrapper">
            <div className="container">
                <div className="index_banner_wrap">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                            <div className="index_banner_wrap_img">
                                {/* <img src={BannerImg} className="img-fluid rounded-top" alt="" /> */}
                                <img src="/mohsin.png" className="img-fluid rounded-top" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                            <div className="index_banner_left" data-aos="zoom-out" data-aos-duration="2000">
                                <div className="index_banner_wrap_text">
                                    <h6>Mohsin Khan Lodhi</h6>
                                    <p>Hi, I am a Software Engineer with focus on Software Architecture and AI integration. With a strong background in full-stack development, I specialize in building scalable, high-performance solutions that solve real-world problems.</p>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae neque corrupti totam beatae sed voluptatibus saepe ex ullam voluptatem. Atque officiis ratione molestiae enim sapiente commodi! Repellat blanditiis recusandae velit hic tempora accusantium voluptatem vero!</p> */}
                                </div>
                                <div className="index_banner_btn">
                                    <div className="index_banner_btn_inner">
                                        <a href="https://www.linkedin.com/in/mohsin-lodhi-53685b202/" target='_blank' className="common_btn" >LinkedIn <img width={35} src="/images/linkedin.png"/> </a>
                                        &nbsp;&nbsp;
                                        <a href="https://github.com/mohsinlodhi4" target='_blank' className="common_btn" >Github &nbsp;&nbsp; <img width={30} src="/images/github.png"/> </a>
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

export default Banner
