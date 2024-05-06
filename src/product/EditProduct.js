import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Serviceproduct from '../service/Serviceproduct';

const EditCustomer = () => {

    let navigate = useNavigate();

    const {productId} = useParams();

    const [product, setProduct] = useState({
            productId:0,
            productName:"",
            price:0,
            category:""

    })

    const updateChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value, })
    };

    useEffect(()=>{
        loadProduct();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await Serviceproduct.updateproduct(product);
        alert("Product Details Updated Successfully");
        navigate("/prodcut");
    };


    const loadProduct = async () => {
        const result = await Serviceproduct.getProductById(productId)
        setProduct(result.data);
    };


  return (
    <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-6 offset-md-3 bBook rounded  p-4 mt-2 shadow '>
                    <h2 className='text-center m-4 '>Edit Form</h2>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className='mb-3 '>
                            <label htmlFor='Id' className='form-label '>Product ID : </label>
                            <input type='number' 
                                readOnly="readOnly"
                                className='form-control ' 
                                placeholder="Enter the Product Id" 
                                name="productId" value={product.productId}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='name' className='form-label '>Product Name : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Product Name" 
                                name="customerName" 
                                value={product.productName}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='price' className='form-label '>Product Price : </label>
                            <input type='number' 
                                className='form-control ' 
                                placeholder="Enter the Product Price" 
                                name="price" 
                                value={product.price}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='category' className='form-label '>Product Category : </label>
                            <input type='text' 
                                className='form-control ' 
                                placeholder="Enter the Product Category" 
                                name="category" value={product.category}
                                onChange={(e) => updateChange(e)}></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/product" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditCustomer
