import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ProductComponent.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <>

            <div className="container">
                <div className="row">
                    {
                        products.map((product) =>
                            <div className="col-md-3" key={product.id}>
                                <section className="img1" >
                                    <Link to={`product/${product.id}`}>
                                        <img src={product.image} alt="" className='img' />
                                    </Link>
                                </section>
                                <p className='mb-0 mt-1 para'>{product.title}</p>
                                <section className="prices">
                                    <p className='mb-0'>Price: ${product.price}</p>
                                    <p className='mb-0'>Rating:{product.rating.rate}</p>
                                </section>

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )



}

export default ProductComponent