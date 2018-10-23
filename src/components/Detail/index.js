import React, { Component } from 'react'

class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div className = "box">
        <header className = "header"></header>
        <div className="content">消息</div>
      </div>
    )
  }
}

export default Com
