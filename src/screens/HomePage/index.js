import React, { Component } from "react";
import axios from "axios";
import { Card, Avatar, Row, Col } from "antd";
//import Icon from '@ant-design/icons';
import Icon, {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
  DeleteOutlined,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined,
  HeartFilled
} from "@ant-design/icons";
import {UserModal} from "../../components/UserModal/index";
import {CustomeIcon} from "../../components/CustomIcon";

const { Meta } = Card;
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      avatars: null,
      heart:false,
      showModal:true,
      userEdit:null
    };
  }

  componentDidMount = async () => {
    this.getUser()
  };
  getUser =()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users/")
    .then(response => {
      // handle success
      console.log("users", response.data);
      this.setState({ users: response.data });
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  }
   handleDeleteUser =async(id)=>{
   await this.setState({users: this.state.users.filter((u)=> { 
        return u.id !== id
    })});
     
  }
  handleClose = e => {
    this.setState({showModal:false})
  }
  handleShow  = async(u) => {
      console.log("u",u.name)
     await this.setState({userEdit:u})
      this.setState({showModal:true})
  }
 

  render() {
    return (
      <>
       {this.state.userEdit != null && (
         <UserModal 
         onCancel={this.handleClose}
          visible={this.state.showModal}
          onOk={this.handleCommentEdit}
          user={this.state.userEdit}
        />
      )}
          <Row justify="start" >
        {this.state.users.map((u,index) => (
          <Col style={{paddingTop:20}}  lg={{ span: 5, offset: 1 }}>
              <Card
              key={index}
                style={{ width: 300 }}
                cover={
                  <img
                  style={{ width: "100%" ,backgroundColor:"lightgray" }}
                    alt="example"
                    src={`https://avatars.dicebear.com/v2/avataaars/${u.name}.svg?options[mood][]=happy`}
                  />
                }
                actions={[
                    <CustomeIcon heart={this.state.heart} onClick={async()=>await this.setState({heart:true})}/>,
             
                  <EditOutlined key="edit"  onClick={()=>this.handleShow(u)}/>,
                  <DeleteOutlined  key="delete" onClick={()=> this.handleDeleteUser(u.id)} />
                ]}
              >
                <Meta
                  //avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  style={{ width: "100%" ,backgroundColor:"lightgray" }}

                  title={u.name}
                  description={[
                      <div>
                    <Row  >
                    <Col style={{paddingRight:15}}><MailOutlined /></Col>
                    <Col >{u.email}</Col>
                </Row>
                <Row>
                    <Col style={{paddingRight:15}}><PhoneOutlined /></Col>
                    <Col>{u.phone}</Col>
                </Row>
                <Row>
                    <Col style={{paddingRight:15}}><GlobalOutlined /></Col>
                    <Col>{u.website}</Col>
                </Row>
                </div>
                  ]}
                   style={{color:"lightgrey"}} 
                />
               
              </Card>
              </Col>
        ))}
        </Row>
        </>
    );
  }
}
