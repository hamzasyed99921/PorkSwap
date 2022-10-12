import React from "react";

const Roadmap = () => {
  return (
    <>
      <div className="roadmap_bg">
        <div className="container roadmap_body">
          <h3 className=" roadmap_txt mb-5 text-center">
            Product <span>Roadmap</span>
          </h3>
          <div className="roadmap_img text-center">
            <img src="assets/images/porkswap-timeline.png" alt="" />
          </div>
          <hr />
          <div className="mt-5 mb-5 row">
            <div className="col-md-8 col-12 mt-5 roadmap_img text-center">
              <img src="assets/images/gov.png" alt="" />
            </div>
            <div className="col-md-4 col-12 mt-5">
              <div className="right_roadmap text-center">
                <h3 className="mb-3">Governance Platform</h3>
                <a href="#" className="shadow">
                  Lunched, Start Voting Now
                </a>
              </div>
              <div className="mt-4 lists">
                <p>You'll be able to vote for:</p>
                <ul>
                  <li>Change in underlying protocol</li>
                  <li>Change in pricing oracle</li>
                  <li>Change in futures funding rate</li>
                  <li>Change in platform fees</li>
                  <li>Change inlist/de-list tokens</li>
                  <li>Propose new features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
