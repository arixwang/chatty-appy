package main

import (
	"log"
	"net/http"
)

func main(){
	http.Handle("/", http.FileServer(http.Dir("./public")))
	log.Print("Server starting at localhost:8888")
	if err := http.ListenAndServe(":8888", nil); err != nil {
	  log.Fatal(err)
	}
}