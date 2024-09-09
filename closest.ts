export function closest(nums: number[], target: number): number {
  // Implement me
  if (nums.length < 3) {
    throw new Error("array must contain at least 3 values to sum up");
  }
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const currentSum = nums[i] + nums[j] + nums[k];
        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
          closestSum = currentSum;
        }
      }
    }
  }

  return closestSum;
}

module.exports = { closest };
