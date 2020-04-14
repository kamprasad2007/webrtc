export function authHeader() {
    let user = JSON.parse(sessionStorage.getItem('session'));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}