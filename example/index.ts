import { Elysia } from 'elysia'
import { cors } from '../src/index'

const app = new Elysia()
    .use(
        cors({
            credentials: true
        })
    )
    .get('/', () => 'A')
    .listen(3000)

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

// app.fetch(
//     new Request('http://localhost/awd', {
//         headers: {
//             origin: 'https://saltyaom.com'
//         }
//     })
// )

export type App = typeof app
