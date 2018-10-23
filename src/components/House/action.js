const action = {
  getbannerlist: (dispatch) => {
    fetch('/jjsj/v2/page?pageId=1&tabId=10006&_=1540191813196').then(res => res.json()).then(data => {
      console.log(data.data.modules)
      // console.log(data.data.modules[0].moduleContent.banners)
      setTimeout(() => {
        dispatch({
          type: 'CHANGE_HOUSET',
          data: data.data.modules
        })
      }, 1000)
    }).catch(err => console.log(err))


  },
  getprolist: (dispatch) => {
  }
}

export default action
