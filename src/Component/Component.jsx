import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Component(){
    const [first, setfirst] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((resp)=>{

            resp.json().then((result)=>{

                setfirst(result)

            })

        })
    },[])
    console.log(first)


    return(
        <>
        <h1 style={{textAlign:"center"}}>Shopping Cart Items</h1>
        <div className="container">
            <div className="row">
            
                {
                    first.map((imgitem)=>

                    
            
                    <div className="col-md-3 mt-2 px-2"key={imgitem.id} >
                        <div className="card" >
                        <Link to={'imgitem/'+imgitem.id}>
                            <img src={imgitem.image} alt="" className="img-fluid card-img-top" style={{height:"32rem"}}  />
                        </Link>
                            
                        </div>
                        
                    </div>
                    
                
                    )
                }
            </div>
        </div>
        </>
    )

}
export default Component