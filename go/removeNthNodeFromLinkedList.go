package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	var dummy = &ListNode{0, head}
	var first, second = dummy, dummy
	i := 1
	for i <= n+1 {
		first = first.Next
		i += 1
	}
	for first != nil {
		second = second.Next
		first = first.Next
	}
	second.Next = second.Next.Next
	return dummy.Next
}
