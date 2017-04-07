import React from 'react'
import { render } from 'react-dom'

const App = React.createClass({
  render () {
    return (
      <div className='container'>
        <h1>HexGame</h1>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
