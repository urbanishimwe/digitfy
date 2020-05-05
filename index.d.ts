// Type definitions for digitfy 1.3.0
// Project: digitfy
// Definitions by: Urban <https://github.com/urbanishimwe>

export as namespace digitfy

/**
 * getInt extract non-floating numbers from this string
 * @param str string to read from
 * @returns array containing integers
 */
export function getInt(str: string): Array<number>

/**
 * getNum extract numbers from this string
 * @param str string to read from
 * @returns array containing numbers
 */
export function getNum(str: string): Array<number>

/**
 * getBin extract binaries from this string and parse them to decimal numbers
 * @param str string to read from
 * @returns array containing decimal numbers
 */
export function getBin(str: string): Array<number>

/**
 * getOct extract octals from this string and parse them to decimal numbers
 * @param str string to read from
 * @returns array containing decimal numbers
 */
export function getOct(str: string): Array<number>

/**
 * getHex extract hexadecimals from this string and parse them to decimal numbers
 * @param str string to read from
 * @returns array containing decimal numbers
 */
export function getHex(str: string): Array<number>

/**
 * getUni extract unicode code points from this string
 * @param str string to read from
 * @returns array containing unicode code points
 */
export function getUni(str: string): Array<string>

/**
 * getIntF extract non-floating numbers from this file
 * it throws error if the file is not found or
 * if it can not be read with utf8 encoding
 * @param file file to read from
 * @returns array containing integers
 */
export function getIntF(file: string): Array<number>

/**
 * getBinF extract numbers from this file
 * it throws error if the file is not found or
 * if it can not be read with utf8 encoding
 * @param file file to read from
 * @returns array containing numbers
 */
export function getNumF(file: string): Array<number>

/**
 * getBinF extract binaries from this file and parse them to decimal numbers
 * it throws error if the file is not found or
 * if it can not be read with utf8 encoding
 * @param file file to read from
 * @returns array containing decimal numbers
 */
export function getBinF(file: string): Array<number>

/**
 * getOctF extract octals from this file and parse them to decimal numbers
 * it throws error if the file is not found or
 * if it can not be read with utf8 encoding
 * @param file file to read from
 * @returns array containing decimal numbers
 */
export function getOctF(file: string): Array<number>

/**
 * getHexF extract hexadecimals from this file and parse them to decimal numbers
 * it throws error if the file is not found or
 * if it can not be read with utf8 encoding
 * @param file file to read from
 * @returns array containing decimal numbers
 */
export function getHexF(file: string): Array<number>

/**
 * getUniF extract unicode code points from this file
 * it throws error if the file is not found or
 * if it can not be read with utf8 encoding
 * @param file file to read from
 * @returns array containing unicode code points
 */
export function getUniF(file: string): Array<string>
