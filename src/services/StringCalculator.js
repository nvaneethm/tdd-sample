// here we implement the main add functions
export const addString = (numbers) => {
  if (numbers === "") {
    return 0
  }
  const delimiterRegex = /,|\n/

  const nums = numbers.split(delimiterRegex)
  return nums.reduce((sum, num) => sum + parseInt(num, 10), 0)
}
