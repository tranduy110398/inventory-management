import React from 'react'
import PopularProducts from './PopularProducts';
import SalesSummary from './SalesSummary';
import PurchaseSummary from './PurchaseSummary';


const Dashboard = () => {
  return (
    // smallest, mobile: 1 column, tablet: 2 columns, computer: 3 columns 
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      {/* Products board */}
      <PopularProducts/>
      <SalesSummary/>
      <PurchaseSummary/>
      <div className="row-span-3 bg-gray-500"/>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
    </div>
  )
}

export default Dashboard;