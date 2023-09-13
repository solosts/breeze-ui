import router from '../router';

/**
 * 路由跳转
 * @param url 跳转路径
 * @param params 携带参数
 */
export const toPage = (url: string, params?: any) => {
  router.push({ path: url, query: params });
};

/**
 * 返回上一级
 * @param num 返回的级数
 */
export const goBack = (num?: number) => {
  router.go(num || -1);
};