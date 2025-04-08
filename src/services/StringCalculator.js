// here we implement the main add functions
export const addString = (numbers) => {
  if (numbers === "") {
    return 0
  }
  let delimiterRegex = /,|\n/

  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\n")
    const customDelimiter = numbers.substring(2, newlineIndex)

    const escapedDelimiter = customDelimiter.replace(
      /[-\/\\^$*+?.()|[\]{}]/g,
      "\\$&"
    )
    delimiterRegex = new RegExp(escapedDelimiter + "|\n")

    numbers = numbers.substring(newlineIndex + 1)
  }

  const nums = numbers.split(delimiterRegex)
  return nums.reduce((sum, num) => sum + parseInt(num, 10), 0)
}
