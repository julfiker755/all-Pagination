import React, { useEffect, useState } from 'react';
import Card from './Card';

const Demo = () => {
  const [product,setproduct]=useState([])
  const [limit,setlimit]=useState(10)
  useEffect(()=>{
    const getfun=()=>{
      fetch(`http://localhost:2020/product?limit=${limit}`)
      .then(res=>res.json())
      .then(data=>setproduct(data))
    }
    getfun()
  },[limit])

// console.log(skip)
  return (
     <div className='w-11/12 m-auto'>
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
{/* simple buttons */}
<div className='flex justify-center'>
<button onClick={()=>setlimit((current=>current+2))} className='btn btn-primary my-4'>See More</button>
</div>
        </div>
     </div>
  );
};

export default Demo;