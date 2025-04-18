import { test, expect } from 'bun:test'

test('google is fine', async (done) => {
	const res = await fetch('https://www.google.com')
	expect(res.status).toBe(200)
	done()
})