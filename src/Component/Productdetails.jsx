import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './Productdetails.css'

function Productdetails() {
    const {id}=useParams()
    const [product, setproduct] = useState({})
    function getproduct(){

        fetch(`https://fakestoreapi.com/products/${id}`).then((resp)=>{

            resp.json().then((result)=>{

                setproduct(result)

            })

        })

    }
    useEffect(()=>{

        console.log("product mounted")
        getproduct();
        
    },[])

    console.log("product is ", product)
    
  return (
      <>

                <div className="container">
                   
                        {
                            Object.keys(product).length ?
                                <div className="row mt-3 border p-3 mt-2">
                                    <div className="col-md-6 text-center">
                                        <img src={product.image} alt="" className='img-fluid productimage'/>
                                    </div>
                                    <div className="col-md-6 border-start p-3 mt-2">
                                        <p>Title:: {product.title}</p>
                                        <p>Category :: {product.category}</p>
                                        <p>Rate::{product.rating.rate}</p>
                                        <p>Count::{product.rating.count}</p>
                                        <section className="btn1 mb-1">  <button type='button' className='btn btn-danger text-white'>Add to Cart</button></section>
                                        <section className="btn1">  <button type='button' className='btn btn-danger text-white'>Remove to Cart</button></section>
                                      

                                    </div>
                                </div>
                                
                            :
                            <p>Loading</p>

                        }
                    
                        
                    </div>
                
    </>
  )
}

export default Productdetails