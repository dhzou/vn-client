import React from "react";
import { Toast } from "antd-mobile";
import { getDetail } from "../services/service";
import Star from "../components/start";
class resultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: ""
    };
  }

  componentDidMount() {
    document.title = "数据采集";
    this.productId = this.props.match.params.id;
    this.testUserId = this.props.match.params.userId;
    getDetail({
      batchNum: "第一批次",
      testUserId: this.testUserId,
      productId: this.productId
    }).then(data => {
      if (data.data.status === 0) {
        this.setState({ productData: data.data.data });
      } else {
        Toast.info(data.data.message);
      }
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            height: 64,
            lineHeight: "64px",
            background: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 500,
            borderBottom: "1px solid #EEEEEE"
          }}
        >
          <p
            style={{
              borderBottom: "5px solid #4fb1f7",
              display: "inline-block",
              margin: 0
            }}
          >
            我的检测结果
          </p>
        </div>
        <div style={{height:40,textAlign:'center',fontSize:20,marginTop:20}}>
           <Star star={4} /> 
           <p style={{textAlign:'center',paddingTop:10,paddingBottom:10,color:'#E5271C',fontSize: "14px"}}>优秀</p>
        </div>
    

        <div
          style={{
            marginBottom: 10,
            background: "#FFFFFF",
            marginTop: 20,
            padding: "0 20px 20px",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1"
          }}
        >
          <div
            style={{
              height: "auto",
              marginBottom: 20,
              padding: "20px 0 0",
              overflow: "hidden"
            }}
          >
            <h2
              style={{
                float: "left",
                margin: 0,
                fontSize: "16px",
                color: "#27374D"
              }}
            >
              我的XXX结果
            </h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 20px 30px",
                background: "#27374D",
                color: "#fff",
                borderRadius: 10,
                textAlign: "center",
                fontSize: "16px"
              }}
            >
              <p style={{ margin: "0 0 10px" }}>我的XXX</p>
              <div style={{ marginTop: 20, fontSize: 28 }}>
                <b
                  style={{
                    fontSize: 42,
                    lineHeight: "54px",
                    wordWrap: "break-word",
                    color: "#4fb1f7"
                  }}
                >
                  中等
                </b>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            padding: "0 20px",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1"
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#27374D"
            }}
          >
            根据你的结果，你该怎么办？
          </p>
          <p
            style={{
              whiteSpace: "pre-line",
              margin: "0 0 10px",
              fontSize: 16,
              lineHeight: "22px"
            }}
          >
            {this.state.productData && this.state.productData.idea}
          </p>
        </div>



        <div
          style={{
            background: "#FFFFFF",
            padding: "0 20px",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1"
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#27374D"
            }}
          >
            项目简介
          </p>
          <p
            style={{
              whiteSpace: "pre-line",
              margin: "0 0 10px",
              fontSize: 16,
              lineHeight: "22px"
            }}
          >
            {this.state.productData && this.state.productData.idea}
          </p>
        </div>
      </div>
    );
  }
}
export default resultPage;
