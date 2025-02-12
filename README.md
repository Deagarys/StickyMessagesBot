# Sticky Messages Discord Bot
[![Build and Test Docker Image](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/pr-test.yml/badge.svg)](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/pr-test.yml)
[![CodeQL](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/github-code-scanning/codeql)
[![Deploy to Docker](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/deploy-docker.yml/badge.svg)](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/deploy-docker.yml)
[![Deploy Docker Image to GitHub Packages](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/deploy-git.yml/badge.svg)](https://github.com/Deagarys/StickyMessagesBot/actions/workflows/deploy-git.yml)

## Overview

Sticky Messages Discord Bot is a bot designed to help manage and maintain sticky messages in your Discord server. Sticky messages are messages that stay at the bottom of a channel, ensuring important information is always visible.

## Features

- Automatically stick messages to the bottom of a channel
- Customizable sticky messages
- Easy to set up and use

## Installation

### Prerequisites

- Node.js
- npm
- Docker (optional, for Docker deployment)

### Local Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Deagarys/StickyMessagesBot.git
    cd StickyMessagesBot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file and add your environment variables:
    ```env
    DISCORD_TOKEN=your_discord_token
    DBURI=your_mongodb_uri
    BOTID=your_discord_bot_id
    ```

4. Start the bot:
    ```sh
    npm start
    ```

### Docker Setup

1. Build and run the Docker container:
    ```sh
    docker build -t sticky-messages-bot .
    docker run -d --name sticky-messages-bot -e DISCORD_TOKEN=your_discord_token -e DBURI=your_mongodb_uri -e BOTID=your_discord_bot_id sticky-messages-bot
    ```

## Usage

Invite the bot to your Discord server and use the following commands to manage sticky messages:

- `/sticky create <message-id> <channel-id> <message-is-embed>`: Stick a message to the bottom of the channel
- `/sticky remove <message-id>`: Remove the sticky message from the channel (Not yet implemented)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
