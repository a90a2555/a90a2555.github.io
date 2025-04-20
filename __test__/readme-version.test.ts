import { readFileSync } from 'node:fs'
import { test, expect } from 'bun:test'

const getVersion = (file_path: string) => {
	const content = readFileSync(file_path, 'utf-8')
	const _version: any = content.match(/ver-(\d+\.\d+\.\d+)/) // Extract version in format: ver-x.y.z
	const version = _version ? _version[1] : '0.0.0'

	return version 
}

test('README versions should match across all language variants.', async (done) => {
	const version_en = getVersion('./README.md')
	const version_ru = getVersion('./docs/README.ru.md')

	expect(version_en).toBeString()
	expect(version_ru).toBe(version_en)
	
	done()
})