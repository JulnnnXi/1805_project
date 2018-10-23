import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      productlist: [],
    }
  }

  componentDidMount () {
    fetch('/jjsj/pages/productGroup/'+ this.props.match.params.id +'/products').then(res => res.json())
      .then(data => {
        console.log(data.data.products)
        this.setState({
          productlist: data.data.products
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className = "box">
        <div className="content">
          <img className='headerImg' src="https://img.wowdsgn.com/product-group/images/db53d002-8bbb-4138-817b-24aedba70409_2dimension_1242x828.jpg?imageslim" alt="" />
          <ul className='ulbox'>{
            this.state.productlist.map((item, index) => (
              <Link to={ '/detail/' + item.productId } className='libox' key={index}>
                <img src={item.productImg} alt=""/>
                <p className='productName'>{ item.productName }</p>
                <p className='productPrice'>￥{ item.originalPrice }</p>
              </Link>
            ))
          }</ul>
        </div>
      </div>
    )
  }
}

export default Com
