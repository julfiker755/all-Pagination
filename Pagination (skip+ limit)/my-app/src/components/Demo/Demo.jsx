import React, { useEffect, useState } from 'react';
import Card from './Card';

const Demo = () => {
  const [product,setproduct]=useState([])
  const [skip,setskip]=useState(0)
  const [limt,setlimt]=useState(0)
  useEffect(()=>{
    const getfun=()=>{
      fetch(`http://localhost:2020/product?skip=${skip}&limit=${limt}`)
      .then(res=>res.json())
      .then(data=>setproduct(data))
    }
    getfun()
  },[skip,limt])
  // handlefrom
  const handlefrom=(e)=>{
    e.preventDefault()
    const skipvalue=parseFloat(e.target.skipna.value)
    const limitvalue=parseFloat(e.target.limitna.value)
    setskip(skipvalue)
    setlimt(limitvalue)
  }
  return (
     <div className='w-11/12 m-auto'>
      {/* {  console.log(skip,limt)} */}
        <form onSubmit={handlefrom}>
        <div className='my-2 space-y-2  lg:space-y-0 items-center lg:flex  justify-center gap-4'>
        <div className='space-y-2 md:flex md:justify-center md:space-y-0 lg:space-x-2'>
        <input type="text" placeholder="Skip data" name="skipna" className="input md:mr-2 lg:mr-0 input-bordered input-primary w-full md:w-fit" />
        <input  type="text" placeholder="Limit data" name="limitna" className="input input-bordered input-primary w-full md:w-fit" />
        </div>
        <button className='btn btn-primary w-full my-5 lg:w-fit capitalize'>Load Data</button>
        </div>
        </form>
        <div>
          <div className="overflow-x-auto">
  <table className="table text-xl table-xs my-10">
    <thead>
      <tr className='text-xl'>
        <th>Scrial</th> 
        <th>id</th>
        <th>Name</th> 
        <th>Company</th> 
        <th>price</th> 
        <th>location</th>  
        <th>Local Id</th>
      </tr>
    </thead> 
    {/* table body */}
    <tbody>
    {product.map((product,index)=><Card key={product._id} index={index} product={product}></Card>)}
    </tbody> 
  </table>
</div>
        </div>
     </div>
  );
};

export default Demo;