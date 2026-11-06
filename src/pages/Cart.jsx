// import React, { useState } from 'react'
import { Container, Table, Stack, Badge, Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementCart,decrementCart,emptyCart, totalQuantity, totalAmount } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userCart = useSelector((state) => state.cartReducer);
  console.log(userCart);
  const totalNoOfItems = useSelector(totalQuantity)
  const totalPriceAmount = useSelector(totalAmount)
  const deleteCart=(id)=>{
    dispatch(removeFromCart(id))
    alert('Deleted From Cart')


  }

  return (
    <Container>
      {userCart?.length > 0 ? (
        <>
          <Row style={{ marginTop: "50px" }}>
            <Col>
              <div>
                <h1
                  className="text-danger my-5"
                  style={{ fontSize: "60px", textShadow: "2px 3px 4px black" }}
                >
                  Your Cart Summary
                </h1>
              </div>

              <Table responsive className="justify-content-center my-5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {userCart.map((item, index) => (
                    <tr key={item?.id || index}>
                      <td>{index + 1}</td>
                      <td>{item?.title}</td>
                      <td>
                        <img
                          className="fluid rounded"
                          style={{ width: "65px", height: "50px" }}
                          src={item?.thumbnail}
                          alt=""

                          
                        />

                      </td>
                      <td>
                        <Stack direction="horizontal" gap={2}>
                          <div onClick={()=>dispatch(incrementCart(item.id))}  className="p-1" style={{ cursor: "pointer" }}>
                            <IoMdAdd />
                          </div>
                          <div className="p-1">
                            <Badge className="mx-1 bg-danger">
                              {item?.quantity}
                            </Badge>
                          </div>
                          <div onClick={()=>dispatch(decrementCart(item.id))}  className="p-1" style={{ cursor: "pointer" }}>
                            <IoMdRemove />
                          </div>
                        </Stack>
                      </td>
                      <td className="my-4">${item?.totalPrice || 10}</td>
                      <td  onClick={()=>deleteCart(item.id)}
                        className="text-danger"
                        style={{ fontSize: "x-large", cursor: "pointer" }}
                      >
                        <   MdDelete />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                onClick={()=>dispatch(emptyCart())}
                  variant="warning"
                  className="bg-danger text-white px-4 mx-5"
                >
                  EMPTY CART
                </Button>
                <Button
                  variant="warning"
                  className="bg-info text-white px-4 me-5"
                  onClick={()=>navigate('/')}
                >
                  SHOP MORE

                </Button>
              </div>
            </Col>

            <Col sm={4} className="my-5">
              <Card
                style={{ width: "100%", fontSize: "25px" }}
                className="align-items-center fs-xlg"
              >
                <ListGroup variant="flush" className="w-100">
                  <ListGroup.Item className="my-3">
                    Total Number of Items:
                    <span className="text-success">{totalNoOfItems}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="my-3">
                    Total Amount: <span className="text-danger">${totalPriceAmount}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="my-3">
                    <Button
                      style={{ width: "100%", fontSize: "20px" }}
                      variant="success"
                      onClick={()=>navigate('/')}
                    >
                      CHECK OUT
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row>{/* Extra row kept inside fragment */}</Row>
        </>
      ) : (
        <Row style={{ marginTop: "50px" }}>
          <Card className="d-flex align-items-center text-center">
            <Card.Body>
              <Card.Title
                className="text-danger"
                style={{
                  fontSize: "50px",
                  marginTop: "50px",
                  fontWeight: "bolder",
                }}
              >
                YOUR CART IS EMPTY!!!
              </Card.Title>
              <Button
                variant="success"
                className="my-3"
                style={{ border: "2px solid yellow" }}
                 onClick={()=>navigate('/')}

              >
                ADD MORE
              </Button>
              <div>
                <Card.Img
                  style={{ width: "400px", height: "auto", maxWidth: "100%" }}
                  variant="top"
                  src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg"
                />
              </div>
            </Card.Body>
          </Card>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
