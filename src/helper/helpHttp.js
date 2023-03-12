const customFetch = (endpoint, options)=> {
    const defaultHeader={
        accept: "application/json"
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options,method = options.method || "GET";
    options.headers = options.headers
        ? {...defaultHeader,...options.headers}
        : defaultHeader;
    opcions.body = JSON.stringify(options.body) || false;
    if(!options.body) delete options.body;

        console.log(options);
        setTimeout(() =>{
            controller.abort();
        }, 1000);
    
    return fetch(endpoint, options)
        .then((response) =>
            response.ok
               ? response.json()
               : Promise.reject({
                    err: true,
                    status: response.status || "00", //Propiedades que no siempre se envian
                    statusText: response.statusText || "Ocurrio un error",
               })
        )
        .catch((err) => err);
    };

    const get= (url, options = {}) => {
        options.method='POST'
        return customFetch(url,options);
    };
    const post=() => {}
    const put = () => {}
    const del = () => {}

    return {
        get,
        post,
        put,
        del,
    }

export default helpHTTP