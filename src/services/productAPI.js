const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const URL = 'https://fakestoreapi.com/products'

function getProducts() {
    return fetch(`${URL}`, params)
            .then((response) => response.json())
            .catch((err) => {
                console.error('Ocorreu um err', err)
            })
}

export default {
    getProducts
}