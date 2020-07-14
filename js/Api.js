import Axios from "axios";
window.localStorage

const instance = Axios.create({
  baseURL: "http://localhost:3000/",
});

//Automatically Add token header from user's local storage
instance.interceptors.request.use(
  async (config) => {
   const token = localStorage.getItem('token');
   if(token){
     config.headers.Authorization =  token
   }
   return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance


