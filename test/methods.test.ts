import { Elysia } from 'elysia'
import { cors } from '../src'

import { describe, expect, it } from 'bun:test'
import { req } from './utils'

describe('Methods', () => {
    it('Accept single methods', async () => {
        const app = new Elysia()
            .use(
                cors({
                    methods: 'GET'
                })
            )
            .get('/', () => 'HI')

        const res = await app.handle(req('/'))
        expect(res.headers.get('Access-Control-Allow-Methods')).toBe('GET')
    })

    it('Accept array', async () => {
        const app = new Elysia()
            .use(
                cors({
                    methods: ['GET', 'POST']
                })
            )
            .get('/', () => 'HI')

        const res = await app.handle(req('/'))
        expect(res.headers.get('Access-Control-Allow-Methods')).toBe(
            'GET, POST'
        )
    })
})
