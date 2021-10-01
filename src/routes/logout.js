export async function get(request) {
    //unset the user cookie
    request.locals.user = null

    return {
        status: 302,
        headers: {
            location: '/'
        }
    }
}