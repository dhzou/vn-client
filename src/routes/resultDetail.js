import React from "react";
import {
  NavBar,
  Icon,
  Toast
} from "antd-mobile";
import { search,userInfo } from "../services/service";
import { createHashHistory } from 'history';


class resultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:''
    };
  }

  componentDidMount() {
    // this.userId = this.props.match.params.id;
    // userInfo({testUserCode:this.userId}).then(data=>{
    //   if (data.data.status ===0){
    //     this.setState({userInfo:data.data.data})
    //   } else {
    //     Toast.info(data.data.message);
    //   }
     
    // })
    // search({batchNum:'第一批次',testUserCode:this.userId}).then(data=>{
    //   if (data.data.status === 0) {
    //     this.setState({productData:data.data.data})
    //   } else {
    //      Toast.info(data.data.message)
    //   }
    // })
  }

  goBack = () => {
    createHashHistory().goBack();
  };

  handClick = index => {
    alert(index)
    // this.props.dispatch(routerRedux.push("/detail"));
  };
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
        >
          测试详情
        </NavBar>
        <div style={{ marginTop: 20 }}>
         
        </div>
      </div>
    );
  }
}
export default resultPage;
