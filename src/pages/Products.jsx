import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Products() {

    let base_url = "https://dummyjson.com/products"
    
    const [products,setProducts] = useState([])
    const { searchKey } = useSelector((state)=>state.productSearchReducer)

    const getProducts=async()=>{
        try {
            const response = await fetch(base_url)
            const data = await response.json()
            console.log(data);
            setProducts(data)

            
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getProducts()
    },[])



  return (
    <Container className='justify-content-center'>
        <h2 className='text-center my-4 fw-bold text-secondary'>Featured Products !!!</h2>
<Row>
    {products?.products?.filter((item)=>item?.title?.toLowerCase().includes(searchKey.toLowerCase().trim()))
    
    
    
    .map(item=>(
    
           <Col className='my-3' key={item.id} xs={12} md={4} sm={6} lg={4}>
<Card style={{ width: '100' }}>
      <Card.Img variant="top" src={item.images} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Link to={`/products/${item.id}`} ><Button variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>

          
        </Col>

    
  ))   }
</Row>

    </Container>
  )
}

export default Products