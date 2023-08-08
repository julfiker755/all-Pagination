import React, { useEffect, useState } from 'react';
import Card from './Card';

const Demo = () => {
  const [Product, setProduct] = useState([])
  const [totalproduct, settotalproduct] = useState(null)
  const [page, setpage] = useState(1)
  const [limit, setlimit] = useState(10)

  useEffect(() => {
    const getdata = () => {
      fetch(`http://localhost:2020/product?page=${page}&limit=${limit}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }
    getdata()
  }, [limit, page])
  // loaded product

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
  // extra page calculations
  const options = [2, 5, 10, 15]
  const handleonchange = (event) => {
    setlimit(parseInt(event.target.value))
    setpage(1)
  }
  return (
    <div className='max-w-7xl m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-9 lg:grid-cols-4 my-10'>
        {Product.map(Pro => <Card key={Pro._id} pro={Pro}></Card>)}
      </div>
      <div className='flex justify-center my-3'>
        {/* page calculations.................. */}
        <div className="join">
          <button onClick={()=>page === 1 ? setpage(1):setpage(page-1)} disabled={page === 1} className="join-item btn">«</button>
          <button className="join-item btn capitalize">Page-{page}</button>
          <button onClick={()=>{
            page === Math.ceil(totalproduct/limit) ? setpage(Math.ceil(totalproduct/limit)):setpage(page+1)
          }} disabled={page === Math.ceil(totalproduct/limit)} className="join-item btn">»</button>
        </div>
        {/* page calculations.................. */}
        {/* how to parpage you number counts */}
        <select className='ml-5' value={limit} onChange={handleonchange}>
          {options.map(options => <option key={options}>{options}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Demo;