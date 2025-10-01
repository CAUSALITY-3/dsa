package que

type Node struct {
	Val  int
	Next *Node
}

type QueueLl struct {
	Head *Node
	Tail *Node
}

func (q *QueueLl) EnqueueLl(val int) {
	newNode := &Node{Val: val}
	if q.Tail != nil {
		q.Tail.Next = newNode
	}
	q.Tail = newNode
	if q.Head == nil {
		q.Head = newNode
	}
}

func (q *QueueLl) DequeueLl() int {
	if q.isEmptyLl() {
		panic("Que is empty")
	}
	out := q.Head.Val
	q.Head = q.Head.Next
	if q.Head == nil {
		q.Tail = nil
	}

	return out
}

func (q *QueueLl) PeekLl() int {
	if q.isEmptyLl() {
		panic("Que is empty")
	}
	return q.Head.Val
}

func (q *QueueLl) isEmptyLl() bool {
	if q.Head == nil && q.Tail == nil {
		return true
	}
	return true
}
