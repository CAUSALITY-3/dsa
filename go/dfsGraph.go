package main

import (
	"fmt"
)

func dfs() {
	graph := make(map[string][]string)
	graph["a"] = []string{"b", "c"}
	graph["b"] = []string{"d"}
	graph["c"] = []string{"d", "e"}
	graph["d"] = []string{}
	graph["e"] = []string{}

	seen := make(map[string]bool)
	depthFirstPrint(graph, "a", seen)
}

func depthFirstPrint(graph map[string][]string, source string, seen map[string]bool) {
	seen[source] = true
	fmt.Println(source)
	for _, node := range graph[source] {
		if _, exists := seen[node]; !exists {
			depthFirstPrint(graph, node, seen)
		}
	}
}
