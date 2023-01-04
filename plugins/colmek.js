import fetch from 'node-fetch'

let handler = async (m, { conn, command, args, usedPrefix, text }) => {
    if (!args[0]) return false
    let res = await (await fetch(`https://api.zeeoneofc.xyz/api/nsfw/masturbation?apikey=LCAcI7c2`)).json()
}
handler.help = ['colmek']
handler.tags = ['nsfw']

handler.command = /^colmek$/i
handler.premium = true
handler.group = false
handler.register = true

export default handler