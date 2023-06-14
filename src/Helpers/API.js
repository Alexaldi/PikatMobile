import axios from 'axios';
const base_url = `http://192.168.0.10:5000`;
const axiosJWT = axios.create()

export const login = (nisn, password) => {
    return axios.post(`${base_url}/login`, {
        nisn,
        password
    });
}

export const register = (nisn, password, confPassword) => {
    1
    return axios.post(`${base_url}/users`, {
        nisn,
        password,
        confPassword,
    });
}


export const ShowKandidat = () => {
    return axios.get(`${base_url}/kandidat`);
}

export const IdKandidat = (id) => {
    return axios.get(`${base_url}/kandidat/${id}`)
}

export const Voting = (dataKandidat, userId) => {
    return axios.post(`${base_url}/voting`, {
        userid: userId,
        kandidatId: dataKandidat
    })
}

export const VotingById = (Id) => {
    return axios.get(`${base_url}/voting/${Id}`)
}


export const RefreshToken = (refreshtoken) => {
    console.log(refreshtoken + "AAAAAAAAAAAAAAAaaa");
    return axios.get(`${base_url}/token/${refreshtoken}`)
}

export const getUserData = (nisn, Token) => {
    return axiosJWT.get(`${base_url}/users/${nisn}`, {
        headers: {
            Authorization: `Bearer ${Token}`
        }
    });
}
