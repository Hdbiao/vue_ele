import http from '../utils/http'

// 根据经纬度获取位置详情
export const getAddress = () => http('/v2/pois/22.688104,113.8109');

// 获取食品分类
export const getFootTypes = (data) => http('/v2/index_entry', data);

// 获取商铺列表
export const getShopList = (data) => http('/shopping/restaurants', data)