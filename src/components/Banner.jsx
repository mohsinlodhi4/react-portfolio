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
                                    <p>A passionate Software Engineer dedicated to crafting innovative and efficient web applications. With a strong background in full-stack development, I specialize in building scalable, high-performance solutions that solve real-world problems.</p>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae neque corrupti totam beatae sed voluptatibus saepe ex ullam voluptatem. Atque officiis ratione molestiae enim sapiente commodi! Repellat blanditiis recusandae velit hic tempora accusantium voluptatem vero!</p> */}
                                </div>
                                <div className="index_banner_btn">
                                    <a href="#footer_form" className="common_btn" >Let's Chat</a>
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
