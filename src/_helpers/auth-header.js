export function authHeader() {
    // return authorization header with basic auth credentials
    // let user = JSON.parse(localStorage.getItem('session'));
    let user = JSON.parse(sessionStorage.getItem('session'));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}