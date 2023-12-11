import React from 'react'
import ShopbyCate from './categorylist/ShopbyCate'
import DealoftheDay from './categorylist/DealoftheDay'
import Bestseller from './categorylist/Bestseller'

export default function CategoryList() {
  return (
    <div>
      <ShopbyCate/>
      <DealoftheDay/>
      <Bestseller/>
    </div>
  )
}
