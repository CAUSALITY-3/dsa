package stack

type Node struct {
	Val  int
	Next *Node
}

type LinkedStack struct {
	Top *Node
}

func (s *LinkedStack) Push(val int) {
	newVal := &Node{Val: val, Next: s.Top}
	s.Top = newVal
}

func (s *LinkedStack) Pop() int {
	top := s.Top
	if top == nil {
		panic("Stack is empty")
	}
	s.Top = s.Top.Next
	return top.Val
}

func (s *LinkedStack) Peek() int {
	top := s.Top
	if top == nil {
		panic("Stack is empty")
	}
	return top.Val
}
