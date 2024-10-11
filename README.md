# Minecraft AFK Bot v2

A duel Minecraft bot using **mineflayer** that uses **mineflayer-pathfinder** to explore the world randomly. These two bots will run independently.

## Note
This is an upgraded version of [AFK-V2](https://github.com/MubTaXim/AFK-V2/) which is more structured and easy to use for newbie users. The logics here are different and improved from the previous one so it's encrypted for unwanted exposure.

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
- Removed some bot decency to create stability (Connection Loop)
- Reconnects automatically if kicked from the server. (Improved)
- Lightweight and easy to configure.

## Requirements

- Node.js (version >= 16.0.0)
- A Minecraft server to connect to (make sure you have the server address and port).

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/MubTaXim/AFK-V2.git
```
```bash
   cd AFK-V2
```
2. Install the required dependencies:
  ```bash
 npm install
```
## Usage

To start the bot, run:

```bash
npm start
```
## Configuration

You can configure the bot settings by modifying the code in index.js.

## License

This project is licensed under the [MIT License](LICENSE). However, commercial use is not permitted without explicit permission from the author. Please see the LICENSE file for more details.

## Author

[Mubtasim Hasan](https://github.com/MubTaXim)



