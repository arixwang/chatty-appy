# chatty-appy
310's ChatApp, but in Golang

## Setting up and running the project
1. Clone repository `git clone https://github.com/arixwang/chatty-appy.git`
2. Change your working directory to the cloned repository's directory: `cd chatty-appy`
3. Run the `go mod init` command to initialize the Go module. Replace github.com/arixwang/chatty-appy with the actual import path you intend to use: `go mod init github.com/arixwang/chatty-appy`
4. Download Dependencies: If the project has dependencies defined in the code using import statements, you can use the go get command to download them: `go get`
5. Run Your Application: After initializing the module and downloading the dependencies, you can run your Go application using `go run main.go`. Navigate to `localhost:8888` in your browser. You should see "Hello, World!" on the webpage. 
6. Build Your Application: If you want to build your application, you can use the go build command: `go build`
7. Run the Executable: After building, you can run the executable that's generated in the same directory: `./chatty-appy`
