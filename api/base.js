import Test from './modules/test'
import Sample from './modules/sample'

import urls from './urls'

export const api = (axios) => ({
    Test: new Test(axios, urls.test),
    Sample: new Sample(axios, urls.sample),
})