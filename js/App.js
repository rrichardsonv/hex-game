import React from 'react'
import { render } from 'react-dom'
import Canvas from './Canvas'
import '../public/css/normalize.css'

const App = React.createClass({
  render () {
    return (
      <div className='container'>
        <h1>HexGame</h1>
        <Canvas />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
