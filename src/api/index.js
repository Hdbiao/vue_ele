import http from '../utils/http'

// 根据经纬度获取位置详情
export const getAddress = () => http('/v2/pois/22.688104,113.8109');

// 获取食品分类
export const getFootTypes = () => http('/v2/index_entry');

// 获取商铺列表
export const getShopList = (latitude, longitude) => http('/shopping/restaurants', { latitude, longitude })

// 获取图片验证码
export const getCaptchas = () => http('/v1/captchas', {}, 'post')

// 账号密码登录
export const accountLogin = (username, password, captcha_code) => http('/v2/login', { username, password, captcha_code }, 'post')

// 获取短信验证码
export const mobileCode = (phone) => http('/v4/mobile/verify_code/send', {
  mobile: phone,
  scene: 'login',
  type: 'sms'
}, 'post')

// 短信认证登录
export const sendLogin = (code, mobile, validate_token) => http('/v1/login/app_mobile', {
  code,
  mobile,
  validate_token
}, 'post')

// 根据会话获取用户信息
export const getUser = () => http('/v1/user')

// 退出账号
export const signout = () => http('/v2/signout');

// 获取商家信息
export const getShopDetails = (shopId) => http(`/shopping/restaurant/${shopId}`)

// 获取商家评分信息
export const getShopScores = (shopId) => http(`https://elm.cangdu.org/ugc/v2/restaurants/${shopId}/ratings/scores`)

// 获取商家评价标签
export const getShopRateTags = (shopId) => http(`https://elm.cangdu.org/ugc/v2/restaurants/${shopId}/ratings/tags`)

// 获取商家的用户评论
export const getRatingList = (shopId, offset, tagName = '') => http(`https://elm.cangdu.org/ugc/v2/restaurants/${shopId}/ratings`, {
  has_content: true,
  offset,
  limit: 10,
  tag_name: tagName
})

// 获取商家食品列表
export const getShopMenu = (restaurant_id) => http('/shopping/v2/menu', { restaurant_id })

// 搜索商铺列表
// export const getSearchShop = (geohash, keyword) => http('https://elm.cangdu.org/v4/restaurants', { 'extras[]': 'restaurant_activity', geohash, keyword, 'type': 'search' })
export const getSearchShop = () => http('https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=22.688104,113.8109&keyword=%E5%95%8A%E5%95%8A&type=search')