package main

// import (
// 	"fmt"
// )

// "fmt"

// func main() {
// 	// input := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
// 	// result := maxArea(input)
// 	// fmt.Println("Max Area:", result)

//		// result := orangesRotting([][]int{{0, 2}})
//		result := generateParenthesis(3)
//		fmt.Println("Ans", result)
//		// threeSum([]int{-1, 0, 1, 2, -1, -4})
//	}
import (
	"dsa/datastructures/linkedList"
	"fmt"
)

func main() {
	head := linkedList.InsertAtHead(nil, 10)
	head = linkedList.InsertAtHead(head, 20)
	head = linkedList.InsertAtHead(head, 30)
	// linkedList.PrintList(head)
	//

	linkedList.InsertAtTail(head, 1)

	// linkedList.PrintList(head)
	// head = linkedList.DeleteNode(head, 20)
	fmt.Println("---------------")
	head = linkedList.ReverseList(head)
	linkedList.PrintList(head)

}
