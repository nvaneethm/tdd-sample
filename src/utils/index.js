export const extractDelimiter = (inputString) => {
  const ESCAPE_REGX = /[-\/\\^$*+?.()|[\]{}]/g
  const REPLACE_STR = "\\$&"
  const newlinePos = inputString.indexOf("\n")
  const rawDelimiter = inputString.substring(2, newlinePos)
  const escapedDelimiter = rawDelimiter.replace(ESCAPE_REGX, REPLACE_STR)
  const delimiterRegex = new RegExp(`${escapedDelimiter}|\n`)
  const numbersPart = inputString.substring(newlinePos + 1)

  return {
    delimiter: delimiterRegex,
    numbers: numbersPart,
  }
}
