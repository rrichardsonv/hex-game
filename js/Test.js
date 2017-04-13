import React from 'react'
import { Terrain } from './GameConstants'

const Test = React.createClass({
  render () {
    return (
      <div>
        <pre><code>{JSON.stringify(Terrain)}</code></pre>
      </div>
    )
  }
})

export default Test