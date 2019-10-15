import isType from './isType';

/**
 * 检查值是否为Number
 * 
 * @alias module:type.isNumber
 * @since 1.1.0
 * @param {*} value 检查值
 * @returns {Boolean} 是否为Number
 * @example
 * 
 * import { isNumber } from "util-helpers";
 *
 * isNumber(1)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber(NaN)
 * // => true
 *
 * isNumber('1')
 * // => false
 */
function isNumber(value) {
    return isType(value, 'Number');
}

export default isNumber