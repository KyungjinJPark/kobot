import * as dotenv from 'dotenv'
import { Client, ClientUser, GatewayIntentBits } from 'discord.js'
import { arst } from './temp'
import { __prod__ } from '@utils/envvars'
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on('ready', () => {
	const { tag } = client.user as ClientUser
	console.log(`Logged in as ${tag}!`)
})

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return

	if (interaction.commandName === arst) {
		await interaction.reply('Pong!')
	}
})

console.log(`prod?: ${__prod__}`)
client.login(process.env.DC_TOKEN).catch(() => console.error('Unable to login!'))
