const action = {
  getbannerlist: (dispatch) => {
    // return new Promise((resolve, reject) => {
      fetch('/jjsj/v2/page?pageId=1&tabId=10005&_=1540180686630').then(res => res.json()).then(data => {

          dispatch({
            type: 'CHANGE_FURNITUREBANNER',
            data: data.data.modules
          })
          // resolve(data.data)
      }).catch(err => console.log(err))
          // reject()
    // })
  },
  getprolist: (dispatch) => {
  }
}

export default action