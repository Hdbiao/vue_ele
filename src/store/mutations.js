/**
 * 操作状态对象,直接更新
 */

import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOOTTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SHOP_SCORES,
  RECEIVE_SHOP_RATE_TAGS,
  RECEIVE_RATING_LIST,
  SEARCH_SHOP
} from './mutation-type'

export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_FOOTTYPES](state, { footTypes }) {
    state.footTypes = footTypes
  },
  [RECEIVE_SHOPLIST](state, { shopList }) {
    state.shopList = shopList
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },

  [RECEIVE_SHOP_INFO](state, { shopInfo }) {
    state.shopInfo = shopInfo
  },

  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      // food.count = 1;  这种方式增加的数据没有数据绑定
      Vue.set(food, 'count', 1)
      // 将food添加到cartList中
      state.cartList.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        // 将food从cartList中移除
        state.cartList.splice(state.cartList.indexOf(food), 1)

      }
    }
  },
  [CLEAR_CART](state) {
    // 清除food的count
    state.cartList.forEach(food => {
      // food.count = 0
      delete food.count
    })
    // 清除购物车的数据
    state.cartList = []
  },
  [RECEIVE_SHOP_SCORES](state, { shopScores }) {
    state.shopScores = shopScores
  },
  [RECEIVE_SHOP_RATE_TAGS](state, { shopRateTags }) {
    state.shopRateTags = shopRateTags
  },
  [RECEIVE_RATING_LIST](state, { ratingList }) {
    state.ratingList = ratingList
  },
  [SEARCH_SHOP](state, { shopList }) {
    state.searchShopList = shopList
  }
}