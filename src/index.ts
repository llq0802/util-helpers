/**
 * 数据验证
 *
 * @module Validator
 * @since 1.1.0
 */
export { default as isMobile } from './isMobile';
export { default as isTelephone } from './isTelephone';
export { default as isPostcode } from './isPostcode';
export { default as isIdCard } from './isIdCard';
export { default as isEmail } from './isEmail';
export { default as isQQ } from './isQQ';
export { default as isWX } from './isWX';
export { default as isVehicle } from './isVehicle';
export { default as isBankCard } from './isBankCard';
export { default as isSocialCreditCode } from './isSocialCreditCode';
export { default as isPassword } from './isPassword';
export { default as isPassport } from './isPassport';
export { default as isChinese } from './isChinese';
export { default as isIPv4 } from './isIPv4';
export { default as isIPv6 } from './isIPv6';
export { default as isUrl } from './isUrl';
export { default as isBusinessLicense } from './isBusinessLicense';
export { default as validatePassword } from './validatePassword';
export { default as isPromiseLike } from './isPromiseLike';
export { default as isHMCard } from './isHMCard';
export { default as isTWCard } from './isTWCard';
export { default as isSwiftCode } from './isSwiftCode';
export { default as isValidNumber } from './isValidNumber';

/**
 * 数据处理
 *
 * @module Processor
 * @since 1.1.0
 */
export { default as formatMoney } from './formatMoney';
export { default as formatBankCard } from './formatBankCard';
export { default as replaceChar } from './replaceChar';
export { default as numberToChinese } from './numberToChinese';
export { default as bytesToSize } from './bytesToSize';
export { default as parseIdCard } from './parseIdCard';
export { default as blobToDataURL } from './blobToDataURL';
export { default as fileReader } from './fileReader';
export { default as dataURLToBlob } from './dataURLToBlob';
export { default as setDataURLPrefix } from './setDataURLPrefix';
export { default as normalizeString } from './normalizeString';
export { default as safeDate } from './safeDate';
export { default as formatMobile } from './formatMobile';
export { default as padZero } from './padZero';

/**
 * 数学计算，修正浮点数计算问题
 *
 * @module Math
 * @since 3.1.0
 * @see {@link https://github.com/camsong/blog/issues/9 | JavaScript 浮点数陷阱及解法}
 * @see {@link https://2zbuy.csb.app/ | JS浮点数计算测试}
 * @example
 * // 从 4.12.0 版本开始，规范了有效数值。（注意：4.12.3 对有效数值重新定义）
 * // 有效数值即能通过 Number(value) 转为数字，且不能为 NaN 。
 *
 * // 以下为有效数值：
 * // 1. 数字: 1, -1, 1e-2, 1.312, 0.1, Infinity
 * // 2. 字符串: '1', '10e2', '-1', '0.1', '', ' ', '  15', ' 15   '
 * // 4. 其他类型: null, new Date(), [], new Array(), true, false,...
 *
 * // 以下为无效数值：
 * // 1. 字符串: '1a', '-12a', '10.2.2', '10e2.1'
 * // 2. 其他类型: undefined, [], {}, Symbol(), function(){}, ()=>{}
 *
 * // 计算说明：
 * // 四则运算的第二个参数都是有默认值（乘数和除数默认1，加数和减数默认0）
 * plus(); // NaN  0个参数时，被加数转换为 Number(undefined) NaN ，NaN+0 = NaN 。其他计算方法如果没有参数一样返回 NaN 。
 * plus(0.1); // 0.1  第二个参数，加数默认为 0
 * plus(undefined, 0.1); // NaN  第一个参数被加数转换为 Number(undefined) NaN ，NaN+0 = NaN 。其他计算方法如果第一个参数为无效数值一样返回 NaN 。
 * plus(true, null); // 1  Number(true) 转换为 1 ， Number(null) 转换为 0 ， 1+0=1
 *
 * // 2. 参数中包含无效数值，返回NaN
 * plus('0.1', ' a'); // NaN
 * plus(true, {}); // NaN
 * plus(true, 0.1, Symbol()); // NaN
 *
 * // 注意：
 * // 如果第二个及后面的参数如果值为 undefined 取默认值，即乘除数取 1 ，加减法取 0 。
 * plus(0.1, undefined); // 0.1
 * plus(0.1, undefined, 0.2, undefined); // 0.3  后面的 undefined 取默认值 0
 * times(0.1, undefined, 0.2, undefined); // 0.02  后面的 undefined 取默认值 1
 *
 */
export { default as plus } from './plus';
export { default as minus } from './minus';
export { default as times } from './times';
export { default as divide } from './divide';
export { default as round } from './round';
export { default as gcd } from './gcd';
export { default as lcm } from './lcm';

/**
 * 其他
 *
 * @module Other
 * @since 4.2.0
 */
export { default as ajax } from './ajax';
export { default as calculateCursorPosition } from './calculateCursorPosition';
export { default as compressImage } from './compressImage';
export { default as download } from './download';
export { default as getImageInfo } from './getImageInfo';
export { default as loadImage } from './loadImage';
export { default as loadImageWithBlob } from './loadImageWithBlob';
export { default as loadScript } from './loadScript';
export { default as randomString } from './randomString';
export { default as strlen } from './strlen';
export { default as waitTime } from './waitTime';

/**
 * 树结构数据查询、过滤、转换等处理方法
 *
 * @module Tree
 * @since 4.14.0
 */
export { default as transformFieldNames } from './transformFieldNames';
export { default as listToTree } from './listToTree';
export { default as treeToList } from './treeToList';
export { default as filterTree } from './filterTree';
export { default as findTreeNode } from './findTreeNode';
export { default as findTreeNodes } from './findTreeNodes';
export { default as findTreeSelect } from './findTreeSelect';

/**
 * 调试相关
 *
 * @module Debug
 * @ignore
 * @since 3.6.1
 */
export { setDisableWarning } from './utils/config';

// global
import VERSION from './VERSION';
export { VERSION };
/**
 * @deprecated 即将废弃，请使用 `VERSION`
 */
export const version = BUILD_VERSION;
