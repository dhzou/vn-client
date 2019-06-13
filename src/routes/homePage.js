import React from "react";
import { List, Button, NavBar, Toast } from "antd-mobile";
import { getUsers } from "../services/service";
import styles from "../assets/css/home.less";
import { isAuthenticated, authenticateSuccess } from "../utils/session";
import { createHashHistory } from "history";
const Item = List.Item;
const Brief = Item.Brief;
class homePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    // const cookies = isAuthenticated();
    // if (cookies) {
    //   const userInfo = JSON.parse(cookies);
    //   this.setState({
    //     userName: userInfo.username,
    //     password: userInfo.password
    //   });
    // }

    getUsers({ openid: "oTTHX5bfV2EQRtT4wtm_dh-LN844" }).then(data => {
      if (data.data.status === 0) {
        this.setState({ users: data.data.data.content });
      } else {
        Toast.info(data.data.message);
      }
    });
  }

  handleItemClick = item => {
    createHashHistory().push({pathname:`/result/${item.id}`});
  };

  handleClick = () => {
    createHashHistory().push("/new");
  };
  render() {
    return (
      <div className={styles["animate-route"]}>
        <NavBar mode="dark">用户列表</NavBar>
        <div style={{ marginTop: 16 }} className="my-list">
          <List>
            {this.state.users.length === 0 && (
              <div
                style={{
                  height: 400,
                  lineHeight: "400px",
                  textAlign: "center"
                }}
              >
                暂无用户列表
              </div>
            )}
            {this.state.users &&
              this.state.users.map(item => {
                return (
                  <Item
                    key={item.id}
                    arrow="horizontal"
                    onClick={() => this.handleItemClick(item)}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0"
                      }}
                    >
                      <img
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        alt=""
                        src="https://img.soulapp.cn/heads/1559898451854.png"
                      />
                      <div style={{ marginLeft: 20 }}>
                        <p style={{ fontSize: 14, color: "#cccccc" }}>
                          姓名:{item.testName}
                        </p>
                        <p
                          style={{
                            padding: "5px 0",
                            fontSize: 14,
                            color: "rgba(16,16,16,1)",
                            lineHeight: "20px"
                          }}
                        >
                          年龄:{item.age}
                        </p>
                      </div>
                      <div style={{ marginLeft: 30 }}>
                        <p style={{ fontSize: 14, color: "#cccccc" }}>
                          姓别:{item.gender}
                        </p>
                        <p
                          style={{
                            padding: "5px 0",
                            fontSize: 14,
                            color: "rgba(16,16,16,1)",
                            lineHeight: "20px"
                          }}
                        >
                          编号:{item.testUserCode}
                        </p>
                      </div>
                    </div>
                  </Item>
                );
              })}
          </List>
          <Button
            style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
            type="primary"
            onClick={this.handleClick}
          >
            创建用户
          </Button>
        </div>
      </div>
    );
  }
}

export default homePage;
