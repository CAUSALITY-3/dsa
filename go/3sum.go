package main

import (
	// "fmt"
	"fmt"
	"sort"
	"strconv"
)

// func threeSum(nums []int) [][]int {
// 	sort.Ints(nums)

// 	i := 0
// 	j := len(nums) - 1
// 	k := i + 1

// 	var result [][]int
// 	seen := make(map[string]bool)
// 	for i < k && k < j {
// 		fmt.Println(nums, i, j, k, nums[i], nums[j], nums[k])
// 		sum := nums[i] + nums[j] + nums[k]
// 		if sum == 0 {
// 			sumStr := strconv.Itoa(nums[i]) + strconv.Itoa(nums[k]) + strconv.Itoa(nums[j])
// 			// fmt.Println(sumStr)
// 			if _, ok := seen[sumStr]; !ok {
// 				seen[sumStr] = true
// 				result = append(result, []int{nums[i], nums[k], nums[j]})
// 			}
// 			if k+1 == j {
// 				i += 1
// 				k = i + 1
// 				j = len(nums) - 1
// 				// j = len(nums) - 1
// 			} else {
// 				k = k + 1
// 			}

// 		} else if sum < 0 {
// 			if k+1 == j {
// 				i += 1
// 				k = i + 1
// 				j = len(nums) - 1
// 			} else {
// 				k = k + 1
// 			}
// 		} else {
// 			if k+1 == j {
// 				i += 1
// 				k = i + 1
// 				j = len(nums) - 1
// 			} else {
// 				j = j - 1
// 			}
// 		}
// 	}
// 	return result
// }

// func incre(nums []int, k int) int {
// 	x := 1

// 	// fmt.Println("qwewtr", nums[k] == nums[k+x] && k+x < j)
// 	for k+x < len(nums) && nums[k] == nums[k+x] {
// 		// fmt.Println("nums, i, j, k, nums[i], nums[j], nums[k]")
// 		k += x
// 		x += 1
// 	}
// 	// fmt.Println("k", k)
// 	return k
// }

func threeSum(nums []int) [][]int {
	sort.Ints(nums)

	i := 0
	j := len(nums) - 1
	k := i + 1

	var result [][]int
	seen := make(map[string]bool)
	for i < k && k < j {
		sum := nums[i] + nums[j] + nums[k]
		fmt.Println(nums, i, j, k, nums[i], nums[j], nums[k])
		if sum == 0 {
			sumStr := strconv.Itoa(nums[i]) + strconv.Itoa(nums[k]) + strconv.Itoa(nums[j])
			// fmt.Println(sumStr)
			if _, ok := seen[sumStr]; !ok {
				seen[sumStr] = true
				result = append(result, []int{nums[i], nums[k], nums[j]})
			}
			if k+1 == j {
				i = incre(nums, i)
				k = i + 1
				j = len(nums) - 1
			} else {
				k = k + 1
			}

		} else if sum < 0 {
			// if k+1 < j {
			// 	k = k + 1
			// } else if i+1 < k {
			// 	i += 1
			// 	k = i + 1
			// 	j = len(nums) - 1
			// } else {
			// 	return result
			// }
			if k+1 == j {
				i = incre(nums, i)
				k = i + 1
				j = len(nums) - 1
			} else {
				k = k + 1
			}
		} else {
			if k+1 == j {
				i += 1
				k = i + 1
				j = len(nums) - 1
			} else {
				j = decre(nums, j, k)
			}
			// j -= 1
			// i += 1
			// k = i + 1
		}
	}
	return result
}

func incre(nums []int, k int) int {
	x := 1

	// fmt.Println("qwewtr", nums[k] == nums[k+x] && k+x < j)
	for k+x < len(nums) && nums[k] == nums[k+x] {
		// fmt.Println("nums, i, j, k, nums[i], nums[j], nums[k]")
		k += x
		x += 1
	}
	// fmt.Println("k", k)
	return k
}

func decre(nums []int, j, k int) int {
	x := 1

	// fmt.Println("qwewtr", nums[k] == nums[k+x] && k+x < j)
	for j-x > k && nums[j] == nums[j-x] {
		// fmt.Println("nums, i, j, k, nums[i], nums[j], nums[k]")
		j -= x
		x += 1
	}
	// fmt.Println("k", k)
	return j
}
