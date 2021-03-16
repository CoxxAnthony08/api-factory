//NOTE: Add this as a plugin or inject in the project context
import { api } from './base'

export default (context, inject) => {
    inject('api', api(context.$axios))
}