export default bytesToSize;
/**
 * 字节转换存储单位，保留2位小数点
 *
 * @static
 * @alias module:Processor.bytesToSize
 * @since 3.8.0
 * @param {number} bytes 字节大小
 * @returns {string} 存储单位值
 * @example
 *
 * bytesToSize(0);
 * => 0 B
 *
 * bytesToSize(1024);
 * => 1 KB
 *
 * bytesToSize(3.213243*1024*1024);
 * => 3.21 MB
 *
 * bytesToSize(1024*1024*1024);
 * => 1 GB
 */
declare function bytesToSize(bytes: number): string;
