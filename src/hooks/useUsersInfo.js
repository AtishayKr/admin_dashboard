import { useEffect, useState } from "react";
import { usersApi } from "../api/api";
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../features/users/usersSlice';

function useUsersInfo() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const uri = usersApi
    console.log("useUser called")

    useEffect(() => {
        console.log("called")
        try {
            fetch(uri)
            .then( (res) => res.json())
            .then((res) => 
                dispatch(addData(res))
            )
        } catch (error) {
            console.log(error)
        }
    }, [])  

    // console.log(data)
    return data;
}

export default useUsersInfo;