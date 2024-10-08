import { useDispatch } from "react-redux";
import { authenticate } from "../redux/AdminSclice";
import { useState } from "react";


let server_url = import.meta.env.VITE_DOCCURES_SERVER_URL;


function useAuth() {
    let dispatch = useDispatch();
    let [data, setData] = useState();
    const authStatus = async () => {
        try {
            let response = await fetch(`${server_url}/admin/auth`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            if(!response.ok){
                console.log('Error in admin response');
                throw new Error('Error', response.status);
            }
            console.log(response);
            setData(await response.json());
            
        } catch (error) {
            
        }
    }
    return data;
}

export default useAuth;