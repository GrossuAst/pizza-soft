import initialData from './employees.json';

function checkResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject('Произошла ошибка')
};

export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                ok: true,
                json: () => Promise.resolve(initialData)
            };
            resolve(checkResponse(response))
        }, 1000)
    })
}