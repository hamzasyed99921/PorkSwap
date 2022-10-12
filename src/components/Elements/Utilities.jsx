import React from "react";

const Utilities = () => {
  return (
    <>
      <div className="utility_bg">
        <div className="container utility_body">
          <h3 className="text-center utility_txt mb-5">
            $PSWAP <span>Utilities</span>
          </h3>
          <div className="row ">
            <div className="col-md-4 col-12">
              <div className="card shadow" style={{ border: "none" }}>
                <div className="card_img">
                  <img
                    src="assets/images/u1.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Governance</h5>
                  <p className="card-text">
                    Vote to modify underlying protocol, change in pricing
                    oracle, futures funding rate, platform fees, list/de-list
                    tokens, new features
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow" style={{ border: "none" }}>
                <div className="card_img">
                  <img
                    src="assets/images/u2.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Incentives</h5>
                  <p className="card-text">
                    Liquidity providers will be incentivized in $PSWAP for their
                    participation in spot and leverage liquidity pools, and LP
                    tokens can be staked for ARR of around 125%.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow" style={{ border: "none" }}>
                <div className="card_img">
                  <img
                    src="assets/images/u3.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Deflation</h5>
                  <p className="card-text">
                    With a fixed supply of 1 million tokens, and only 200,000 in
                    circulation, $PSWAP token will increase in value overtime
                    since it'll be scarce and the team will buy back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilities;
