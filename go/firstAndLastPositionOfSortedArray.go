package main

func SearchRange(nums []int, target int) []int {
	i := 0
	j := len(nums) - 1

	for i <= j {
		m := i + (j-i)/2
		if nums[m] == target {
			x := m
			y := m
			for x >= 0 && nums[x] == target {
				x -= 1
			}
			for y <= len(nums)-1 && nums[y] == target {
				y += 1
			}
			x += 1
			y -= 1
			return []int{x, y}
		}
		if nums[m] > target {
			j = m - 1
		} else {
			i = m + 1
		}
	}
	return []int{-1, -1}
}
