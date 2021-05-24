export default isIPv4;
/**
 * 检测值是否为ipv4
 *
 * @static
 * @alias module:Validator.isIPv4
 * @since 1.1.0
 * @param {string} value 要检测的值
 * @returns {boolean} 值是否为ipv4
 * @example
 *
 * isIPv4('192.168.1.1');
 * // => true
 *
 * isIPv4('255.255.255.255');
 * // => true
 *
 * isIPv4('256.256.256.256');
 * // => false
 *
 * isIPv4('0.0');
 * // => false
 *
 */
declare function isIPv4(value: string): boolean;
