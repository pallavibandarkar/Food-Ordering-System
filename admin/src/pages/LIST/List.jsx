import React, { useEffect, useState } from "react";
import "./List.css"
import axios from "axios";
import { toast } from "react-toastify";

export default function List(){
    let url = "http://localhost:8080"
    let [list,setList] = useState([]);

    let fetchListItems = async ()=>{
        const response = await axios.get(`${url}/api/food/list`)
        console.log(response.data)
        if(response.data.success){
            setList(response.data.data);
        }else{
            toast.error("Error")
        }
    }

    const removeItems = async (itemId)=>{
        console.log(itemId);
        const response =await axios.delete(`${url}/api/food/remove/${itemId}`)
        console.log("Delete Response "+response)
        if(response.data.success){
           const result = await fetchListItems();
           toast.success(response.data.message)
        }else{
            toast.error("Error")
        }
    }

    useEffect(()=>{
        fetchListItems();
    },[])

    return(
        <div className="list flex-col add">
            <h3>All List Items</h3>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Price</b>
                    <b>Category</b>
                    <b>Action</b>
                    
                </div>
                {list.map((item,index)=>{
                    return (
                        <div key={index} className="list-table-format">
                            <img src={`${url}/images/${item.image}`}/>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{item.category}</p>
                            <p onClick={()=>removeItems(item._id)} className="removeItems">X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}