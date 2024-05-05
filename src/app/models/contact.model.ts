export interface Contact {
    name: string
    email: string
    phone: string
    _id: string
    imgUrl?: string
}

export interface ContactFilter {
    term: string
}