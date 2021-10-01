import * as authConf from '../authconf.json';  

const tokenURL = authConf.tokenURL
const userURL = authConf.userURL
const clientID = authConf.clientID
const clientSecret = authConf.clientSecret


export async function get(request) {

    const code = request.query.get('code')

    // get accessToken
    const token = await getToken(code)

    // get user with access token
    const user = await getUser(token)
    
    //attach data to a request variable
    request.locals.user = user.login

    // redirect to home
    return {
        status: 302,
        headers: {
            location: '/'
        }
    }
}


function getToken(code) {
    return fetch(tokenURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            client_id: clientID,
            client_secret: clientSecret,
            code
        })
    }).then(r => r.json())
      .then(r => r.access_token)

}

function getUser(token) {
    return fetch(userURL, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(r => r.json())
}