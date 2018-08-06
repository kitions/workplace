package main

import ( 
	     "fmt"
		 "strings"
		 "strconv"
	 )

type IPAddr [4]byte

//func (a IPAddr) String() string{
//	return fmt.Sprintf("%v.%v.%v.%v", a[0],a[1],a[2],a[3])
//}

func (a IPAddr) String() string{
	s := make([]string,len(a))
	for i,_ := range a {
		fmt.Printf("%s",string(a[i]))

		s[i] = strconv.Itoa(int(a[i]))
	}
	return strings.Join(s,".")
}

func main() {
	hosts := map[string]IPAddr{
		"loopback":  {127, 0, 0, 1},
		"googleDNS": {8, 8, 8, 8},
	}
	for name, ip := range hosts {
		fmt.Printf("%v: %v\n", name, ip)
	}
}
