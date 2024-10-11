# Minecraft AFK Bot v3

A duel Minecraft bot using **mineflayer** that uses **mineflayer-pathfinder** to explore the world randomly. These two bots will run independently.

## Note
This is an upgraded version of [AFK-V2](https://github.com/MubTaXim/AFK-V2/) which is more structured and easy to use for newbie users. The logics here are different and improved from the previous one so it's encrypted for unwanted exposure and [Plagiarism](https://www.scribbr.com/category/plagiarism/). 

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)
- [Author](#author)

## Features

- Random exploration of the Minecraft world.
- Pathfinding capabilities using mineflayer-pathfinder.
- Removed some bot dependency to create stability (Connection Loop)
- Reconnects automatically if kicked from the server. (Improved)
- Lightweight and easy to configure.

## Requirements

- Node.js (version >= 16.0.0)
- A Minecraft server to connect to.

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/MubTaXim/AFK-V3.git
```
```bash
   cd AFK-V3
```
2. Install the required dependencies:
  ```bash
 npm install
```
## Usage

To start the bot, run:

```bash
node index.js
```
## Configuration

You can configure the bot settings by modifying the code in **settings.js**. Put your **Server IP** aka **HOST** and your server **PORT** correctly. You can name the bot whatever you want in the **BOT_NAMES**. 

## License

This project is licensed under the [MIT License](LICENSE). However, commercial use is not permitted without explicit permission from the author. Please see the LICENSE file for more details.

## Author

[Mubtasim Hasan](https://github.com/MubTaXim)

## Important 
This bot is only for personal use only and modifying is not **ALLOWED**.



