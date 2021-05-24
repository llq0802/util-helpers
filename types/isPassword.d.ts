export default isPassword;
/**
 * 检测值是否符合密码强度
 * <p><strong>注意：该校验只校验是否存在不同字符(大小写字母、数字、特殊符号)，不判断长度。</strong></p>
 * <p><i>如果需要更细致的验证，请使用 <a href="#.validatePassword">validatePassword</a></i></p>
 *
 * @see 参考 {@link https://baike.baidu.com/item/ASCII#3|ASCII}
 * @static
 * @alias module:Validator.isPassword
 * @since 1.1.0
 * @requires module:Validator.validatePassword
 * @param {string} value 要检测的值
 * @param {Object} [options] 配置项
 * @param {number} [options.level=2] 密码强度 1-包含一种字符 2-包含两种字符 3-包含三种字符。（大写字母、小写字母、数字、特殊字符）
 * @param {boolean} [options.ignoreCase=false] 是否忽略大小写，为 ture 时，大小写字母视为一种字符
 * @param {string} [options.special="!@#$%^&*()-=_+[]\|{},./?<>~"] 支持的特殊字符
 * @returns {boolean} 值是否符合密码强度
 * @example
 *
 * isPassword('a12345678');
 * // => true
 *
 * isPassword('a12345678', {level: 3});
 * // => false
 *
 * isPassword('Aa12345678', {level: 3});
 * // => true
 *
 * isPassword('Aa12345678', {level: 3, ignoreCase: true});
 * // => false
 *
 * isPassword('_Aa12345678', {level: 3, ignoreCase: true});
 * // => true
 *
 * // 仅支持 数字、字母、特殊字符，其他字符如中文字符是校验不通过的
 * isPassword('_Aa一二三45678', {level: 3, ignoreCase: true});
 * // => false
 *
 * isPassword(' _Aa12345678', {level: 3, ignoreCase: true});
 * // => false
 */
declare function isPassword(value: string, { level, ignoreCase, special }?: {
    level?: number | undefined;
    ignoreCase?: boolean | undefined;
    special?: string | undefined;
} | undefined): boolean;
