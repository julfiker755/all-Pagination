import React from 'react';

const Card = ({pro}) => {
    const {name,category,image}=pro
    return (
        <div  className='w-[320px]  border-2 border-[#320698] p-1 rounded-md cursor-pointer' >
            <img  className='w-full h-[230px]' src={image}/>
           <div className='space-y-1 py-1'>
             <p class="text-xs capitalize">{category}</p>
            <h3 class="text-lg font-semibold capitalize">{name}</h3>
            <button   className='bg-[#196779] text-white rounded py-2 px-8 hover:bg-[green] transition-all'>Show Details</button>
           </div>
        </div>
    );
};

export default Card;