import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <>
        <div className="footer_wrapper">
            <div className="container">
                <div className="footer_wrap_box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="footer_wrap_text">
                                <h6>Let's Connect</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam mollitia harum ratione ea tempore, laudantium itaque consequatur nobis sed officia.</p>
                            </div>
                            <div className="footer_wrap_nav">
                                <ul>
                                    <li>
                                        <a href="#!">
                                            <IoCall />
                                            <p>0900-0000000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <MdEmail />
                                            <p>test@mail.com</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <FaLocationDot />
                                            <p>House-d/2, street-2, north-side, ABC-Residency.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer_wrap_links">
                                <ul>
                                    <li><a href="#!"><FiGithub /></a></li>
                                    <li><a href="#!"><FaLinkedinIn /></a></li>
                                    <li><a href="#!"><FaInstagram /></a></li>
                                    <li><a href="#!"><BsTwitterX /></a></li>
                                    <li><a href="#!"><FaFacebookF /></a></li>
                                    <li><a href="#!"><IoLogoYoutube /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="footer_wrap_text">
                                <h6>Get In Touch</h6>
                            </div>
                            <div className="footer_wrap_form" id="footer_form">
                                <div className="input_field">
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                                <div className="input_field">
                                    <input type="email" placeholder="Enter Your Email" />
                                </div>
                                <div className="input_field">
                                    <input type="number" placeholder="Enter Your number" />
                                </div>
                                <div className="input_field">
                                    <textarea placeholder="Message" name="" id=""></textarea>
                                </div>
                                <div className="footer_wrap_btn">
                                    <button type="submit" className="common_btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_wrap_copyright">
                    <p>Copyright ©2025 All rights reserved by <a href="/">@Mohsin</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
