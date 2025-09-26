package main

import "fmt"

// 5,1,2,3,4
func Search(nums []int, target int) int {
	i := 0
	j := len(nums) - 1
	for i <= j {
		fmt.Println(i, j)
		if i == j {
			if nums[i] == target {
				return i
			} else {
				return -1
			}
		}
		if nums[i] == target {
			return i
		}
		if nums[j] == target {
			return j
		}
		m := i + (j-i)/2
		if nums[m] == target {
			return m
		}
		fmt.Println("Mid", m, nums[m], target)
		if nums[i] < nums[j] {
			if target < nums[i] && target > nums[j] {
				return -1
			}
			if target < nums[m] {
				j = m - 1
			} else {
				i = m + 1
			}
		} else {
			if target > nums[i] {
				if target < nums[m] || target > nums[i] && nums[i] > nums[m] {
					j = m - 1
				} else {
					i = m + 1
				}
			} else {
				if target > nums[m] || target < nums[j] && nums[j] < nums[m] {
					i = m + 1
				} else {
					j = m - 1
				}
			}
		}
	}
	return -1
}
