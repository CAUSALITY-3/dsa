package main

func lengthOfLongestSubstring(s string) int {
	slow := 0
	max := 0

	m := make(map[byte]int)

	for i := 0; i < len(s); i++ {
		if val, ok := m[s[i]]; ok && val >= slow {
			slow = val + 1
		}
		m[s[i]] = i
		if i-slow+1 > max {
			max = i - slow + 1
		}

	}
	return max
}
