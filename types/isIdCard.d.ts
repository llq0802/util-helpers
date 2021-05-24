export default isIdCard;
/**
 * 检测值是否为身份证号
 *
 * @static
 * @alias module:Validator.isIdCard
 * @since 1.1.0
 * @param {string} value 要检测的值
 * @returns {boolean} 值是否为身份证号
 * @example
 *
 * isIdCard('320311770706001');
 * // => true
 *
 * isIdCard('130701199310302288');
 * // => true
 *
 * isIdCard('130701199310');
 * // => false
 *
 */
declare function isIdCard(value: string): boolean;
