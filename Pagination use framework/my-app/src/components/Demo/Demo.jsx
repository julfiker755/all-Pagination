import React, { useEffect, useState } from 'react';
import Card from './Card';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Demo = () => {
  const [Product, setProduct] = useState([])
  const [totalproduct, settotalproduct] = useState(null)
  const [page, setpage] = useState(1)
  // const [limit, setlimit] = useState(10)

  useEffect(() => {
    const getdata = () => {
      fetch(`http://localhost:2020/product?page=${page}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }
    getdata()
  }, [page])
  // loaded product
 const totalpages=Math.ceil(totalproduct/4)
  // totalcount
  useEffect(() => {
    const getcount = () => {
      fetch('http://localhost:2020/totalcount')
        .then(res => res.json())
        .then(data => {
          const count = data.totalresult
          settotalproduct(count)
        })
    }
    getcount()
  }, [])


  return (
    <div className='max-w-7xl m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-9 lg:grid-cols-4 my-10'>
        {Product.map(Pro => <Card key={Pro._id} pro={Pro}></Card>)}
      </div>
      {/* paginations */}
      <div className='w-[200px] m-auto flex  justify-center my-3'>
      <ResponsivePagination
      current={page}
      total={totalpages}
      onPageChange={setpage}
    />
      </div>
    </div>
  );
};

export default Demo;