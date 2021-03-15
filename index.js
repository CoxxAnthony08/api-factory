import Request from './api/request'

new Request().init({
    loadingCB: (toggle) => {
      // loaders etc
    },
    logoutCB: () => {
      // Add logout here for callback
    }
  })
