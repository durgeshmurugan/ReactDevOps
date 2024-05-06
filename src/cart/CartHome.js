import React, { useEffect, useState } from 'react'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Servicecart from '../service/Servicecart';

const Home = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        const result = await Servicecart.getItems().then((res) =>{
            console.log(res.data);
            setCart(res.data);
    });

        
    }

    const doDelete = async (cartId) => {
        await Servicecart.deleteItem(cartId);
        alert("Product Deleted Successfully");
        window.location.reload();
        loadCart();
    }

    return (
        <div>
            <table className="table table-striped table-info table-hover shadow" id="table1">
                <thead className='text-center'>
                    <tr className='text-center'>
                        <th scope='col'>S.No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Quantity</th>
                        <th scope="col">Product Price</th>
                        <th colSpan={4}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        cart
                            .map((cart, index) => (
                                <tr>
                                    <th scope='row' key={index}>{index + 1}</th>
                                    <td>{cart.productName} </td>
                                    <td>{cart.quantity} </td>
                                    <td>{cart.price} </td>
                                    <td className='mx-2'>
                                        <button className='btn btn-danger' onClick={() => doDelete(cart.cartId)} ><FaTrashAlt /></button>
                                    </td>
                                </tr>
                            ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home