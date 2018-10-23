import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router-dom'

class Com extends Component {
componentDidMount () {
  this.props.getdata()
}
  render () {
    
    // console.log( this.props.furniturebannerlist[0])
    // console.log(this.props.furniturebannerlist[1])
    // console.log(this.props.furniturebannerlist[2])
    // console.log(this.props.furniturebannerlist[3])
    // console.log(this.props.furniturebannerlist[4])
    // console.log(this.props.furniturebannerlist[5])
    // console.log(this.props.furniturebannerlist[6])
    if( this.props.furniturebannerlist.length <= 0){
      console.log( this.props.furniturebannerlist)
      return(<div>卡掉了三个</div>)
    }
    return (     
        <div className="fruntiure" style={{width: "100%", height: "100%"}}>{
          <div>
        <Carousel
          autoplay={ true }
          infinite
        >
          {
            
            this.props.furniturebannerlist[0].moduleContent.banners.map((item, index) => (
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
        <div className="home-decoration">
          {
            this.props.furniturebannerlist.splice(1).map((item, index) => {
              switch (item.moduleType) {
                case 401:
                return (
                  <div className="moudel" key= { index }>
                    <div className="moudle-top">
                      <h1>{ item.moduleName }</h1>
                      <p className="moduleDescription">{item.moduleDescription}</p>
                    </div>
                    <ul className="itmslide">
                      {
                        item.moduleContent.products.map((itm, idx) => {
                          return (
                            <li key= { idx }>
                               <div className="slideimg">
                                <img src= { itm.productImg } alt=""/>
                               </div>
                               <p>{itm.productTitle}</p>
                               <span>￥{itm.sellPrice}</span>
                            </li>                                                  
                          )
                        })
                      }
                     </ul>
                  </div>                    
                )
                //品牌推荐
                case 107:
                return (
                  <div className="moudel" key= { index }>
                    <div className="moudle-top">
                      <h1>{ item.moduleName }</h1>
                      <p className="moduleDescription">{item.moduleDescription}</p>
                    </div>
                    <div className="decorationImg">
                        <img src = {item.moduleContent.banners[0].bannerImgSrc} alt=""/>
                    </div>
                    <ul className="itmslide noitmslide">
                      {
                        item.moduleContent.products.map((itm, idx) => {
                          return (
                            <li key= { idx } className="itmli">
                               <div className="slideimg">
                                <img src= { itm.productImg } alt=""/>
                               </div>
                               <p className="productTitle">{itm.productTitle}</p>
                               <span>￥{itm.sellPrice}</span>
                            </li>                                                  
                          )
                        })
                      }
                     </ul>
                  </div>   
                )
                // 热门分类
                case 106:
                return (
                  <div className="moudel Storage" key= { index }>
                    <div className="moudle-top">
                      <h1>{ item.moduleName }</h1>
                    </div>
                    <ul className="itmslide noitmslide">
                      {
                        item.moduleContent.banners.map((itm, idx) => {
                          return (
                            <li key= { idx } className="itmli Storagebanners">
                               <div className="slideimg Storageimg">
                                <img src= { itm.bannerImgSrc } alt=""/>
                               </div>
                            </li>                                                  
                          )
                        })
                      }
                     </ul>
                  </div>                    
                )
                // 茶桌配给,精神析居,蜗居衣架
                case 402:
                return (
                  <div className="moudel" key= { index }>
                    <div className="moudle-top">
                      <h1>{ item.moduleName }</h1>
                    </div>
                    <ul className="spirit">
                      {
                        item.moduleContent.products.splice(0,6).map((itm, idx) => {
                          return (
                            <li key= { idx } className="spiritli">
                               <div className="spiritimg">
                                <img src= { itm.productImg } alt=""/>
                               </div>
                               <p>{itm.productName}</p>
                               <span>￥{itm.sellPrice}</span>
                            </li>                                                  
                          )
                        })
                      }
                     </ul>
                     <div className="lookall">
                       <Link to = {'/Pages/'+ item.moduleContent.id}>查看更多</Link>
                     </div>
                  </div>
                )
                default:
                break
              }
              return item.id
            })
          }
        </div>
      </div>
    )
  }
}

export default Com
