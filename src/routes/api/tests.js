const url = 'http://localhost:8080/tests'

export async function get(request) {
    const r = await fetch(url, {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await r.json();
    //console.log(data);

    return {
        body: {
            data
        }
    }
}

export async function post(request) {
    const r = await fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
        },
        body: request.body
    });

    const data = await r.json();
    //console.log(data);

    return {
        body: {
            data
        }
    }
}
