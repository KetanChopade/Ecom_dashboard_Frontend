import { Button } from "react-bootstrap";
import React,{ useState} from "react";


const Addproduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    const addProduct = async () => {

      if(!name || !price || !company || !category) {
        setError(true)
        return false;
      }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-Product', {
          method:'post',
          body:JSON.stringify({name,price,category,company,userId}),
          headers:{
            'Content-Type': 'application/json',
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
          },
        });
        result = await result.json();
        if (result){
          alert("Product added")
        }
    }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-6 add-product">
            <h1 className="text-center">Add Product</h1>
            <input
              type="type"
              className="form-control"
              placeholder="Enter Product Name"
              name="name"
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
            />
            { error && !name &&  <span className="errorClass">Enter Valid name</span>}
            <input
              type="type"
              className="form-control"
              placeholder="Enter Product Price"
              name="price"
              onChange={(e)=>{setPrice(e.target.value)}}
              value={price}
            />
            { error && !price &&  <span className="errorClass">Enter Valid price</span>}
            <input
              type="type"
              className="form-control"
              placeholder="Enter Product Category"
              name="category"
              onChange={(e)=>{setCategory(e.target.value)}}
              value={category}
            />
            { error && !category &&  <span className="errorClass">Enter Valid category</span>}
            <input
              type="type"
              className="form-control"
              placeholder="Enter Product Company"
              name="company"
              onChange={(e)=>{setCompany(e.target.value)}}
              value={company}
            />
            { error && !company &&  <span className="errorClass">Enter Valid company</span>}
            <div className="row justify-content-center">
              <Button onClick={addProduct} className="col-3">Add Product</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
