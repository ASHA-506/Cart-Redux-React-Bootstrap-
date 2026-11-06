import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { MdStarPurple500 } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function View() {

    const {id} =useParams()
    console.log(id);

    const base_url = `https://dummyjson.com/products/${id}`
    
    const dispatch =useDispatch()
    const userWishlist = useSelector((state)=>state.wishlistReducer)
    console.log(userWishlist);
    const userCart = useSelector((state)=>state.cartReducer)
    console.log(userCart);
    

    
    const [product,setProduct] = useState({})
    
    const getProduct=async()=>{
        try {
           const res = await fetch(base_url)
           const data = await res.json()
           console.log(data);
        setProduct(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getProduct()
    },[])
 
const handleWishlist=()=>{
const existingProduct = userWishlist.find(item=>item.id==product.id)
if(existingProduct){
  alert('Product already exists in this list')
}else{
 dispatch(addToWishlist(product))
 alert("Product added to wishlist")
}
  
}
const handleCart=()=>{
 dispatch(addToCart(product))
 alert("Product added to Cart")


}


  return (
    <Container>
        <Row className='my-3'>
            <Col className='mx-1 my-4'>
            <Card style={{ width: '100%' }}>
      <Card.Img style={{height:'500px'}} variant="top" src={product.images} />
      <Card.Body>
 <Stack direction="horizontal" gap={3} className='justify-content-between mx-5 my-3'>
      <Button onClick={handleWishlist} className="p-2 btn" variant='danger'>ADD TO WISHLIST</Button>
      <Button  onClick={handleCart} className="p-2 btn" variant='success' >ADD TO CART</Button>
    </Stack>      </Card.Body>
    </Card>
            
            </Col>

            <Col className='mx-1 d-flex align-items-center '>
            <Card style={{ width: '100%' }} className='px-3 py-3'>
      <Card.Body>
        <Card.Title className='my-2'><h1>{product.title}</h1></Card.Title>
        <Card.Subtitle className="mb-2 text-danger"><h2> $ {product.price}</h2></Card.Subtitle>
        <h3>Brand:{product.brand}</h3>
        <h3>Category:{product.category}</h3>
        <Card.Text>
       <h6><span className='text-primary'> Description:</span>{product.description}</h6>       
        </Card.Text>
        <Card.Text>Rating : {product.rating}< MdStarPurple500 /></Card.Text>

      </Card.Body>
    </Card>

    
    </Col>
        </Row>
 </Container>
  )
}

export default View