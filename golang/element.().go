package main

import (
	"fmt"
	"strconv"
)

// type Element interface{}
type List []interface{}

type Person struct {
	name string
	age  int
}

//定义了String方法，实现了fmt.Stringer
func (p Person) String() string {
	return "(name: " + p.name + " - age: " + strconv.Itoa(p.age) + " years)"
}

func main() {
	list := make(List, 3)
	list[0] = 1 // an int
	list[2] = Person{"Dennis", 70}
	list[1] = "Hello" // a string
	value, ok := list[0].(int)
	fmt.Println(value, ok)

	for index, elementValue := range list {
		if value, ok := elementValue.(int); ok {
			fmt.Printf("list[%d] is an int and its value is %d\n", index, value)
		} else if value, ok := elementValue.(string); ok {
			fmt.Printf("list[%d] is a string and its value is %s\n", index, value)
		} else if value, ok := elementValue.(Person); ok {
			fmt.Printf("list[%d] is a Person and its value is %s\n", index, value)
		} else {
			fmt.Printf("list[%d] is of a different type\n", index)
		}
	}
}
