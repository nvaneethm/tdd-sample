// here we implement the main add functions
export const addString = (numbers) => {
  if (numbers === "") {
    return 0
  }

  let delimiterRegex = /,|\n/
  let sum = 0
  const negatives = []

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

  nums.forEach((token) => {
    if (token === "") return
    const num = parseInt(token, 10)

    if (num < 0) {
      negatives.push(num)
    }
    sum += num
  })

  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(", "))
  }

  return sum
}
