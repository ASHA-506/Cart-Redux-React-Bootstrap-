import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import { PiListHeartDuotone } from "react-icons/pi";
import { FaSearchDollar } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { selectWishlistCount } from '../redux/slices/wishlistSlice';
import { selectCartCount } from '../redux/slices/cartSlice';
import { setSearchKey } from '../redux/slices/productSearchSlice';



function Header() {
  const wishlistCount = useSelector(selectWishlistCount)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()

    const location = useLocation()
   const isProducts = location.pathname === '/'

  return (
<Navbar expand='lg' bg="primary" data-bs-theme="dark">
        <Container>
          
          <Navbar.Brand className='ms-3' href="#home" style={{fontFamily:"fangsong",fontSize:'xx-large',textShadow:'0 2px 3px black'}}>
            <img style={{width:60,height:50,marginRight:20}} src="https://www.freeiconspng.com/uploads/blue-shopping-cart-icon-4.jpg" alt="" />
            
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>E-CART</Link>  </Navbar.Brand>

          <Nav  className="justify-content-end ms-auto align-items-center">
{isProducts && (

              <Form inline>
        <Row >
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search Products"
              className=" mr-sm-2 bg-light text-black"
              onChange={(e)=>dispatch(setSearchKey(e.target.value))}
            />

          </Col>
          <Col xs="auto">
            <Button type="submit">< FaSearchDollar  style={{fontSize:'x-large'}}/></Button>
          </Col>
        </Row>
      </Form>



)}


      <Button as={Link} to="/wishlist" style={{fontFamily:"fangsong",fontSize:'x-large',textShadow:'0 2px 3px white'}}><PiListHeartDuotone /> WishList
{
  // wishlistCount>0&&
  ( <Badge className='mx-2' bg="danger">{wishlistCount}</Badge>
)

}

      </Button>

<Link to={'/cart'}><Button  style={{fontFamily:"fangsong",fontSize:'x-large',textShadow:'0 2px 3px white'}}><BsCartCheck  />  Cart
      
      {(<Badge className='mx-2' bg="danger">{cartCount}</Badge>)}

    </Button></Link>
          </Nav>
        </Container>
      </Navbar>  )
}

export default Header




    //           <Form inline>
    //     <Row >
    //       <Col xs="auto">
    //         <Form.Control
    //           type="text"
    //           placeholder="Search Products"
    //           className=" mr-sm-2 bg-light text-black"
    //         />

    //       </Col>
    //       <Col xs="auto">
    //         <Button type="submit">< FaSearchDollar  style={{fontSize:'x-large'}}/></Button>
    //       </Col>
    //     </Row>
    //   </Form>
