package main

import (
	"fmt"
)

func bfs() {
	graph := make(map[string][]string)
	graph["a"] = []string{"b", "c"}
	graph["b"] = []string{"d"}
	graph["c"] = []string{"d", "e"}
	graph["d"] = []string{}
	graph["e"] = []string{}

	seen := make(map[string]bool)
	var que []string
	que = append(que, "a")
	breadthFirstPrint(graph, que, seen)
}

func breadthFirstPrint(graph map[string][]string, que []string, seen map[string]bool) {

	for len(que) > 0 {
		source := que[0]
		if _, exist := seen[source]; exist {
			que = que[1:]
			continue
		}

		seen[source] = true
		fmt.Println(source)
		for _, node := range graph[source] {
			que = append(que, node)
		}
		// fmt.Println("quw", que)
	}
}
