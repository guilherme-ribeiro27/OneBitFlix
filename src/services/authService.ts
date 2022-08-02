import api from "./api";

interface RegisterParams{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    birth: string;
}
interface LoginParams{
    email: string;
    password: string;
}
const AuthService = {
    register: async(params: RegisterParams)=>{
        const res = await api.post('/auth/register', params).catch((err)=>{
            if(err.response.status === 400){
                return err.response
            }
            return err.response;
        })
        return res
    },
    login: async(params: LoginParams)=>{
        const res = await api.post('/auth/login', params).catch((err)=>{
            if(err.response.status === 400 || err.response.status === 401){
                return err.response
            }
            return err.response;
        })
        
        if(res.status ===200){
            sessionStorage.setItem('onebitflix-token', res.data.token)
        }

        return res
    },
}
export default AuthService;