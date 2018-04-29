import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Routes from 'routes'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'
import store from './store/store.dev';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
