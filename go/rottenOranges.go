package main

import (
	"fmt"
)

func orangesRotting(grid [][]int) int {
	fresh := 0
	var rIndxes [][]int
	for i, _ := range grid {
		for j, val := range grid[i] {
			if val == 1 {
				fresh = fresh + 1
			} else if val == 2 {
				rIndxes = append(rIndxes, []int{i, j})
			}
		}
	}

	if fresh == 0 {
		return 0
	}

	cf := 0
	t := 0
	for fresh > 0 && cf != fresh {
		cf = fresh
		for _, value := range rIndxes {

			rI := value
			rIndxes = rIndxes[1:]
			fmt.Println(rI)

			i, j := rI[0], rI[1]

			// fmt.Println(i, j)
			// fmt.Println(grid)
			if i < len(grid)-1 {
				if grid[i+1][j] == 1 {
					grid[i+1][j] = 2
					fresh = fresh - 1
					rIndxes = append(rIndxes, []int{i + 1, j})
				}

			}
			if j < len(grid[i])-1 {
				if grid[i][j+1] == 1 {
					grid[i][j+1] = 2
					fresh = fresh - 1
					rIndxes = append(rIndxes, []int{i, j + 1})
				}
			}
			if i > 0 {
				if grid[i-1][j] == 1 {
					grid[i-1][j] = 2
					fresh = fresh - 1
					rIndxes = append(rIndxes, []int{i - 1, j})
				}

			}
			if j > 0 {
				if grid[i][j-1] == 1 {
					grid[i][j-1] = 2
					fresh = fresh - 1
					rIndxes = append(rIndxes, []int{i, j - 1})
				}
			}
		}
		t = t + 1

	}
	// fmt.Println(fresh, rIndxes)
	if fresh == 0 {
		return t
	}
	return -1

}
