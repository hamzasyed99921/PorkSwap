import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg_img">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-12 ">
              <div className='text-white hero_txt d-flex flex-column align-content-center'>
                <h1>Decentralized Spot and <br/> Futures Trading on BSC</h1>
                <p>
                  Automated market maker powered, taking De-Fi game to the next
                  level. Make instant spot exchange, leveraged trades, provide
                  liquidity to earn returns and rewards.
                </p>
                <a className='bg_warning'>Spot Trading Platform Launched</a>
                <hr/>
                <div className='bg_red row '>
                  <span className='col-md-4 text-center'><a className=' text-white'>Earn PSWAP</a></span>
                <span className='col-md-4  text-center'><a className=' text-white'>Trade on PCS</a></span>
                <span className='col-md-4  text-center'><a className=' text-white'>Governance</a></span> 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mt-5">
              <div className='hero_img'>
                <img src="assets/images/porkswap-pink.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hero_btm '>
          <p className='text-center'>As seen on</p>
          <div className="container ">
            <div className="row mt-5 text-center">
              <div className="col-md-3 hero_btm_img mt-3">
              <img src="assets/images/yahoo.png " alt="" />   
              </div>
              <div className="col-md-3 hero_btm_img mt-3">
              <img src="assets/images/logo-bloomberg.svg" alt="" />  
              </div>
              <div className="col-md-3 hero_btm_img mt-3">
              <img src="assets/images/logo-benzinga.webp" alt="" /> 
              </div>
              <div className="col-md-3 hero_btm_img mt-3">
              <img src="assets/images/news-btc.png" alt="" />   
              </div>
            </div>
            <hr className='mt-5' />
          </div>
      </div>
      
    </>
  );
};

export default Hero;
