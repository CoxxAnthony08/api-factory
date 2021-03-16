import Request from "../request"

export default class Pokemon extends Request {
    constructor (axios, url) {
        super(axios, url)
    }
    
    get ({slug, params, success, fail}) {
        return this.get_request({slug, params, success, fail})
    }
  
    post ({slug, form, success, fail}) {
        return this.post_request({slug, form, success, fail})
    }
  
    put ({slug, form, success, fail}) {
        return this.put_request({slug, form, success, fail})
    }
  
    patch ({slug, form, success, fail}) {
        return this.patch_request({slug, form, success, fail})
    }
  
    delete ({slug, success, fail}) {
        return this.delete_request({slug, success, fail})
    }
}