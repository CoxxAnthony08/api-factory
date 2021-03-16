import Pokemon from './modules/pokemon'
import Berries from './modules/berries'

import urls from './urls'

export const api = (axios) => ({
    Pokemon: new Pokemon(axios, urls.Pokemon),
    Berries: new Berries(axios, urls.Berries),
})