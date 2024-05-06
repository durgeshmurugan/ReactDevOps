import React from "react";
import axios from 'axios';

const GetAllProduct = "http://localhost:5555/get-all-product";
const DeleteProduct = "http://localhost:5555/delete-product/";
const AddNewProduct = "http://localhost:5555/add-product";
const UpdateProduct = "http://localhost:5555/update-product/";
const GetProductById = "http://localhost:5555/get-product/"

class Serviceproduct extends React.Component{

    getAllProduct(){
        return axios.get(GetAllProduct);
    }

    deleteProduct(productId){
        return axios.delete(DeleteProduct + productId);
    }

    addProduct(product){
        return axios.post(AddNewProduct, product);
    }

    updateproduct(product){
        return axios.put(UpdateProduct + product.productId, product)
    }

    getProductById(productId){
        return axios.get(GetProductById + productId)
    }
}
export default new Serviceproduct();