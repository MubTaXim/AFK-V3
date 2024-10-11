// settings.js

module.exports = {
  HOST: 'yourserver.aternos.me',  // Server IP
  PORT: yourport,                     // Server Port
  HTTP_PORT: process.env.PORT || 3000, // HTTP server port
  RECONNECT_DELAY: 6000,           // Reconnect delay (in milliseconds)
  SECOND_BOT_DELAY: 20000,         // Delay before creating the second bot (in milliseconds)
  MINECRAFT_VERSION: '1.20.1',     // Minecraft version
  BOT_NAMES: {
    FIRST_BOT: 'BotOne',           // First bot name
    SECOND_BOT: 'BotTwo',           // Second bot name
  }
};
