package que

type Queue struct {
	items []int
}

func (q *Queue) Enqueue(val int) {
	q.items = append(q.items, val)
}

func (q *Queue) Dequeue() int {
	if q.IsEmpty() {
		panic("Que is empty")
	}
	out := q.items[0]
	q.items = q.items[1:]
	return out
}

func (q *Queue) Peek() int {
	if q.IsEmpty() {
		panic("Que is empty")
	}
	return q.items[0]
}

func (q *Queue) IsEmpty() bool {
	return len(q.items) == 0
}
