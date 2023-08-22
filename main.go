package main

import (
	"log"
	"net/http"
	"os"
	"github.com/joho/godotenv"
	"github.com/go-redis/redis"
)

var (
	rdb *redis.Client
)


func main() {
	http.Handle("/", http.FileServer(http.Dir("./public")))
	log.Print("Server starting at localhost:8888")
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	port := os.Getenv("PORT")
	redisURL := os.Getenv("REDIS_URL")

	//  takes a URL as a string and returns a *redis.Options
	// struct, which contains the parsed connection options.
	opt, err := redis.ParseURL(redisURL) 
	if err != nil {
		panic(err) // Terminate program
	}
	rdb = redis.NewClient(opt) 
	
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
