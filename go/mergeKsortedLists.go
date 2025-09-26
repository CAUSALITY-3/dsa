package main

import "fmt"

func mergeKLists(lists []*ListNode) *ListNode {
	dummy := &ListNode{0, nil}
	ll := dummy

	ended := false
	for !ended {
		ended = true
		min := 10001
		minIdx := -1

		for i, arr := range lists {
			if arr == nil {
				ended = ended && true
			} else {
				ended = false
				if arr.Val < min {
					minIdx = i
					min = arr.Val
				}
			}
		}
		if minIdx >= 0 {
			ll.Next = lists[minIdx]
			fmt.Println(minIdx, lists[minIdx])
			lists[minIdx] = lists[minIdx].Next
		}
	}
	return dummy.Next
}
