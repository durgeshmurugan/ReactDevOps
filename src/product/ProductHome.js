import React, { useEffect, useState } from 'react'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Serviceproduct from '../service/Serviceproduct';

const Home = () => {

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    const filterProduct = product.filter((prod) => {
        return search.toLowerCase() === "" ? prod : prod.productName.toLowerCase().includes(search)
    })

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await Serviceproduct.getAllProduct();
        setProduct(result.data);
        console.log(product)
    }

    const doDelete = async (productId) => {
        await Serviceproduct.deleteProduct(productId);
        alert("Product Deleted Successfully");
        window.location.reload();
        loadProduct();
    }

    return (
        <div>
            <div className="input-group" id="search">
                <div className="form-outline" data-mdb-input-init>
                    <input name="search" type="search" id="form1" className="form-control" placeholder='Search here...' onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
                </div>
            </div>
            <div className="container" role='addproduct'>
                <Link id="button-add" className='btn btn-primary mt-3 mb-2 mx-5' to={'/addproduct'}>Add Product</Link>
            </div>
            <table className="table table-striped table-info table-hover shadow" id="table1">
                <thead className='text-center'>
                    <tr className='text-center'>
                        <th scope="col" role='id'>Product ID</th>
                        <th scope="col" role='name'>Product Name</th>
                        <th scope="col" role='price'>Product price</th>
                        <th scope="col" role='category'>Product Category</th>
                        <th colSpan={4} role='actions'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        filterProduct
                            .map((prod, index) => (
                                <tr key={index}>
                                    <td>{prod.productId}</td>
                                    <td>{prod.productName} </td>
                                    <td>{prod.price} </td>
                                    <td>{prod.category} </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-info ' to={`/viewpage/${prod.productId}`} ><FaEye /></Link>
                                    </td>
                                    <td className='mx-2'>
                                        <Link className='btn btn-warning ' to={`/editpage/${prod.productId}`} ><FaEdit /> </Link>
                                    </td>
                                    <td className='mx-1'>
                                        <button className='btn btn-danger' onClick={() => doDelete(prod.productId)} ><FaTrashAlt /></button>
                                    </td>
                                    <td className='mx-1'>
                                        <button className='btn btn-light' role='addcartlink'>Add to cart</button>
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home