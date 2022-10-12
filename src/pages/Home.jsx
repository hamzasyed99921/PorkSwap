import React from 'react'
import Cards from '../components/Elements/Cards'
import Hero from '../components/Elements/Hero'
import Interface from '../components/Elements/Interface'
import Roadmap from '../components/Elements/Roadmap'
import Table from '../components/Elements/Table'
import Utilities from '../components/Elements/Utilities'
import Work from '../components/Elements/Work'
import Faqs from '../components/Utils/Faqs'

const Home = () => {
  return (
    <>
      <Hero/>
      <Cards/>
      <Work/>
      <Interface/>
      <Utilities/>
      <Table/>
      <Roadmap/>
      <Faqs/>
    </>
  )
}

export default Home