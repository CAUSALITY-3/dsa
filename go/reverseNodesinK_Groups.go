package main

import "fmt"

func reverseKGroup(head *ListNode, k int) *ListNode {

	var arr []*ListNode
	for head != nil {
		i := 0
		dummy := &ListNode{0, nil}
		curr := dummy
		for head != nil && i < k {
			curr.Next = head
			if i == k-1 {
				curr.Next = nil
				reversedList := reverseList1(dummy.Next)
				arr = append(arr, reversedList)
			}
			head = head.Next
		}
		if i < k-1 {
			arr = append(arr, dummy.Next)
		}
	}
	fmt.Println(arr)
	for i := 0; i < len(arr)-1; i++ {
		for arr[i] != nil {
			if arr[i].Next == nil {
				arr[i].Next = arr[i+1]
			}
		}
	}
	return arr[0]
}

func reverseList1(head *ListNode) *ListNode {
	var prev *ListNode
	curr := head

	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}

	return prev
}
