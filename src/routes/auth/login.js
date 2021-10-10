import * as authConf from '../../../authconf.json';  
  
//console.log(authConf);

const loginURL = authConf.loginURL
const clientID = authConf.clientID

export async function get(request) {
    const sessionID = '1234'

    return {
        status: 302,
        headers: {
            location: `${loginURL}?client_id=${clientID}&state=${sessionID}`
        }
    }
}
