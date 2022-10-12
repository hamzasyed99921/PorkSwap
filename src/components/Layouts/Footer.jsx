import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import {BsYoutube} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
          <div className="container d-flex ">
            <div className='footer_left '>
              <div className='footer_logo'><img src="assets/images/logo.png" alt="" />
              <p className='text-white mt-3'>Decentralized Spot and Futures Trading on Binance Smart Chain</p>
              </div>
            </div>
            <div className='footer_right d-flex justify-content-end'>
              <div className='d-flex flex-column'>
                <div  className='icons d-flex justify-content-between mb-4'>
                <span><MdOutlineEmail color='white' size={30}/></span>
                <span><BsTwitter color='white' size={30}/></span>
                <span><ImFacebook color='white' size={30}/></span>
                <span><BsYoutube color='white' size={30}/></span>
                <span><BsTelegram color='white' size={30}/></span>
                </div>
              <a href="#">exchange@porkswap.finance</a>
              </div>
            </div>
              
          </div>
          <hr className='text-white container' />
              <div className='text-white text-center' style={{padding: '8px 0 24px', fontSize:'18px',fontWeight: '600'}}>
                Copyright © 2022 PorkSwap.finance
              </div>
      </footer>
    </>
  )
}

export default Footer