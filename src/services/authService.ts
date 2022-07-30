import api from "./api";

interface RegisterParams{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    birth: string;
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
    }
}
export default AuthService;