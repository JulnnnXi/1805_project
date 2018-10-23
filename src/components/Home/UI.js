import React, { Component } from 'react'
import { SearchBar, Tabs } from 'antd-mobile'
import Recommended from '@/components/Recommended'
import Furniture from '@/components/Furniture'

class Com extends Component {
  renderContent = tab =>
  (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    <p>Content of {tab.title}</p>
  </div>)
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
}
componentDidMount () {
  this.props.getdata()
}
  render () {
    const tabs = [
      { title: '推荐' },
      { title: '家具' },
      { title: '家居' },
      { title: '活动' },
    ];
    return (
      <div className = "box">
       <header className = "header">
       <img src="http://m.wowdsgn.com/static/img/titleView.png" alt="" />
      <SearchBar placeholder="搜索我的尖叫好物" maxLength={8} />
       </header>
      
        <div className="content">{
          <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={true}  swipeable = {false}
>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
             <Recommended />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              <Furniture/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              huodong
            </div>
          </Tabs>
        }
        </div>
      </div>
    )
  }
}

export default Com
