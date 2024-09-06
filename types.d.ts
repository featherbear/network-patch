
type PortAddress = [string, string, string]

type PortLink = {
    // [id]: string
    from: PortAddress
    to: PortAddress
    note?: string
}

type Patch = {
    // [id]: string
    from: string | PortAddress
    to: string | PortAddress
    features?: Partial<{
        hasPOE: boolean
        isNonEthernet: boolean
        media: 'AVB' | 'Dante'
    }>
}

type Port = {
    // [id]: string
    // location: Location

    id: string
    // group: string

    name?: string
    description?: string

    features?: Partial<{
        isHanging: boolean
    }>
}

type Location = string
type Panel = {
    // [id]: string

    name: string
    ports: Port[]

    features?: Partial<{
        isSwitch: boolean
    }>
}


type WithoutId<T> = Omit<T, 'id'>

