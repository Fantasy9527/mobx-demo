/*
 * action 类型
 */

export const TOOGLE_TAB = 'TOOGLE_TAB'

/*
 * action 创建函数
 */

export function toogleTab(current) {
  return { type: TOOGLE_TAB, current }
}
