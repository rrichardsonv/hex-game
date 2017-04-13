import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Canvas from './Canvas'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <div className='container'>
          <Canvas />
        </div>
      </Provider>
    )
  }
})

render(<App />, document.getElementById('app'))
