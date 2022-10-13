import React from "react";

const Token = () => {
  return (
    <>
      <div className="token_bg">
        <div className="container " style={{padding: '50px 0 0 0'}}>
          <h2 className="text-center mb-5">
            Token <span>Distribution</span>
          </h2>
          <div className="token_img" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                marginLeft: "16%",
                marginTop: "0%",
                lineHeight: "0%",
              }}
              className="token_txt"
            >
              <h4>10%</h4>
              <p style={{fontSize: '1rem',fontWeight: 'bold'}}>Liquidity</p>
            </div>
            <div
              className="text-center token_txt vert-move  center_head"
              style={{
                position: "absolute",
                marginLeft: "38%",
                lineHeight: "0%",
              }}
              
            >
              <h4>50%</h4>
              <p style={{fontSize: '1rem',fontWeight: 'bold'}}>Liquidity Rewards (Locked)</p>
            </div>
              <div
                className="text-center token_txt"
                style={{
                  position: "absolute",
                  marginLeft: "73%",
                  marginTop: "0%",
                  lineHeight: "0px",
                }}
              >
                <h4>10% </h4>
                <p style={{fontSize: '1rem',fontWeight: 'bold'}}>Growth Hacking</p>
              </div>
            <div
              className="text-center token_txt"
              style={{
                position: "absolute",
                marginLeft: "2%",
                marginTop: "16%",
                lineHeight: "0%",
              }}
            >
              <h4>10%</h4>
              <p style={{fontSize: '1rem',fontWeight: 'bold'}}>Team - locked</p>
            </div>
            <div
              className="text-center token_txt"
              style={{
                position: "absolute",
                marginLeft: "87%",
                marginTop: "16%",
                lineHeight: "0%",
              }}
            >
              <h4>20%</h4>
              <p style={{fontSize: '1rem',fontWeight: 'bold'}}>Public Sale</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
