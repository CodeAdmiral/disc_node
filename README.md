# disc_node

This is a simple open source discord bot, designed to be used by friends on a raspberry pi

# Install Environment
install npm as a cli tool. https://www.npmjs.com/get-npm

and nvm 
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows

use this to install node v12 as that's the best version to target for my raspberry pi
```
nvm install 12.18.2
```


# Discord Token
This app runs using a file in the root called token.txt, insert you Discord App token here, to run the bot.
It's in gitignore so it'll never be uploaded to source control and stay safe. You can get your own by going to 
https://discord.com/developers/applications

Create an application
![image](https://user-images.githubusercontent.com/53613298/109418793-0508a100-79c2-11eb-884a-20c8b96db55f.png)

Then you can create a URL to get it to join a server, I recommend creating a test server, as not to annoy everyone on your main one with testing.
![image](https://user-images.githubusercontent.com/53613298/109418815-29647d80-79c2-11eb-85d7-4b8a686bfc88.png)

# Run the bot
Make sure in powershell to navigate to the code; To run the bot, you first need to restore all the modules
```
npm install
```

and then to run the application
```
node main.js
```
# Next CI/CD
