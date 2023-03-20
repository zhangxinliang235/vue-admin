import service from "@/utils/request";

/**
 * 登录
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export function login(data){
  return service.request({
    url: '/login',
    method: 'POST',
    data
  })
};

/**
 * 获取验证码
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getSms(data){
  return service.request({
    url: '/getSms',
    method: 'POST',
    data
  })
};