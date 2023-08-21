package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

func main(){
	r := mux.NewRouter()
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
		fmt.Fprintf(w, "Hello, World!\n")
	})
	log.Print("Server starting at localhost:8888")
	http.ListenAndServe(":8888", r)
}