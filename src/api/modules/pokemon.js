import Request from "../request"
// Can import headers
// const headers = require('../headers.json')
// or
const headers = {
    "Auhorization" : "Berrer",
    "X-Client" : "dev",
    "Content-Type" : "application/json"
}
export default class Pokemon extends Request {
    constructor (axios, url) {
        super(axios, url)
    }
    
    get ({slug, params, success, fail}) {
        return this.get_request({slug, params, headers, success, fail})
    }
  
    post ({slug, form, success, fail}) {
        return this.post_request({slug, form, headers, success, fail})
    }
  
    put ({slug, form, success, fail}) {
        return this.put_request({slug, form, headers, success, fail})
    }
  
    patch ({slug, form, success, fail}) {
        return this.patch_request({slug, form, headers, success, fail})
    }
  
    delete ({slug, success, fail}) {
        return this.delete_request({slug, headers, success, fail})
    }
}