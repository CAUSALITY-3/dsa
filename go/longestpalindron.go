package main

import "fmt"

// import "fmt"

func longestPalindrome(s string) string {
	mp := make(map[string]int)
	recursive(s, &mp)
	max := 0
	var val string
	for key, value := range mp {
		fmt.Println("Key:", key, "Value:", value)
		if value == 1 && max < len(key) {
			max = len(key)
			val = key
		}
	}
	return val
}

func recursive(s string, mp *map[string]int) int {
	// fmt.Println("Checking:", s)
	// if len(s) == 0 {
	// 	return 1
	// }
	if len(s) == 1 {
		return 1
	}
	if val, ok := (*mp)[s]; ok {
		return val
	}
	// fmt.Println("Checking:2", string(s[0]), int(s[len(s)-1]))
	if string(s[0]) == string(s[len(s)-1]) {

		if len(s) == 2 {
			// fmt.Println("Found:", s)
			(*mp)[s] = 1
			// fmt.Println("ass:", s)
			return 1
		} else {
			// fmt.Println("Found:asd", s)
			(*mp)[s] = 1 * recursive(s[1:len(s)-1], mp)
			recursive(s[1:], mp)
			recursive(s[0:len(s)-1], mp)
			// fmt.Println("Foundsdas:", s)
			return (*mp)[s]
		}
	} else {
		// fmt.Println("Found:asdasdsadsfdf", s)
		if len(s) == 2 {
			// fmt.Println("dffgrg:", s)
			(*mp)[s] = 0
			// fmt.Println("rthrh:", s)
			return 0
		}
		// fmt.Println("kyughj:", s)
		(*mp)[s] = 0
		// fmt.Println(s[0:len(s)-1], s[1:])
		recursive(s[0:len(s)-1], mp)
		recursive(s[1:], mp)
		return 0
	}
}

func longestPalindrome2(s string) string {
	if len(s) < 2 {
		return s
	}

	start, end := 0, 0

	for i := 0; i < len(s); i++ {
		len1 := expandAroundCenter(s, i, i)   // Odd length
		len2 := expandAroundCenter(s, i, i+1) // Even length
		maxLen := max(len1, len2)

		if maxLen > end-start {
			start = i - (maxLen-1)/2
			end = i + maxLen/2
		}
	}

	return s[start : end+1]
}

func expandAroundCenter(s string, left, right int) int {
	for left >= 0 && right < len(s) && s[left] == s[right] {
		left--
		right++
	}
	return right - left - 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
