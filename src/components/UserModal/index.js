import React, { useState,useEffect } from 'react';
import { Modal, Button, Input, Row, Col } from 'antd';

export const  UserModal = (props) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [website, setWebsite] = useState()


  useEffect(() => {
    setName(props.user.name)
    setEmail(props.user.email)
    setPhone(props.user.phone)
    setWebsite(props.user.website)
      return () => {
          setName("")
          setEmail("")
          setPhone("")
          setWebsite("")
      }
  }, [props.visible])
  return (
    <>
     
      <Modal   title="Basic Modal" visible={props.visible} onOk={props.onOk} onCancel={props.onCancel}>
         
      <Row style={{padding:5}} justify="space-around">
          <Col><span style={{color:"red"}}>*</span>Name:</Col>
          <Col>
              <Input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)
            }/>
          </Col>
      </Row>
      <Row style={{padding:5}} justify="space-around">
          <Col><span style={{color:"red"}}>*</span>Email:</Col>
          <Col>
          <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Col>
      </Row>
      <Row style={{padding:5}} justify="space-around">
          <Col><span style={{color:"red"}}>*</span>Phone:</Col>
          <Col>
          <Input width="100%" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </Col>
      </Row>
      <Row  style={{padding:5}} justify="space-around">
          <Col><span style={{color:"red"}}>*</span>Website:</Col>
          <Col>
          <Input placeholder="Website" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
          </Col>
      </Row>
    
     
      </Modal>
    </>
  );
};