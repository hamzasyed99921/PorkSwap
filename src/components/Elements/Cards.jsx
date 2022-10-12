import React from "react";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={{ padding: "0px" }}>
              <div className="card text-center" style={{ border: "none" }}>
                <div>
                  <img
                    src="assets/images/f1.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Deflationary</h5>
                  <p className="card-text">
                    While other spot platform tokens mint 750,000 tokens per
                    day, we're aiming to burn 10% everyday through the revenue
                    generated from the platform. Increasing the value of token
                    over 30X within a year.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "3px " }}>
              <div
                className="card text-center shadow"
                style={{ border: "none" }}
              >
                <div>
                  <img
                    src="assets/images/f2.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Community Governance</h5>
                  <p className="card-text">
                    We believe in democratizing access to finance, what else can
                    be a better way to give entire power to the community.
                    Create custom polls, vote for good ones, bring new ideas to
                    the table, change the world for better.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "0px " }}>
              <div className="card text-center" style={{ border: "none" }}>
                <div>
                  <img
                    src="assets/images/f3.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Future Trading</h5>
                  <p className="card-text">
                    Bringing forward the true meaning of De-Fi that's
                    decentralizing current financial products, bringing
                    derivatives through futures trading so you can increase your
                    returns on profit. Buy long or sell short, it's on you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ padding: "3px" }}>
              <div className="card text-center shadow" style={{ border: "none" }}>
                <div>
                  <img
                    src="assets/images/f4.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Spot Trading</h5>
                  <p className="card-text">
                    Improved automated market maker to provide instant
                    fulfillment of orders with less slippage, exchange your
                    favourite tokens with 10 times less gas than Ethereum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "0px" }}>
              <div
                className="card text-center "
                style={{ border: "none" }}
              >
                <div>
                  <img
                    src="assets/images/f5.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Lottery</h5>
                  <p className="card-text">
                    Try your luck by gambling the extra tokens that you made by
                    providing liquidity, with a chance to 100X your investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "3px" }}>
              <div className="card text-center shadow" style={{ border: "none" }}>
                <div>
                  <img
                    src="assets/images/f6.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Security</h5>
                  <p className="card-text">
                    While other projects are getting DNS hijacked, we ensure the
                    security of our platform from DNS all the way to Smart
                    Contract are state-of-the-art secured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card_btm m'>
          <div className="container ">
            <div className="row mt-5 text-center">
              <div className="col-md-3 card_btm_img mt-3">
              <img src="assets/images/cmc-logo.png " alt="" />   
              </div>
              <div className="col-md-3 card_btm_img mt-3">
              <img src="assets/images/cg-logo.webp" alt="" />  
              </div>
              <div className="col-md-3 card_btm_img mt-3">
              <img src="assets/images/hb-logo.png" alt="" /> 
              </div>
              <div className="col-md-3 card_btm_img mt-3">
              <img src="assets/images/cb-logo.png" alt="" />   
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Cards;
