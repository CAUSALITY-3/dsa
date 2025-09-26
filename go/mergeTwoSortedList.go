package main

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := &ListNode{0, nil}
	newList := dummy
	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			newList.Next = list1

			list1 = list1.Next
		} else {
			newList.Next = list2
			list2 = list2.Next
		}
		newList = newList.Next
	}
	if list1 == nil {
		newList.Next = list2
	} else {
		newList.Next = list1
	}
	return dummy.Next
}
