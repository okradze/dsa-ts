export const kthLargestElement = (arr: number[], k: number) => {
  return arr.sort((a, b) => b - a)[k - 1]
}