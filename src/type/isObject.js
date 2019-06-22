import isType from './isType';

/**
 * 检查值是否为Object
 * 
 * @module type/isObject
 * @since 1.1.0
 * @param {*} value 检查值
 * @returns {Object} 是否为Object
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1,2,3])
 * // => true
 * 
 * isObject(null)
 * // => false
 */
function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function')
}

export default isObject