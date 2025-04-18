const is_husky_installed = await Bun.file('.husky/pre-commit').exists()

if (!is_husky_installed) {
	await Bun.$`bun add -d husky`
	await Bun.$`bunx husky init .husky`
}