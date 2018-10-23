import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd-mobile'

class Com extends Component {
  componentDidMount () {
    this.props.getdata()
  };
  render () {
    if (this.props.houselist.length <= 0) {
      return (
        <div>长度不够</div>
      )
    }
    return (
        <div className="design">{
          <div>
          <Carousel
            autoplay={ true }
              infinite
          >
          {this.props.houselist[0].moduleContent.banners.map((item, index) =>(
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
      <div className='third'>
        <div className='originality'>
          <h1>{this.props.houselist[1].moduleName}</h1>
          <p className='title'>{this.props.houselist[1].moduleDescription}</p>
          <ul>
            { this.props.houselist[1].moduleContent.products.map((item, index) => (
                <Link to={ '/detail/' + item.productId } className='li' key={index}>
                  <img src={item.productImg} alt=""/>
                  <p className='productName'>{ item.productName }</p>
                  <p className='productPrice'>￥{ item.originalPrice }</p>
                </Link>
            ))}
          </ul>
          <Link to={ '/productGroup/'+ this.props.houselist[1].moduleContent.id } className='more'>查看全部</Link>
        </div>

        <div className='brand'>
          <h1>{this.props.houselist[2].moduleName}</h1>
          <p className='title'>{this.props.houselist[2].moduleDescription}</p>
          <div className='imgbox'><img src={this.props.houselist[2].moduleContent.banners[0].bannerImgSrc} alt="" /></div>
          <ul>
            { this.props.houselist[2].moduleContent.products.map((item, index) => (
                <Link to={ '/detail/' + item.productId } className='li' key={index}>
                  <img src={item.productImg} alt=""/>
                  <p className='productName'>{ item.productName }</p>
                  <p className='productPrice'>￥{ item.originalPrice }</p>
                </Link>
            ))}
          </ul>
        </div>

        <div className='hotkind'>
          <h1>{this.props.houselist[3].moduleName}</h1>
          <p style={ {height: '0.1rem'} }></p>
          <ul>
            { this.props.houselist[3].moduleContent.banners.map((item, index) => (
                <Link to={ '/detail/' + item.productId } className='li' key={index}>
                  <img src={item.bannerImgSrc} alt=""/>
                </Link>
            ))}
          </ul>
        </div>

        <div className='tableware'>
          <h1>{this.props.houselist[4].moduleName}</h1>
          <p className='title'>{this.props.houselist[4].moduleDescription}</p>
          <ul>
            { this.props.houselist[4].moduleContent.products.map((item, index) => (
                <Link to={ '/detail/' + item.productId } className='li' key={index}>
                  <img src={item.productImg} alt=""/>
                  <p className='productName'>{ item.productName }</p>
                  <p className='productPrice'>￥{ item.originalPrice }</p>
                </Link>
            ))}
          </ul>
          <Link to={ '/productGroup/'+ this.props.houselist[4].moduleContent.id } className='more'>查看全部</Link>
        </div>

        <div className='organ'>
          <h1>{this.props.houselist[5].moduleName}</h1>
          <p className='title'>{this.props.houselist[5].moduleDescription}</p>
          <ul>
            { this.props.houselist[5].moduleContent.products.map((item, index) => (
                <Link to={ '/detail/' + item.productId } className='li' key={index}>
                  <img src={item.productImg} alt=""/>
                  <p className='productName'>{ item.productName }</p>
                  <p className='productPrice'>￥{ item.originalPrice }</p>
                </Link>
            ))}
          </ul>
          <Link to={ '/productGroup/'+ this.props.houselist[5].moduleContent.id } className='more'>查看全部</Link>
        </div>

        <div className='bag'>
          <h1>{this.props.houselist[6].moduleName}</h1>
          <p className='title'>{this.props.houselist[6].moduleDescription}</p>
          <ul>
            { this.props.houselist[6].moduleContent.products.map((item, index) => (
                <Link to={ '/detail/' + item.productId } className='li' key={index}>
                  <img src={item.productImg} alt=""/>
                  <p className='productName'>{ item.productName }</p>
                  <p className='productPrice'>￥{ item.originalPrice }</p>
                </Link>
            ))}
          </ul>
          <Link to={ '/productGroup/'+ this.props.houselist[6].moduleContent.id } className='more'>查看全部</Link>
        </div>
      </div>
    </div>)
  }
}

export default Com
