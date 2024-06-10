export function ___withPanelLocationForPortLink(location: [string, string], portMap: { [portId: string]: PortAddress | [] }) {
    return Object.entries(portMap).filter(([_, address]) => {
        if (address.length === 0) {
            return false
        }
        if (address.length === 3) {
            return true
        }
        console.warn("what");
        return false
    }).map(
        ([portFrom, addressTo]) => (<PortLink>{
            from: [...location, portFrom],
            to: addressTo
        })
    )
}

export function __validatePatches(patches: Patch[]) {
    return patches.filter((patch) => {
        if (typeof patch.from === 'string' && typeof patch.to === 'string') {
            throw new Error('whatdahek')
        }
    
        if (Array.isArray(patch.from) && patch.from.length !== 3) {
            console.error("<Patch>.from invalid", patch)
            return false
    
        }
    
        if (Array.isArray(patch.to) && patch.to.length !== 3) {
            console.error("<Patch>.to invalid", patch)
            return false
        }
    
        return true
    })

}