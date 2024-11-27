
import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
    <nav className='bg-success d-flex p-2 ps-3'>
        <div className='w-50'>
            <h1 className='text-white'>
                <i class="bi bi-shop me-4"></i>
                Store Management App
                   
                
            </h1>
        </div>
        <div className='w-50 text-end me-5 mt-2'>

            <Link className='btn btn-light me-4' to={'/add'}>Add Product</Link>
            <Link className='btn btn-light me-4' to={'/view'}>View Product</Link>

    </div>
    </nav>
    </div>
  )
}

export default Header