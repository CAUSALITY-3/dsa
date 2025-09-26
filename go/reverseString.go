package main

func ReverseString(s []byte) {
	i := 0
	j := len(s) - 1

	for i < j {
		s[i], s[j] = s[j], s[i]
		i += 1
		j -= 1
	}
}

func nextNum(nums []int, j int) int {

	for j < len(nums) {
		if nums[j] != 0 {
			return j
		}
	}
	return -1
}
