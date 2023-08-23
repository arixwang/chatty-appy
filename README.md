# chatty-appy
310's ChatApp, but in Golang. A user will visit a webpage, assign themselves a username, and send messages in a chat room (just like 310's chatapp!)

## Setting up and running the project
1. Clone repository `git clone https://github.com/arixwang/chatty-appy.git`
2. Change your working directory to the cloned repository's directory: `cd chatty-appy`
3. Run the `go mod init` command to initialize the Go module. Replace github.com/arixwang/chatty-appy with the actual import path you intend to use: `go mod init github.com/arixwang/chatty-appy`
4. Download Dependencies: If the project has dependencies defined in the code using import statements, you can use the go get command to download them: `go get`
5. To install the required dependencies, run `npm install` in your project directory
6. Run Your Application: After initializing the module and downloading the dependencies, you can run your Go application using `go run main.go`. Navigate to `localhost:8888` in your browser. You should see the chatty appy UI

## Deployment
I used heroku for deployment. You can find instructions here: https://devcenter.heroku.com/articles/heroku-cli?ref=hackernoon.com. You'll get a URL generated that can be used to test chatty appy. 

Once you commit the latest changees run
`heroku git:remote -a [CLI WEBSITE]`
`git push heroku main`
Then go to the URL Heroku generated to see the chatapp
