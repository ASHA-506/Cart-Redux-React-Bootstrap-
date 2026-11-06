import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';



function Wishlist() {
   const navigate = useNavigate() 
   const userWishlist = useSelector(state=>state.wishlistReducer)
       const userCart = useSelector((state)=>state.cartReducer)
       console.log(userCart);
   
    console.log(userWishlist);
    const dispatch = useDispatch()
   const deleteFromWishlist = (id)=>{
        dispatch(removeFromWishlist(id))
        alert("Deleted")    
   }

   const handleCart=(product,id)=>{
    dispatch(addToCart(product))
    alert("Product added to Cart")
        dispatch(removeFromWishlist(id))

   }
   

  return (
    <Container>

      <h1 className='text-danger my-3 mx-2'>Your WishList <FaHeart/></h1>

{

userWishlist.length>0?       
<Row className=' mx-2'>
       {userWishlist.map(item=>(
                <Col key={item.id}  md={4} sm={12} className='mb-4'  >

         <Card style={{ width: '100%'}}>
      <Card.Img variant="top" src={item.images} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
         <Stack direction="horizontal" gap={3} className='justify-content-end' >
      <Button onClick={()=>deleteFromWishlist(item.id)} id='btn' className="p-2 text-danger bg-white "> < MdOutlinePlaylistRemove  style={{fontSize:'40px'}} /></Button>
      <Button  onClick={()=>handleCart(item.id)}  id='btn' className="p-2 text-success bg-white  ">< MdAddShoppingCart style={{fontSize:'40px'}} /></Button>
    </Stack>
      </Card.Body>
    </Card>
            </Col>

    ))} 
      </Row>
 :
             <Row style={{marginTop:'50px'}}>
<Card className='d-flex align-items-center'>
        <Card.Body>
           <Card.Title className='text-danger' style={{fontSize:'50px',marginTop:'50px',fontWeight:'bolder'}} >
              YOUR WISHLIST IS EMPTY!!!</Card.Title>
            <Button                   onClick={()=>navigate('/')}
  variant='warning' style={{border:'2px solid yellow'}}>ADD MORE</Button>

 <Card.Img   style={{width:'25rem',height:'20rem', margin:22}}   variant="top" src="https://static.vecteezy.com/system/resources/previews/039/650/548/non_2x/wishlist-icon-in-comic-style-like-document-cartoon-illustration-on-isolated-background-favorite-list-splash-effect-business-concept-vector.jpg" />

        </Card.Body>
      </Card>

      </Row>



}



    </Container>
  )
}

export default Wishlist 