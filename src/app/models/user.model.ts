export interface User {
    name: string,
    coins: number,
    moves: string[]
}

export interface Move {
    toId: string,
    to: string,
    at: number,
    amount: number
}