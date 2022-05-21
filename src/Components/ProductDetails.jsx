import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProducts } from '../redux/action/productsActions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Now we need to access the selected products now to access it we are going to use useSelector.
// The state.product must be having a reducer from that 

function ProductDetails() {
    const product = useSelector((state) => state.product)
    console.log(product)
    const { productID } = useParams();
    const dispatch = useDispatch();

    const fetchdata1 = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((err) => {
            console.log("ERR is", err)
        })
        dispatch(selectedProducts(response.data))
        // now we can actually come here and dispatch our action which is the remove selected product

    }
    console.log("my product-detail is", product)

    useEffect(() => {
        if (productID && productID !== "")
            fetchdata1();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productID])

    return (
        <>

            {
                Object.keys(product).length ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col">

                                <img src={product.image} alt={product.title} className='img-fluid' />

                            </div>

                            <div className="col-md-6">
                                <section className="title">
                                    <p>{product.title}</p>
                                    <p className=''>${product.price}</p>
                                    <p className='bg'>{product.category}</p>
                                    <p >{product.description}</p>
                                    <button className='btn btn-danger'>ADD TO CART</button>
                                </section>

                            </div>
                        </div>
                    </div> : <p>Loading....</p>
            }


        </>
    )
}

export default ProductDetails