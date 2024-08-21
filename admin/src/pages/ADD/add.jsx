import React, { useEffect, useState } from "react";
import "./add.css"
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

export default function Add(){
    const url = "http://localhost:8080"
    const [image,setImage] = useState(false);

    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad",
    })
   
    let onChangeHandler=(event)=>{
        setData((prevdata)=> ({...prevdata,[event.target.name]:event.target.value}))
    }

    const onSubmitHandler= async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",data.price)
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            console.log(response)
            console.log(data)
            console.log("Data saved successfully")
            setData({
                    name:"",
                    description:"",
                    price:"",
                    category:"Salad",
                })
            setImage(false)
            toast.success(response.data.message);
        }else{
            toast.error(response.data.message)
        }
    }

    return(
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-image-upload">
                    <p>Upload Image:</p>
                    <label htmlFor="image">
                        <img className="img-preview" src={image?URL.createObjectURL(image):assets.upload}/>
                    </label>
                    <br/>
                    <input type="file" id="image"onChange={(e)=>setImage(e.target.files[0])} hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <label htmlFor="pname">Product Name:</label>
                    <input  onChange={onChangeHandler} value={data.name} name="name" id="pname" placeholder="Enter Product Name" required/>
                </div>

                <div className="add-product-description flex-col">
                    <label htmlFor="description">Description:</label>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" id="description" placeholder="Write Description" rows="7"></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price">
                        <label htmlFor="product-price">Product Price</label>
                        <br/>
                        <input onChange={onChangeHandler} type="Number" value={data.price} name="price" id="product-price" placeholder="$10"/>
                    </div>
                </div>
                <button type="submit" className="add-btn">Add Product</button>
            </form>
        </div>
    )
}