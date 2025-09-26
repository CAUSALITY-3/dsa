package main

import "fmt"

// Item represents a task with priority
type Item struct {
	value    string
	priority int
}

// PriorityQueue implemented using MinHeap
type PriorityQueue struct {
	arr []Item
}

// Insert adds a new item into the queue
func (pq *PriorityQueue) Insert(value string, priority int) {
	newItem := Item{value: value, priority: priority}
	pq.arr = append(pq.arr, newItem)
	pq.heapifyUp(len(pq.arr) - 1)
}

// Extract removes and returns the highest priority item
func (pq *PriorityQueue) Extract() Item {
	if len(pq.arr) == 0 {
		fmt.Println("Priority Queue is empty!")
		return Item{}
	}
	root := pq.arr[0]
	last := pq.arr[len(pq.arr)-1]
	pq.arr[0] = last
	pq.arr = pq.arr[:len(pq.arr)-1]
	pq.heapifyDown(0)
	return root
}

// Peek returns the highest priority item without removing it
func (pq *PriorityQueue) Peek() Item {
	if len(pq.arr) == 0 {
		return Item{}
	}
	return pq.arr[0]
}

// Heapify Up (for insert)
func (pq *PriorityQueue) heapifyUp(index int) {
	for pq.arr[index].priority < pq.arr[parent(index)].priority {
		pq.swap(index, parent(index))
		index = parent(index)
	}
}

// Heapify Down (for extract)
func (pq *PriorityQueue) heapifyDown(index int) {
	lastIndex := len(pq.arr) - 1
	l, r := left(index), right(index)
	smallest := index

	if l <= lastIndex && pq.arr[l].priority < pq.arr[smallest].priority {
		smallest = l
	}
	if r <= lastIndex && pq.arr[r].priority < pq.arr[smallest].priority {
		smallest = r
	}

	if smallest != index {
		pq.swap(index, smallest)
		pq.heapifyDown(smallest)
	}
}

// Helpers
func parent(i int) int { return (i - 1) / 2 }
func left(i int) int   { return 2*i + 1 }
func right(i int) int  { return 2*i + 2 }

func (pq *PriorityQueue) swap(i, j int) {
	pq.arr[i], pq.arr[j] = pq.arr[j], pq.arr[i]
}

// Print queue
func (pq *PriorityQueue) Print() {
	fmt.Println(pq.arr)
}

func main() {
	pq := &PriorityQueue{}

	// Insert tasks with priorities
	pq.Insert("task1", 3)
	pq.Insert("task2", 1)
	pq.Insert("task3", 2)
	pq.Insert("task4", 0)

	fmt.Print("Queue (heap array): ")
	pq.Print()

	// Process tasks by priority
	for len(pq.arr) > 0 {
		item := pq.Extract()
		fmt.Printf("Processing %s with priority %d\n", item.value, item.priority)
	}
}
