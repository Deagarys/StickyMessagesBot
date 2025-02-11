# Sticky Messages Discord Bot
This is a self hosted discord bot for sticky messages, after setup in a channel, when someone sends a message the sticky message will be posted next. So that the message always stays visible in the channel.![Recording2024-09-21005140-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e0ac5b87-53b0-4f07-8b1f-3eeda40a1050) 

It automatically deletes its own previous message and sends a new message, after a user has send a message.

## Command
`/sticky create [message-id] [channel-id] [message-is-embed]` -> creates a sticky message

## Environment Variables
TOKEN \
DBURI \
BOTID 

These are the environment variables that need to be in either the .env file or in the container environment.

## Setup
run `npm install`\
`npm start` -> runs the bot\
`npm delete` -> deletes all commands

Setup a bot in discords developer portal. Make sure to give it the right permissions and intents before inviting it to the server.

## Container
https://hub.docker.com/r/deagarys/sticky/tags
