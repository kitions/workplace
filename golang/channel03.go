package main

import "fmt"

func counter(out chan<- int) {
	for x := 0; x < 10; x++ {
		out <- x
	}
	close(out)
}

// 类型chan<- int表示一个只发送int的channel，只能发送不能接收。
// 相反，类型<-chan int表示一个只接收int的channel，只能接收不能发送。（箭头<-和关键字chan的相对位置表明了channel的方向。）这种限制将在编译期检测。

// chan<- int  只发送 不接收
// <-chan int  只接受 不发送
func squarer(out chan<- int, in <-chan int) {
	for v := range in {
		out <- v * v
	}
	close(out)
}

func printer(in <-chan int) {
	for v := range in {
		fmt.Println(v)
	}
}

func main() {
	naturals := make(chan int)
	squares := make(chan int)
	go counter(naturals)
	go squarer(squares, naturals)
	printer(squares)
}
//调用counter(naturals)将导致将chan int类型的naturals隐式地转换为chan<- int类型只发送型的channel。
//调用printer(squares)也会导致相似的隐式转换，这一次是转换为<-chan int类型只接收型的channel。
//任何双向channel向单向channel变量的赋值操作都将导致该隐式转换。这里并没有反向转换的语法：也就是不能一个将类似chan<- int类型的单向型的channel转换为chan int类型的双向型的channel。