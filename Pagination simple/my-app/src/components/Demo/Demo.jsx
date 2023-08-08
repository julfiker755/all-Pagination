import React, { useEffect, useState } from 'react';
import Card from './Card';

const Demo = () => {
  const [Product,setProduct]=useState([])
  const [totalproduct,settotalproduct]=useState(null)
  const [currentpage,setcurrentpage]=useState(0)
  const [parpage,setparpage]=useState(10)

  const taltalpages=Math.ceil(totalproduct/parpage)
  // useEffect data for server
  useEffect(()=>{
    getdata()
  },[currentpage,parpage])
  // loaded product
  const getdata=()=>{
    fetch(`http://localhost:2020/product?page=${currentpage}&limit=${parpage}`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
  }
  // totalcount
  useEffect(()=>{
    const getcount=()=>{
      fetch('http://localhost:2020/totalcount')
      .then(res=>res.json())
      .then(data=>{
        const count=data.totalresult
        settotalproduct(count)
      })
    }
    getcount()
  
  },[])
  // extra page calculations
  const options=[2,5,10,15]
  const handleonchange=(event)=>{
   setparpage(parseInt(event.target.value))
  }
  return (
    <div className='max-w-7xl m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-9 lg:grid-cols-4 my-10'>
          {Product.map(Pro=><Card key={Pro._id} pro={Pro}></Card>)}
      </div>
      <p className='my-3 flex justify-center'>currentpage:{currentpage}</p>
      <div className='flex justify-center my-3'>
         {[...Array(taltalpages).keys()].map(pagitionbutton=><button onClick={()=>setcurrentpage(pagitionbutton)} className='border py-2 px-5 m-2'>{pagitionbutton+1}</button>)}
         <select value={parpage} onChange={handleonchange}>
           {options.map(options=><option key={options}>{options}</option>)}
         </select>
      </div>
    </div>
  );
};

export default Demo;