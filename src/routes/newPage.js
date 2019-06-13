import React from "react";
import { List, Button, NavBar, Toast, DatePicker, Flex } from "antd-mobile";
import { insertUser } from "../services/service";
import styles from "../assets/css/home.less";
import { createHashHistory } from 'history';
import { isAuthenticated, authenticateSuccess } from "../utils/session";
const Item = List.Item;
const Brief = Item.Brief;
class newPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testName: "",
      gender: "",
      date: ""
    };
  }
  componentDidMount() {}

  handleClick = () => {
    if (!this.state.testName || !this.state.gender || !this.state.date) {
      Toast.info("请填写必要信息");
    } else {
      var age = Math.floor(
        (new Date() - this.state.date) / 1000 / 60 / 60 / 24 / 365
      );
      insertUser({
        testName: this.state.testName,
        gender: this.state.gender,
        birthday: '1995-10-01',
        type: "WX",
        openid: "oTTHX5bfV2EQRtT4wtm_dh-LN844",
        age: 25
      }).then(data => {
        if(data.data.status === 0) {
          Toast.info('创建成功');
          createHashHistory().goBack();
        } else{
          Toast.info(data.data.message)
        }
      });
    }
  };
  render() {
    return (
      <div className={styles["animate-route"]} style={{ background: " white" }}>
        <NavBar mode="dark">创建用户</NavBar>
        <div style={{ textAlign: "center", marginTop: 30, fontSize: "20px" }}>
          你的姓名
        </div>
        <div>
          <input
            style={{
              display: "block",
              width: 200,
              margin: "20px auto",
              textAlign: "center",
              height: 40,
              border: 0,
              borderBottom: "1px solid #dbdbdb"
            }}
            value={this.state.testName}
            onChange={ev => this.setState({ testName: ev.target.value })}
          />
        </div>

        <div style={{ textAlign: "center", marginTop: 30, fontSize: "20px" }}>
          你的性别
        </div>
        <Flex style={{ padding: "15px", width: 100, margin: "0 auto" }}>
          <Flex.Item>
            <div
              onClick={() => {
                this.setState({ gender: "男" });
              }}
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: 40,
                lineHeight: "40px",
                textAlign: "center",
                borderRadius: "50%",
                color: this.state.gender === "男" ? "#FFFFFF" : "#000000",
                background: this.state.gender === "男" ? "#108ee9" : "#FFFFFF"
              }}
            >
              男
            </div>
          </Flex.Item>
          <Flex.Item>
            <div
              onClick={() => {
                this.setState({ gender: "女" });
              }}
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: 40,
                lineHeight: "40px",
                textAlign: "center",
                borderRadius: "50%",
                color: this.state.gender === "女" ? "#FFFFFF" : "#000000",
                background: this.state.gender === "女" ? "#108ee9" : "#FFFFFF"
              }}
            >
              女
            </div>
          </Flex.Item>
        </Flex>
        <div
          style={{
            width: 300,
            margin: "0 auto",
            textAlign: "center",
            paddingTop: 20
          }}
        >
          <DatePicker
            width="300px"
            mode="date"
            extra="请选择"
            value={this.state.date}
            onChange={date => this.setState({ date })}
          >
            <List.Item>您的生日</List.Item>
          </DatePicker>
        </div>

        <div style={{ marginTop: 16 }}>
          <Button
            style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
            type="primary"
            onClick={this.handleClick}
          >
            确定
          </Button>
        </div>
      </div>
    );
  }
}

export default newPage;
