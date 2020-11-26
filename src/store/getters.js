/**
 * 计算属性,基于state的计算属性
 */
export default {
  totalCount(state) {
    return state.cartList.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  totalPrice(state) {
    return state.cartList.reduce((preTotal, food) => preTotal + food.count * food.specfoods[0].price, 0)
  }
}