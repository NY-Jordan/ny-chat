import React from 'react';
import axios from "axios";
const Apiclient = () => {
    const API_SERVER_URL = "http://localhost:8000"

    const axiosInstance = axios.create({
        baseURL  : API_SERVER_URL
    });


    return axiosInstance
};

export default Apiclient;