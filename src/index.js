/** @module read-file-json */

import fsp from "@absolunet/fsp"
import fss from "@absolunet/fss"

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string>} File contents in UTF-8 or null if file could not be read
 * @example
 * import readFileJson from "read-file-json"
 * const result = await readFileJson("readme.md")
 * result === "## Hewwo OwO"
 */
export default async file => {
  const exists = await fsp.pathExists(file)
  if (!exists) {
    return null
  }
  const stat = await fsp.stat(file)
  if (!stat.isFile()) {
    return null
  }
  const text = await fsp.readFile(file, "utf8")
  return text
}

/**
 * @function
 * @param {string} file Path to a file
 * @returns {string} File contents in UTF-8 or null if file could not be read
 * @example
 * import {readFileJsonSync} from "read-file-json"
 * const result = readFileJsonSync("readme.md")
 * result === "## Hewwo OwO"
 */
export const readFileJsonSync = file => {
  const exists = fss.pathExists(file)
  if (!exists) {
    return null
  }
  const stat = fss.stat(file)
  if (!stat.isFile()) {
    return null
  }
  const text = fss.readFile(file, "utf8")
  return text
}