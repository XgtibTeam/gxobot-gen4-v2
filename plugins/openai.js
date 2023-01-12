let fetch = require('node-fetch')

let handler = async (m, { conn, command, args, usedPrefix, text }) => {
    if (!args[0]){ m.reply( 'Masukan teks')
    return false
}
try{
let res = await (await fetch(`https://malesin.xyz/ai?text=${text}&apikey=DonasiDong`)).json()
await conn.reply(m.chat, `*CHAT OPENAI*\n\n${res.message}`)
}catch(e) {
m.reply('eror!')
}
/*
let res = await (await fetch(`http://tools-amfcode.com/api/ai/bot.php?text=${text}`)).json()
    await conn.reply(m.chat, `*CHAT OPENAI*${res.text}`, m)
}catch(e){
m.reply('maaf fitur sedang eror silahkan coba kembali nanti!')
}*/
}
handler.help = ['ai']
handler.tags = ['tools']

handler.command = /^ai$/i
handler.limit = true
handler.group = false
handler.premium = true

module.exports = handler