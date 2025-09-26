package main

import (
	"fmt"
)

func maxArea(height []int) int {
	i := 0
	j := len(height) - 1
	max := 0
	for i < j {
		area := (j - i) * findMin(height[j], height[i])
		fmt.Println("i:", i, "j:", j, "height[i]:", height[i], "height[j]:", height[j], "area:", area)
		if area > max {
			max = area
		}
		if height[i] > height[j] {
			j = j - 1
		} else {
			i = i + 1
		}
	}
	return max
}

func findMin(x, y int) int {
	if x < y {
		return x
	}
	return y
}
