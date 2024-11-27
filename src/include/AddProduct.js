import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function AddProduct() {
  const {register,handleSubmit,reset,setValue,formState:{error}}=useForm();
  const {id}=useParams()

  const saveData=product=>{
    if(!id){
      axios.post('http://localhost:5000/products',product)
      .then(response=>{
        if(response.status===201)
        {
          alert("product is successfully stored into the app !")
          reset();
        }
    })
    .catch(error=>console.log(error));
  }
      else{
        axios.put(`http://localhost:5000/products/${id}`,product)
        .then(response=>{
          if(response.status===200){
            alert("product details updated..!")
            reset();
          }
        })
        .catch(error=>console.log(error));
      }
    }
  const getEditData=()=>{
    if(id)
    {
      axios.get(`http://localhost:5000/products/${id}`)
      .then(response=>{
        for(let prop in response.data){
          setValue(prop,response.data[prop])
        }
      })
    }
  }
  useEffect(getEditData,[]);


  return (
    <div className='d-flex justify-content-center '>

     <div className=' w-50 border border-white mt-3 p-3 bg-white'>
      <h1 className='text-warning text-center fs-3'>
        <i className="bi bi-box-fill"></i>&nbsp;
        Add New Product..!
      </h1>
      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <label className='form-label'>Enter Product Id</label>
          <input type='text'{...register('id')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter Product Name</label>
          <input type='text'{...register('productName')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter Product Specification</label>
          <input type='text'{...register('Specification')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter Product Manufacturer</label>
          <input type='text'{...register('Manufacturer')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter Product Quantity</label>
          <input type='number'{...register('quantity')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter Product Price</label>
          <input type='text'{...register('price')} className='form-control border border-dark'/>
        </div>
        <div className='mt-3'>
          <label className='form-check-label me-4'>Is Product In Stock?</label>
          <input type='checkbox'{...register('inStock')} className='form-check-input border border-dark'/>
        </div>
        <div>
        <button type='submit' className='btn btn-success mt-3'>Submit</button>
        </div>
      </form>
      </div> 
    </div>
  )
}



export default AddProduct