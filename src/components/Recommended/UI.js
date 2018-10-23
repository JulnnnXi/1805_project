import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

class Com extends Component {
componentDidMount () {
  this.props.getdata()
}
  render () {
    return (
        <div className="content">{
          <div>
        <Carousel
          autoplay={ true }
          infinite
        >
          {this.props.bannerlist.map((item, index) => (
            <div
              key={index}
              style={{ display: 'inline-block', width: '100%', height: '2.5rem' }}
            >
              <img
                src={ item.bannerImgSrc }
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </div>
          ))}
        </Carousel>
          
        </div>
        }
        </div>
    )
  }
}

export default Com
