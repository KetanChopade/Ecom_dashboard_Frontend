import { Button } from "react-bootstrap";
import React,{ useState , useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();


    const params = useParams();

    
  useEffect(() => {
    getProductDetails();
  }, []);

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
          headers: {
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        });
        result = await result.json();
        console.warn(result); 
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
    const updateProduct = async () => {
        console.warn(name,price,category,company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
          method:'put',
          body:JSON.stringify({name,price,category,company}),
          headers:{
            'Content-Type': 'application/json',
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
          },
        });
        result = await result.json()
        navigate('/shop')
    }

  return (
    <>
    <div className="container">
    <div className="row justify-content-center my-4">
      <div className="col-6 add-product">
        <h1 className="text-center">Update Product</h1>
        <input
          type="type"
          className="form-control"
          placeholder="Enter Product Name"
          name="name"
          onChange={(e)=>{setName(e.target.value)}}
          value={name}
        />
        
        <input
          type="type"
          className="form-control"
          placeholder="Enter Product Price"
          name="price"
          onChange={(e)=>{setPrice(e.target.value)}}
          value={price}
        />
        
        <input
          type="type"
          className="form-control"
          placeholder="Enter Product Category"
          name="category"
          onChange={(e)=>{setCategory(e.target.value)}}
          value={category}
        />
        
        <input
          type="type"
          className="form-control"
          placeholder="Enter Product Company"
          name="company"
          onChange={(e)=>{setCompany(e.target.value)}}
          value={company}
        />
       
        <div className="row justify-content-center">
          <Button onClick={updateProduct} className="col-3">Update Product</Button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default UpdateProduct