import React from 'react'


const about = () => {
  return (
    <>
        <div id="aboutus" class="sectionClass">
          <div class="row ">
            <div class="sectiontitle">
              <h2>Work Experience</h2>
              <span class="headerLine"></span>
            </div>
            <div class="fullWidth eight columns">
              <ul class="cbp_tmtimeline">
                <li>
                  <div class="cbp_tmicon cbp_tmicon-phone">
                    {/* <i class="faPra fa-briefcase"></i> */}
                    <img src='/images/idenfo.png'/>

                  </div>
                  <div class="cbp_tmlabel wow fadeInRight animated">
                    <h3>Senior Software Engineer</h3>
                    <div class="date">
                      <i class="fa fa-calendar"></i>May 2023 - Current
                    </div>
                    <h4><i class="fa fa-flag"></i>Idenfo, Pakistan</h4>
                    <p class="projectParagraph">
                    Engineered robust API in Node.js enabling seamless data retrieval from MongoDB database leading to 25% reduction in loading time and improved user experience. 
                    <br/>
                    Carried out tasks including architecture setup of frontend and backend services and ensure consistency of patterns throughout the services or applications to make code comprehensive.
                    <br/>
                    Utilize server’s resources effectively while keeping check on cost of the system.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="cbp_tmicon cbp_tmicon-screen">
                    {/* <i class="faPra fa-briefcase"></i> */}
                    <img src='/images/linkstar.png'/>
                  </div>
                  <div class="cbp_tmlabel wow fadeInRight animated">
                    <h3>Full Stack Developer</h3>
                    <h4><i class="fa fa-flag"></i>Linkstar, Pakistan</h4>
                    <div class="date"><i class="fa fa-calendar"></i>March 2022 - April 2023</div>
                    <p class="projectParagraph">
                      Proficiently managed micro services architecture for websites built on multiple tech stack like Node.js, Php, React and Next.js.
                      <br/>
                      Led end to end development of payment modules, analytics and themes, from ideation to deployment.
                      <br/>
                      Implemented performance boosting techniques like caching using Redis and database indexing.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="cbp_tmicon cbp_tmicon-mail">
                    {/* <i class="faPra fa-briefcase"></i> */}
                    <img src='/images/increaserev.png'/>
                  </div>
                  <div class="cbp_tmlabel wow fadeInRight animated">
                    <h3>Junior Software Engineer</h3>
                    <h4><i class="fa fa-flag"></i>Increase Rev, Pakistan</h4>
                    <div class="date"><i class="fa fa-calendar"></i>August 2021 - February 2022</div>
                    <p class="projectParagraph">
                      Developed image optimization library and plugin which led to boosting 50% of website’s load speed on websites that contain high graphics content.
                      <br />
                      Conducted research on sql databases to optimize data fetching time through effective techniques like indexing, improving database architecture and lesser use of joins. 
                    </p>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

    </>
  )
}

export default about
