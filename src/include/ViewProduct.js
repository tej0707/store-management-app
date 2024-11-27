import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewProduct() {
  const [products,setProducts]=useState([]);
  function getProduct()
  {
    axios.get('http://localhost:5000/products').then(
      response=>{
        setProducts(response.data)
        console.log(response.data)
      }
    ).catch(
      error=>console.log(error)
      
    )
  }
  useEffect(getProduct,[])

  function deleteProduct(id)
  {
    axios.delete(`http://localhost:5000/products/${id}`)
    .then(response=>{
      if(response.status===200)
      {
        alert("product details removed..!")
        window.location.reload();
      }
    }
    )
    .catch(error=>console.log(error))
  }
  return (
    <div className='pt-3 p-2'>
      <h1 className='text-center fs-3 text-warning'>
       All Product Of Store..!&nbsp;
       <i className="bi bi-shop-window"></i>
        </h1>
        <table className='bg-white table table-bordered table-hover'>
          <thead >
            <th >ID</th>
            <th>productName</th>
            <th>Specification</th>
            <th>price</th>
            <th>quantity</th>
            <th>Manufacturer</th>
            <th>inStock</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {
              products.map(
                (prod)=><tr key={prod}>
                  <td>{prod.id}</td>
                  <td>{prod.productName}</td>
                  <td>{prod.Specification}</td>
                  <td>{prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td>{prod.Manufacturer}</td>
                  <td>
                    <input type='checkbox' checked={prod.inStock}/>
                  </td>
                  <td>
                    <button className='btn btn-outline-primary me-3 'onClick={()=>deleteProduct(prod.id)}><i class="bi bi-trash-fill" ></i></button>
                    <Link className='btn btn-outline-primary me-3'to={`/add/${prod.id}`}><i class="bi bi-pen-fill"></i></Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        </div>
  )
}

export default ViewProduct