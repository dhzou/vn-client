import axios from 'axios';
axios.defaults.baseURL = 'http://apitry.personalhealth.com.cn'
export function ipInfo() {
  return axios.get('http://ip-api.com/json');
}
export function query ({codes, lang = 'en'}) {
  return axios.get(`/uc/api/iatadatabase/query?codes=${codes}&lang=${lang}`)
}

export const login = (params)=> {
  return axios.post('/uc/api/userAdmin/login',params)
}

export const search = (params)=>{
  return axios.get('/uc/api/dataResult/getTestUserResult',{params:params})
}

export const authInfo = (params) =>{
  return axios.get('http://api.personalhealth.com.cn/wxSigns/wx/Oauth',{params:params});
}

export const userInfo = params => {
  return axios.get("/uc/api/testUser/getTestUser", { params: params });
};

export const  register = params =>{
  return axios.post("/uc/api/user/register",  params );
}

export const getUsers = (params) =>{
  return axios.get('/uc/api/testUser/list',{params:params});
}
export const insertUser = (params)=>{
  return axios.post("/uc/api/testUser/testUser",params);
}

export const getDetail =(params) =>{
  console.log('params',JSON.stringify(params))
  return axios.get("/uc/api/dataResult/getIdea",{params:params});
}