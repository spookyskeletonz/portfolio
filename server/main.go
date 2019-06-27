package main

import (
	"log"
	"net/http"
)

func main() {
	// create a simple file server to serve static files
	// note the relative path is from root folder of source code, not server
	// this is because of aws eb stuff
	fs := http.FileServer(http.Dir("./client"))
	http.Handle("/", fs)
	http.Handle("/projects", http.StripPrefix("/projects/", fs))
	http.Handle("/aboutme", http.StripPrefix("/aboutme/", fs))
	http.Handle("/contact", http.StripPrefix("/contact/", fs))

	log.Println("http server starting on :5000")
	err := http.ListenAndServe(":5000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
