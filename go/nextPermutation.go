package main

import "fmt"

func nextPermutation(nums []int) []int {
	n := len(nums)
	i := n - 2
	larger := nums[n-1]
	for i >= 0 && nums[i] >= larger {
		larger = nums[i]
		i -= 1
	}
	if i == -1 {
		reverseArr(nums, i+1, n-1)
		return nums
	}
	fmt.Println(larger, i, nums)
	reverseArr(nums, i+1, n-1)
	targeIdx := i
	i += 1
	for nums[targeIdx] >= nums[i] && i < n-1 {
		i += 1
	}
	nums[targeIdx], nums[i] = nums[i], nums[targeIdx]

	fmt.Println(larger, i, nums)
	return nums
}

func reverseArr(arr []int, l, r int) {
	for l < r {
		arr[l], arr[r] = arr[r], arr[l]
		l += 1
		r -= 1
	}
}
