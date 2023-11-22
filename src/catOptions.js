export const catOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY}
}

export const catOptionsDelete = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY}
}