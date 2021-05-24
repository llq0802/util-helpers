export default isWeakMap;
/**
 * 检查值是否为WeakMap
 *
 * @static
 * @alias module:Type.isWeakMap
 * @since 1.1.0
 * @param {*} value 检查值
 * @returns {boolean} 是否为WeakMap
 * @example
 *
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 */
declare function isWeakMap(value: any): boolean;
