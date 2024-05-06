import React from "react";
import axios from 'axios';

const GetItems = "http://localhost:5555/get-all-cart";
const DeleteItems = "http://localhost:5555/delete-cart/"
const AddCart = `http://localhost:5555/addcart`;

class Servicecart extends React.Component {

    getItems(){
        return axios.get(GetItems);
    }

    deleteItems(cartId){
        return axios.delete(DeleteItems + cartId)
    }

    addItem(cart){
        axios.post(AddCart, cart)
    }
}
export default new Servicecart();