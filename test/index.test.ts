import { Elysia } from 'elysia'
import { cors } from '../src'

import { describe, expect, it } from 'bun:test'
import { req } from './utils'

describe('CORS', () => {
    it('Accept all CORS by default', async () => {
        const app = new Elysia().use(cors()).get('/', () => 'HI')

        const res = await app.handle(req('/'))
        expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*')
        expect(res.headers.get('Access-Control-Allow-Methods')).toBe('*')
        expect(res.headers.get('Access-Control-Allow-Headers')).toBe('*')
        expect(res.headers.get('Access-Control-Expose-Headers')).toBe('*')
        expect(res.headers.get('Access-Control-Allow-Credentials')).toBe(null)
    })
})
