package main

import (
	"fmt"
)

func romanToInt(s string) int {

	romanMap := map[string]int{
		"I":  1,
		"V":  5,
		"X":  10,
		"L":  50,
		"C":  100,
		"D":  500,
		"M":  1000,
		"IV": 4,
		"IX": 9,
		"XL": 40,
		"XC": 90,
		"CD": 400,
		"CM": 900,
	}

	ans := 0
	for i := len(s) - 1; i >= 0; i-- {
		fmt.Println(ans)
		if i != 0 {
			fmt.Println(string(s[i-1 : i+1]))
			if value, ok := romanMap[string(s[i-1:i+1])]; ok {
				ans = ans + value
				i--
				continue
			}
		}
		value, _ := romanMap[string(s[i])]
		fmt.Println(string(s[i]), i, value)
		ans = ans + value

	}
	return ans
}
