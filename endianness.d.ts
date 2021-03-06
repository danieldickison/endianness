// Type definitions for endianness 8.0
// Project: https://github.com/rochars/endianness
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/endianness

/**
 * Swap the byte ordering in a buffer. The buffer is modified in place.
 * @param {!Array|!Uint8Array} bytes The bytes.
 * @param {number} offset The byte offset.
 * @param {number=} start The start index. Assumes 0.
 * @param {number=} end The end index. Assumes the buffer length.
 * @throws {Error} If the buffer length is not valid.
 */
export default function endianness(
	bytes: number[]|Uint8Array,
	offset: number,
	start?: number,
	end?: number): void;
