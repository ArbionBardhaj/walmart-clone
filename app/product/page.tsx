import fetchProduct from '@/lib/fetchProduct'
import React from 'react'

type Props = {
    searchParams:{
        url:string,
    }
}

const ProductPage = ({searchParams:{url}}:Props) => {
    const product = fetchProduct(url)
  return (
    <div>
      
    </div>
  )
}

export default ProductPage
