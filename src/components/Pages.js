import React, {Component} from 'react'
import axios from 'axios'
class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageslist: []
    }
  }
  componentWillMount () {
    let id = this.props.match.params.id
    axios.get('/jjsj/pages/productGroup/' + id +'/products').then(res => {
      // console.log(res.data.data.products)
      this.setState({
        pageslist: res.data.data.products
      })
    })
  }
 
  render () {
    console.log(this.state.pageslist)
    if(this.state.pageslist.length <= 0) {
      return(<div key="page">加载中</div>)
    }
    return (
      <div className="pagesbox">
        <ul className="pages">
          {
            this.state.pageslist.map((item, index) => {
              return(
                <li key={ index }>
                    <div className="spiritimg">
                      <img src= { item.productImg } alt=""/>
                    </div>
                    <p>{item.productName}</p>
                    <span>￥{item.sellPrice}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default Com