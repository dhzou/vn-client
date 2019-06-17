import React from "react";
import {
  Toast
} from "antd-mobile";
import { getDetail } from "../services/service";

class resultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData:''
    };
  }

  componentDidMount() {
    console.log(111)
    this.productId = this.props.match.params.id;
    this.testUserId = this.props.match.params.userId;
    getDetail({batchNum:'第一批次',testUserId:this.testUserId,productId:this.productId}).then(data=>{
    if (data.data.status === 0) {
        this.setState({productData:data.data.data})
      } else {
         Toast.info(data.data.message)
      }
    });
  }

  render() {
    return (
      <div>
           <div style={{textAlign:'center',    height: 64,
    lineHeight: '64px',
    background: '#FFFFFF',
    borderBottom: '1px solid #EEEEEE'}}>我的检测结果</div>
           <div>
             <p>您的静息代谢率比87%的人高</p>
             <p>正常</p>
           </div>
           <div>
             <p>根据你的结果，你该怎么办？</p>
             <p>{this.state.productData&&this.state.productData.idea}</p>
           </div>
      </div>
    );
  }
}
export default resultPage;
