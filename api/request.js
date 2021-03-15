const axios = require('axios') // TODO: Should Use @nuxt/axios

const list = require('../utils/listHelper').default

var loadingCallback = null
var logoutCallback = null

var promiseArray = []
const promiseHelper = (promiseObject) => {

  if (process.server) return // We don't need to track promises in Nuxt Server side

  let existing = promiseArray.find(promiseItem => promiseItem === promiseObject)

  !existing ? promiseArray.push(promiseObject) : list.delete(promiseArray, { key: promiseObject })

  promiseArray.length > 0 ? loadingCallback(true) : loadingCallback(false)

}

const slugHelper = (url, slug) => {

  if (slug) {

    slug = String(slug)

    if (!url.endsWith('/'))
      url += '/'

    if (slug.startsWith('/'))
      slug = slug.substring(1, slug.length)

    url += slug

    if (!slug.endsWith('/'))
      url += '/'
  }

  return url
}
const paramsHelper = (url, params) => {

  // params = {key: '', value: ''}

  if (params) {

    if (!url.endsWith('/'))
      url += '/'

    url += '?'

    params.forEach(paramObj => {
      url += paramObj.key + '=' + paramObj.value + '&'
    });

    // Remove Trailing '&'
    url = url.substring(0, url.length - 1)
  }

  return url
}
const urlBuilder = (url) => { 

    return `${url}` 
}
const urlHelper = ({ url, slug, params }) => { return urlBuilder(paramsHelper(slugHelper(url, slug), params)) }

/*
  You can chain the returned promise.
  Callbacks will be called first before your chains.
*/
export default class Request {
  constructor(axios, apiUrl) {
    this.axios = axios
    this.apiUrl = apiUrl

    if (this.axios) {
      axios.interceptors.request.use(function(config) {

        return config;

      },function (error) {    
        return Promise.reject(error);
      });

      this.axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest)
            logoutCallback()
          throw err;
        })
      })
    }
  }

  init({ loadingCB, logoutCB }) {

    loadingCallback = loadingCB
    logoutCallback = logoutCB
  }

  get_request({ slug, params, success, fail }) {

    let furl = urlHelper({ url: this.apiUrl, slug, params })

    let promise = this.axios.get(furl)
      .then(function ({ data }) {
        if (typeof success === 'function') success(data)
      })
      .catch(function (error) {
        if (typeof fail === 'function') fail(error)
      })

    return promise
  }

  post_request({ slug, form, params, success, fail }) {

    let furl = urlHelper({ url: this.apiUrl, slug, params: params })

    let promise = this.axios.post(furl, form)
      .then(function ({ data }) {
        promiseHelper(promise);

        if (typeof success === 'function') success(data)
      })
      .catch(function (error) {
        promiseHelper(promise);

        if (typeof fail === 'function') fail(error)
      })

    promiseHelper(promise)

    return promise

  }

  put_request({ slug, form, success, fail }) {

    let furl = urlHelper({ url: this.apiUrl, slug })

    let promise = this.axios.put(furl, form)
      .then(function ({ data }) {
        promiseHelper(promise);

        if (typeof success === 'function') success(data)
      })
      .catch(function (error) {
        promiseHelper(promise);

        if (typeof fail === 'function') fail(error)
      })

    promiseHelper(promise)

    return promise

  }

  patch_request({ slug, form, success, fail }) {

    let furl = urlHelper({ url: this.apiUrl, slug })

    let promise = this.axios.patch(furl, form)
      .then(function ({ data }) {
        promiseHelper(promise);

        if (typeof success === 'function') success(data)
      })
      .catch(function (error) {
        promiseHelper(promise);

        if (typeof fail === 'function') fail(error)
      })

    promiseHelper(promise)

    return promise

  }

  delete_request({ slug, success, fail }) {

    let furl = urlHelper({ url: this.apiUrl, slug })

    let promise = this.axios.delete(furl)
      .then(function ({ data }) {
        promiseHelper(promise);

        if (typeof success === 'function') success(data)
      })
      .catch(function (error) {
        promiseHelper(promise);

        if (typeof fail === 'function') fail(error)
      })

    promiseHelper(promise)

    return promise

  }
}