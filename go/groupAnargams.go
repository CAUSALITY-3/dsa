package main

func groupAnagrams(strs []string) [][]string {
	m := make(map[string][]string)
	for _, str := range strs {

		add, mult := 0, 0
		for _, r := range str {
			add = add + int(r)
			mult = mult * int(r)
		}
		key := string(len(str)) + "_" + string(add) + "_" + string(mult)
		m[key] = append(m[key], str)
	}
	res := make([][]string, 0, len(m))
	for _, v := range m {
		res = append(res, v)
	}
	return res
}
