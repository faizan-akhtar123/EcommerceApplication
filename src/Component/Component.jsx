import { useEffect, useState } from "react";
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
        <div className="container">
            <div className="row">
            
                {
                    first.map((imgitem,i)=>
            
                    <div className="col-md-4 mt-2 px-2" key={i}>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={imgitem.image} alt="" className="img-fluid card-img-top" style={{height:"32rem"}} />
                            
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