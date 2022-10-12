import React from "react";
import {GiCheckMark} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'

const Table = () => {
  return (
    <>
      <div className="table_bg ">
        <div className="container table_body text-center pt-5 pb-5">
          <div className="mb-5">
            <h3 className="">Comparison Table</h3>
            <p>
              We are building whole ecosystem tools for future identities and
              data.
            </p>
          </div>
          <div className='row'>
            <div className="col-md-3 col-12"></div>
            <div className="col-md-3 col-12">
            <div className='table_img text-center'><img src="assets/images/uniswap.png" alt="" /></div>
            </div>
            <div className="col-md-3 col-12 ">
                <div className='table_img text-center '><img src="assets/images/pancakeswap.png" alt="" /></div>
            </div>
            <div className="col-md-3 col-12">
            <div className='table_img text-center'><img src="assets/images/logo.png" alt="" /></div>
            </div>
          </div>
          <div className="body_table  ">
            <table className="table ">
              <tbody className='t_data'>
                <tr className='text-start px-5  bg-white'>
                  <td className='thead'>Automated Market Maker</td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
                <tr className='text-start bg-light'>
                  <td scope="row" className='thead'>Spot Trading</td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
                <tr className='text-start bg-white'>
                  <td scope="row" className='thead'>Futures Trading</td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
                <tr className='text-start bg-light'>
                  <td scope="row" className='thead'>Governance</td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
                <tr className='text-start bg-white'>
                  <td scope="row" className='thead'> Leveraged Trading</td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
                <tr className='text-start bg-light'>
                  <td scope="row" className='thead'>Gas Fees</td>
                  <td><small className='text-danger'>$71.56</small></td>
                  <td ><small className='text-danger'>$0.12</small></td>
                  <td><small className=''>$0.02</small></td>
                </tr>
                <tr className='text-start bg-white'>
                  <td scope="row" className='thead'>Inflationary</td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                </tr>
                <tr className='text-start bg-light'>
                  <td scope="row" className='thead'>Deflationary</td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
                <tr className='text-start bg-white'>
                  <td scope="row" className='thead'>Fixed Supply</td>
                  <td><GiCheckMark size={30} color='green'/></td>
                  <td><MdOutlineClose size={35} style={{color: 'red'}}/></td>
                  <td><GiCheckMark size={30} color='green'/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
