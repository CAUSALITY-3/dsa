package main

import "fmt"

func letterCombinations(digits string) []string {
	var result []string
	if len(digits) == 0 {
		return result
	}

	var workingArray []string
	numMap := make(map[string]string)
	numMap["2"] = "abc"
	numMap["3"] = "def"
	numMap["4"] = "ghi"
	numMap["5"] = "jkl"
	numMap["6"] = "mno"
	numMap["7"] = "pqrs"
	numMap["8"] = "tuv"
	numMap["9"] = "wxyz"

	for _, num := range digits {
		workingArray = append(workingArray, numMap[string(num)])
	}
	recur("", &result, 0, workingArray)
	return result
}

func recur(lett string, result *[]string, idx int, wa []string) {
	if idx == len(wa)-1 {
		for _, letter := range wa[idx] {
			*result = append(*result, lett+string(letter))
			fmt.Println((*result))
		}
	} else {
		for _, letter := range wa[idx] {
			recur(lett+string(letter), result, idx+1, wa)
		}
	}

}
