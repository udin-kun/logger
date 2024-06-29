const Eris = require('eris')
const { getAuthorField, getEmbedFooter } = require('../utils/embeds.js')

module.exports = {
  name: 'clearmydata',
  func: async interaction => {
    interaction.createMessage({
      embeds: [{
        title: 'Action needed:',
        description: `To clear your data (messages), please contact \`@${process.env.BOT_CREATOR_NAME}\`. Remember: all messages stored are encrypted and automatically removed from the database after ${process.env.MESSAGE_HISTORY_DAYS} days.`,
        color: 16711680,
        timestamp: new Date(),
        footer: getEmbedFooter(global.bot.user),
        author: getAuthorField(interaction.member.user),
        fields: []
      }],
      flags: Eris.Constants.MessageFlags.EPHEMERAL
    }).catch(() => { })
  }
}
