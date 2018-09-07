// package main

// import "fmt"

// func sum(a []int, c chan int) {
// 	total := 0
// 	fmt.Println(a)
// 	for _, v := range a {
// 		total += v
// 	}
// 	c <- total // send total to c
// }

// func main() {
// 	a := []int{7, 2, 8, -9, 4, 0}

// 	c := make(chan int)
// 	go sum(a[:len(a)/2], c)
// 	go sum(a[len(a)/2:], c)
// 	// close(c)

// 	x, y := <-c, <-c // receive from c
// 	fmt.Println(x, y, x+y)
// }

// package main

// import "fmt"

// func main() {
// 	// ch := make(chan type, value)
// 	c := make(chan int, 3) //修改2为1就报错，修改2为3可以正常运行
// 	c <- 1
// 	c <- 2
// 	fmt.Println(<-c)
// 	fmt.Println(<-c)
// }
package main

import (
	"fmt"
	"time"
)

type Human struct {
	name  string
	age   int
	phone string
}

func doTask(text chan struct{}) {
	fmt.Println(text)
}
func main() {
	ch := make(chan struct{})

	// finish task while send msg to ch
	go doTask(ch)
	fmt.Println(2 * time.Second)
	ch <- Human{"Mark", 25, "222-222-YYYY"}
	timeout := time.After(1 * time.Second)

	select {
	case <-ch:
		fmt.Println("task finished.")
	case <-timeout:
		fmt.Println("task timeout.")
	}
}
