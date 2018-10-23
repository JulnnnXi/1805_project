// 定义初始状态管理器
const data = (state = { // 初始状态值
  furniturebannerlist: [],
  prolist: [],
  furniturelist: []

},action) => {
  const { type, data} = action
  switch (type) {
    case 'CHANGE_FURNITUREBANNER':
    return {...state, furniturebannerlist: data }
    case 'CHANGE_FURNITURELIST':
    return {...state, furniturelist: data }
    default:
    return state
  }
}

export default data;