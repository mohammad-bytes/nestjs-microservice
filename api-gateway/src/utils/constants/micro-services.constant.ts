require('dotenv').config({ path: `${process.cwd()}/src/config/env/.env` })

export const AUTH_MS = {
    NAME: 'AUTH_MS',
    TCP_PORT: Number(process.env.AUTH_TCP_PORT),
    TCP_HOST: process.env.AUTH_TCP_HOST,
    EVENTS: {
        SIGNIN: 'SIGNIN',
        SIGNUP: 'SIGNUP'
    },
    EVENT_QUEUE: 'auth_ms'
}

export const USER_MS = {
    NAME: 'USER_MS',
    TCP_PORT: Number(process.env.USER_TCP_PORT),
    TCP_HOST: process.env.USER_TCP_HOST,
    EVENTS: {
    },
    EVENT_QUEUE: 'user_ms'
}