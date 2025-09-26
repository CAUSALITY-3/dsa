package linkedList

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func InsertAtHead(head *ListNode, val int) *ListNode {
	node := &ListNode{Val: val, Next: head}
	return node
}

func PrintList(head *ListNode) {
	curr := head
	for curr != nil {
		fmt.Println(curr.Val)
		curr = curr.Next
	}
}

func InsertAtTail(head *ListNode, val int) *ListNode {
	curr := head
	for curr.Next != nil {
		curr = curr.Next
	}
	newNode := &ListNode{Val: val}
	curr.Next = newNode
	PrintList(head)
	return head
}

func DeleteNode(head *ListNode, val int) *ListNode {
	if head == nil {
		return nil
	}
	if head.Val == val {
		return head.Next
	}

	prev := head

	for prev != nil {
		if prev.Next != nil && prev.Next.Val != val {
			prev = prev.Next
		} else if prev.Next != nil && prev.Next.Val == val {
			prev.Next = prev.Next.Next
			return head
		}
	}
	return head
}

func ReverseList(head *ListNode) *ListNode {
	prev := (*ListNode)(nil)
	curr := head

	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}
	return prev
}

func ReverseListRecursive(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	next := ReverseListRecursive(head)

	head.Next.Next = head
	head.Next = nil

	return next
}

func HasCycle(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}

	slow, fast := head, head.Next

	for fast != nil && fast.Next != nil {
		if fast == slow {
			return true
		}
		slow = slow.Next
		fast = fast.Next.Next
	}
	return false
}
