import React, { useState } from "react";
import {
  Modal,
  NavBar,
  List,
  Icon,
  Toast
} from "antd-mobile";
import { isAuthenticated } from "../utils/session";
import { search,userInfo } from "../services/service";
import { createHashHistory } from 'history';
const Item = List.Item;
const img = [
  "https://www.wegene.com/static/dist/svg/metabolism.svg",
  "https://www.wegene.com/static/dist/svg/physical.svg",
  "https://www.wegene.com/static/dist/svg/weight_lose.svg",
  "https://www.wegene.com/static/dist/svg/response_to_exercise.svg",
  "https://www.wegene.com/static/dist/svg/sports_protection.svg"
];

class resultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      userInfo: {}
    };
  }

  componentDidMount() {
    document.title='检查结果'
    this.userId = this.props.match.params.id;
    userInfo({testUserCode:this.userId}).then(data=>{
      if (data.data.status ===0){
        this.setState({userInfo:data.data.data})
      } else {
        Toast.info(data.data.message);
      }
     
    })
    search({batchNum:'第一批次',testUserCode:this.userId}).then(data=>{
      if (data.data.status === 0) {
        this.setState({productData:data.data.data})
      } else {
         Toast.info(data.data.message)
      }
    })
  }

  goBack = () => {
    createHashHistory().goBack();
  };

  handClick = id => {
    createHashHistory().push({pathname:`user/${this.userId}/detail/${id}`});
  };
  render() {
    return (
      <div>
        {/* <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
        >
          测试结果
        </NavBar> */}
        <div style={{ marginTop: 20 }}>
          {this.state.userInfo &&(
            <div
              style={{
                background: "linear-gradient(90deg,#bfe885,#98e07e)",
                minHeight: 90,
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              <div>
                <p style={{ fontSize: "18px" }}>{this.state.userInfo.testName}</p>
                <p style={{ marginTop: 5 }}>{this.state.userInfo.gender} {this.state.userInfo.age}岁</p>
              </div>
              <div>
                <p style={{ fontSize: "18px" }}>编号：{this.state.userInfo.testUserCode}</p>
              </div>
            </div>
          ) }
          { (this.state.productData && this.state.productData.length !==0)?
            this.state.productData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  style={{
                    padding: "0 10px",
                    marginTop: 20,
                    background: "#fff"
                  }}
                >
                  <div
                  onClick={()=>{this.handClick(item.id)}}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: 40,
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img width="26" alt="" src={img[index % 5]} />
                      <p style={{ marginLeft: 10 }}>{item.name}</p>
                    </div>

                    <div  style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ marginRight: 10 }}>{item.resultType}</p>
                      <Icon type='right' />
                    </div>
                  </div>
                  <List className="my-list">
                    {item.dataProductIndices &&
                      item.dataProductIndices.map(sub => {
                        const value =
                        (sub.value ? sub.value : 0) +
                        (sub.unit ? sub.unit : "");
                        return (
                          <Item key={sub.id} extra={value}>
                            {sub.name}
                          </Item>
                        );
                      })}
                  </List>
                </div>
              );
            })
            :<div style={{textAlign:"center",height:400,lineHeight:'400px'}}>
              暂无数据
            </div>
          }
        </div>
      </div>
    );
  }
}
export default resultPage;
