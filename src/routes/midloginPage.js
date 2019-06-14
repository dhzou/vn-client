import React from "react";
import { Toast } from "antd-mobile";
import { authenticateSuccess } from "../utils/session";
import { authInfo } from "../services/service";
import { createHashHistory } from "history";
const URI = require("urijs");
class midPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    authenticateSuccess(JSON.stringify({openid:'oTTHX5bfV2EQRtT4wtm_dh-LN844'}));
    var url = window.location.href;
    const code = this.pasreCode();
    if (code) {
      authInfo({ code: code, appid: "wxa8980d28e4a9d7a2" }).then(data => {
        if (data.openid) {
          const cookies = {
            openid: data.openid,
            unionid: data.unionid
          };
          authenticateSuccess(JSON.stringify(cookies));
          createHashHistory().replace('/');
        } else {
          Toast.info(data.errmsg);
        }
      });
    } else {
      window.location.href = this.generateGetCodeUrl(url);
    }
  }
  pasreCode() {
    var url = window.location.href;
    var path = url.split("?");
    if (path[1]) {
      var obj = {};
      var arr = path[1].split("&");
      for (var i = 0, len = arr.length; i < len; i++) {
        var nv = arr[i].split("=");
        obj[unescape(nv[0]).toLowerCase()] = unescape(nv[1]);
      }
      return obj.code;
    }
    return false;
  }
  generateGetCodeUrl(redirectURL) {
    // console.log(redirectURL);
    return new URI(
      "http://api.personalhealth.com.cn/wxSigns/wx/OauthProxy.html"
    )
      .addQuery("appid", "wxa8980d28e4a9d7a2")
      .addQuery("scope", "snsapi_userinfo")
      .addQuery("state", 700100)
      .addQuery("redirect_uri", redirectURL)
      .toString();
  }

  //  generateGetCodeUrl(redirectURL) {
  //   return new URI("https://open.weixin.qq.com/connect/oauth2/authorize")
  //       .addQuery("appid", 'wxa8980d28e4a9d7a2')
  //       .addQuery("redirect_uri", redirectURL)
  //       .addQuery("response_type", "code")
  //       .addQuery("scope", "snsapi_userinfo")
  //       .addQuery("response_type", "code")
  //       .hash("wechat_redirect")
  //       .toString();
  // };

  render() {
    return null;
  }
}

export default midPage;
