/**
 * 异步管理状态,通过mutations间接更新
 */

import {
  getAddress,
  getFootTypes,
  getShopList,
  getUser,
  signout,
  getShopDetails,
  getShopScores,
  getShopRateTags,
  getRatingList,
  getSearchShop
} from '../api/index'
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
  // 异步获取地址
  async getAddress({ commit, state }) {
    // 发起异步请求获取数据
    const geohash = state.latitude + ',' + state.longitude
    console.log(geohash);
    const address = await getAddress()
    // 提交mutation，更新state
    commit(RECEIVE_ADDRESS, { address })
    console.log(state);
  },
  // 异步获取食品分类列表
  async getFootTypes({ commit }) {
    const footTypes = await getFootTypes()
    // 提交mutation，更新state
    commit(RECEIVE_FOOTTYPES, { footTypes })
  },
  // 异步获取商家列表
  async getShopList({ commit, state }) {
    const { latitude, longitude } = state
    const shopList = await getShopList(latitude, longitude)
    // 提交mutation，更新state
    commit(RECEIVE_SHOPLIST, { shopList })
  },
  // 同步记录用户信息
  recordUserInfo({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  // 异步获取用户信息
  async getUserInfo({ commit }) {
    const userInfo = await getUser()
    if (userInfo.user_id) {
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },
  // 异步退出登录
  async logout({ commit }) {
    const { status } = await signout()
    if (status === 1) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo({ commit }, shopId) {
    const shopInfo = await getShopDetails(shopId)
    commit(RECEIVE_SHOP_INFO, { shopInfo })
  },
  // 异步获取商家评分信息
  async getShopScores({ commit }, shopId) {
    const shopScores = await getShopScores(shopId)
    commit(RECEIVE_SHOP_SCORES, { shopScores })
  },
  // 异步获取商家评价标签
  async getShopRateTags({ commit }, shopId) {
    const shopRateTags = await getShopRateTags(shopId)
    commit(RECEIVE_SHOP_RATE_TAGS, { shopRateTags })
  },
  // 异步获取评价列表
  async getRatingList({ commit }, { shopId, offset, tagName }) {
    console.log(tagName);
    const ratingList = await getRatingList(shopId, offset, tagName)
    commit(RECEIVE_RATING_LIST, { ratingList })
  },

  // 同步更新购物车的商品数量
  updataFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },
  // 同步清空购物车
  clear({ commit }) {
    commit(CLEAR_CART)
  },


  // 异步获取搜索商铺的列表
  async getSearchShopList({ commit, state }, keyword = '') {
    const shopList = await getSearchShop(state.latitude + ',' + state.longitude, keyword)
    commit(SEARCH_SHOP, { shopList })
  }
}