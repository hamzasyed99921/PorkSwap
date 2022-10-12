import React from "react";

const Work = () => {
  return (
    <>
      <div className="work_bg">
        <div className="container work_body">
          <h3 className="text-center work_txt mb-5">
            How It <span>Works</span>
          </h3>
          <div className="vedio mb-5" >
            <iframe
                className=" mb-5 col-12"
              width="1340"
              height="641"
              src="https://www.youtube.com/embed/-V5QjGogoig"
              title="PorkSwap is Decentralised spot and futures trading platform - Explainer Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
