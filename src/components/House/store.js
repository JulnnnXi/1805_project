// 定义初始状态管理器
const data = (state = { // 初始状态值
  houselist: [],
  prolist: []
},action) => {
  const { type, data} = action
  switch (type) {
    case 'CHANGE_HOUSET':
    return {...state, houselist: data }
    case 'CHANGE_PROLIST':
    return {...state, prolist: data }
    default:
    return state
  }
}

export default data;
