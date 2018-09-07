package main

import (
	"fmt"
	"time"
)

func main() {

	fmt.Println("the 1")
	tc := time.After(time.Second) //返回一个time.C这个管道，1秒(time.Second)后会在此管道中放入
	//一个时间点(time.Now())，时间点记录的是放入管道那一刻的时间值
	fmt.Println("the 2")
	fmt.Println("the 3")
	time.Sleep(time.Second * 1) //这里是假设这个Println动作执行了1秒钟
	fmt.Println("the 4")
	time.Sleep(time.Second * 1) //这里是假设这个Println动作执行了1秒钟
	fmt.Println("the 5")
	fmt.Println("the 6")
	fmt.Println("the 7")
	<-tc //阻塞中，直到取出tc管道里的数据

}
