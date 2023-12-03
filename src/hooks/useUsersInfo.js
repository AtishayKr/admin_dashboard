import { useEffect, useState } from "react";
import { usersApi } from "../api/api";

function useUsersInfo() {
    const [data, setData] = useState([]);
    const uri = usersApi

    useEffect(() => {
        try {
            fetch(uri)
            .then( (res) => res.json())
            .then((res) => (setData(res)))
        } catch (error) {
            console.log(error)
        }
    }, [])  

    // console.log(data)
    return data;
}

export default useUsersInfo;