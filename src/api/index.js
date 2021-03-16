//NOTE: Add this as a plugin or inject in the project context
import axios from 'axios'
import { api } from './base'


export default {
    // eslint-disable-next-line no-unused-vars
    install (Vue, options) {
        Vue.prototype.$api = api(axios)
    }
}