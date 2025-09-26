package main

func isValid(s string) bool {
	var paraMap = make(map[string]string)
	paraMap["("] = ")"
	paraMap["["] = "]"
	paraMap["{"] = "}"
	return true
}
