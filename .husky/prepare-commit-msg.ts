import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const commit_message = readFileSync(process.argv[2], 'utf-8')
const message_types = [
	'feat', 
	'fix', 
	'perf', 
	'refactor', 
	'style', 
	'test', 
	'revert', 
	'chore', 
	'docs', 
	'ci', 
	'build', 
]

if (!message_types.includes(commit_message.split(':')[0])) {
	throw new Error(
		'Invalid commit message. Please use conventional commits. https://www.conventionalcommits.org/en/v1.0.0/'
	)
}

let message_type = commit_message.split(':')[0]
let message = commit_message.split(':')[1] 

message_type = message_type.trim().toLocaleLowerCase()
message = message.trim()
message = message.toLowerCase()
message = message.charAt(0).toUpperCase() + message.slice(1)
message_type = message_type.toLowerCase()

if (!message.endsWith('.')) {
	message = message + '.'
}

message = message_type + ': ' + message
message = message.replace(/\s+/g, ' ')

const commit_message_file = process.argv[2]

writeFileSync(commit_message_file, message)