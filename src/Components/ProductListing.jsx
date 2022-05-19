import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/action/productsActions';


// we are goint to fetch the product that we have in our redux store in order to get access to the redux store we can make use of use selector. This useSelector takes the argument as state and return state
function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchdata = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err)
        })
        dispatch(setProducts(response.data))
    }
    console.log("My product is ", products)



    useEffect(() => {
        fetchdata();
    }, [])
    // we have received the data from the server and once we receive the data from the server we need to send it to the store and for that we need to dispatch the action and our action was setproducts and to dispatch we have the redux hook that is use Dispatch. When the product is dispatched it is going to return object with key as type and pyload.It will go to the reducer where it will get the type and payload and once we get the setproducts as type we pass the new state. This is how we can get the data from the server and dispatch an action and update your store

    return (
        <>
            <ProductComponent />
        </>

    )






}

export default ProductListing