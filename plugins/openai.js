import fetch from 'node-fetch'

let handler = async (m, { conn, command, args, usedPrefix, text }) => {
    if (!args[0]) return false
    let res = await (await fetch(`http://tools-amfcode.com/api/ai/bot.php?text=${text}`)).json()
    await conn.reply(m.chat, `*CHAT OPENAI*${res.text}`, m)
}
handler.help = ['ai']
handler.tags = ['tools']

handler.command = /^ai$/i
handler.limit = true
handler.group = false

export default handler