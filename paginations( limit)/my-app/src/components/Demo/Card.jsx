import React from 'react';

const Card = ({product,index}) => {
    const {name,scrial, company, price, _id,id}=product
    return (
        <tr className='text-[18px]'>
        <th>{scrial}</th> 
        <td>{_id}</td> 
        <td>{name}</td> 
        <td>{company}</td> 
        <td>{price}</td> 
        <td>Khansama,dinajpur</td> 
        <td>{id}</td>
      </tr>
    );
};

export default Card;