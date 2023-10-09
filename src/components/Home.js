import React from "react";
// const Home= (props) => {
//     const {data}=props
//         return(
//             <div> 
    
//                 <h1> Home Component </h1>
//                 <h4> {data.name} </h4>
//                 <h4> {data.age} </h4>
//                 <h4> {data.text} </h4>
//             </div>
//         )
//     }
    
function Home(props ){
   
    return (
        <div> 
            <div className="add-to-cart">
                 <img className="cart-img" src="https://cdn.create.vista.com/api/media/medium/259355726/stock-photo-illustration-add-to-cart-vector-icon?token=" /> 
                <h1> home component </h1>
                <div className="cart-wrapper"> 
                    <div className="image-wrapper item"> 
                        <img src="https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-czome-270x270.webp" />    
                    </div>
                    <div className="text-wrapper item"> 
                        <span> I-Phone</span>
                        <span> Price: $1000.00</span>
                    </div>
                    <div className="btn-wrapper item"> 
                        <button className="btn btn-danger"> Add to cart</button>
                    </div>
                

                </div>
            </div>
        </div>

    )
}
    export default Home; 

