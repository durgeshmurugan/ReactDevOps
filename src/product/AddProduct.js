import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TextField, Grid } from '@mui/material'
import Serviceproduct from '../service/Serviceproduct';

const AddProduct = () => {

    let navigate = useNavigate();

    const [product, setProduct] = useState({
        productName: "",
        price: "",
        category: ""
    })

    const inputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await Serviceproduct.addProduct(product);
        alert("Product Added Successfully");
        navigate("/product");
    }

    return (
        <div className='container' id="con2">
            <div className='row '>
                <div className='col-md-4 offset-md-3 border rounded-5 unded p-4 mt-2 shadow' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', }}>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div role='addproducttitle'>
                            <h2 className='text-center m-4'>Add Product Form</h2>
                        </div>
                        <div className='mb-3'>
                            <Grid item xs={12} sm={6} role='input 1'>
                                <TextField
                                    fullwidth='true'
                                    id="outlined-textarea"
                                    label="Product Name"
                                    placeholder="Enter the Product Name"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    name="productName"
                                    value={product.productName}
                                /></Grid>
                        </div>
                        <div className='mb-3'>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth='true'
                                    id="outlined-textarea"
                                    label="Product Price"
                                    placeholder="Enter the Product price"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    name="price"
                                    value={product.price}
                                /></Grid>
                        </div>
                        <div className='mb-3 '>
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    fullWidth='true'
                                    id="outlined-textarea"
                                    label="Product Category"
                                    placeholder="Enter the Category"
                                    onChange={(e) => inputChange(e)}
                                    required="required"
                                    type="text"
                                    name="category"
                                    value={product.category}
                                /></Grid>
                        </div>
                        <button type='submit' name="Submit" className='btn btn-outline-primary' id="btn">Submit</button>
                        <Link to="/product" className='btn btn-outline-danger mx-2' id="btn">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
