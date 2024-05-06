export interface User {
    name: string,
    coins: number,
    moves: Move[]
}

export interface Move {
    toId: string,
    to: string,
    at: number,
    amount: number
}