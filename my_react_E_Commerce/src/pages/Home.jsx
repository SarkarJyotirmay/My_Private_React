import React, { useEffect, useState } from 'react'
import instance from '../axiosConfig';
import Product from '../components/Product';

function Home() {
    const [products, setProducts] = useState([]);

   async function getData(){
      const response = await instance.get("/products")
      console.log(response.data[0]);
      setProducts(response.data)
    }

    useEffect(()=>{
      getData()
    },[])


  return (
    <>
      <div className="container bg-gray-100 p-8 flex flex-wrap gap-4 justify-center items-center">
        {
          products.map((obj)=>{
           return <Product product={obj} key={obj.id}/>
          })
        }
      </div>
    </>
  )
}

export default Home