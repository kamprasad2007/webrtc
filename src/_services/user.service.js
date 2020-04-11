// import config from './config';
import { authHeader } from '../_helpers';

export const config = {
    apiUrl : "https://webrtc-application-poc.herokuapp.com"
}

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            if (data) {
                localStorage.setItem('session', JSON.stringify(data));
            }

            return data;
        });
}

function logout() {
    localStorage.removeItem('session');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}