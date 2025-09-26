package main

import "fmt"

func generateParenthesis(n int) []string {
	var res = []string{}
	addParaRecur("", 0, n*2, &res)
	return res
}

func addParaRecur(s string, sum, k int, res *[]string) {
	fmt.Println("1", res, s)
	if len(s) == k {
		if sum == 0 {
			*res = append(*res, s)
		} else {
			return
		}
	} else if sum >= 0 {
		addParaRecur(s+")", sum-1, k, res)
		addParaRecur(s+"(", sum+1, k, res)
	} else {
		return
	}
}
