export const FetchData = async (url, method, payload) => {
    const baseURL = "http://localhost:3001/api/v1/";
    const requestURL = baseURL + url;
    const {bearer, body} = payload;

    switch (method) {
        case 'POST':
            if(bearer) {
                try {
                    const response = await fetch(requestURL, {
                        method: method,
                        headers: {
                            "Content-Type": "application/json",
                            "authorization": bearer
                        }
                    });
                    return response.json();
                } catch (error) {
                   console.log('error ', error)
            }} else {
                try {
                    const response = await fetch(requestURL, {
                        method: method,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body) });
                    return response.json();
                } catch (error) {
                   console.log('error ',error)
                }} break;
        case 'PUT':
            try {
                const response = await fetch(requestURL, {
                    method: method,
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": bearer
                    },
                    body: JSON.stringify(body)
                })
                return response.json();
            } catch (error) {
               console.log('error ', error)
            } break;
        default: break;
    }}