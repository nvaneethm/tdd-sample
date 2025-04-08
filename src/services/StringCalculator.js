// here we implement the main add functions
export const addString = (numbers) => {
  if (numbers === "") {
    return 0
  }
  if (!numbers.includes(",")) {
    return parseInt(numbers, 10)
  }

  const nums = numbers.split(",")
  return nums.reduce((sum, num) => sum + parseInt(num, 10), 0)
}
