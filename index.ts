import patches from './data/patches';
import portLinks from './data/portLinks';
import ports from './data/ports';

function formatPortAddress(address: PortAddress | string) {
    if (typeof address === 'string') {
        return address
    }

    return `<${address[0]} | ${address[1]} | ${address[2]}>`
}

{

    function contains<T>(comparisonArray: T[], collection: T[][]) {
        return collection.some((queryArray) =>
            queryArray.every((item, idx) => comparisonArray[idx] === item)
            && comparisonArray.every((item, idx) => queryArray[idx] === item)
        )
    }

    const allPorts = Object.entries(ports).map(([locationName, panels]) => Object.entries(panels).map(([panelId, panel]) => panel.ports.map(port => [locationName, panelId, port.id]))).flat().flat()

    {

        let usedPorts: PortAddress[] = []
        // TODO: Assert that port addresses aren't reused

        let isError = false
        for (let portLink of portLinks) {
            if (!portLink.from?.length || !portLink.to?.length) {
                // Incomplete link
                // TODO: Warn
                continue
            }
            if (!contains(portLink.from, allPorts)) {
                isError = true
                console.log('<PortLink>.from invalid', portLink);
            }

            if (!contains(portLink.to, allPorts)) {
                isError = true
                console.log('<PortLink>.to invalid', portLink);
            }
        }

        for (let patch of patches) {
            if (Array.isArray(patch.from) && !contains(patch.from, allPorts)) {
                isError = true
                console.log('<Patch>.from could not be found', patch);
            }

            if (Array.isArray(patch.to) && !contains(patch.to, allPorts)) {
                isError = true
                console.log('<Patch>.to could not be found', patch);
            }
        }

        if (isError) {
            throw "Noppers"
        }
    }





    function walk() {

        type Connection = {
            type: 'patch' | 'portLink',
            connection: string | PortAddress
        }
        // Make a copy of all panels
        // Panel map 
        // [location][panel][port]
        let connections: { [location: string]: { [panel: string]: { [port: string]: Connection[] } } } = Object.fromEntries(Object.entries(ports).map(([locationName, panels]) => [
            locationName,
            Object.fromEntries(Object.entries(panels).map(([panelName, panel]) => [
                panelName, Object.values(panel.ports).reduce((obj, val) => ({
                    ...obj,
                    [val.id]: []
                }), {})
            ]))
        ]))

        let usedPorts: PortAddress[] = []

        function processConnection(type: Connection['type'], from: PortAddress, to: string | PortAddress) {
            let [locationFrom, panelFrom, portFrom] = from

            connections[locationFrom][panelFrom][portFrom].push({
                type,
                connection: to
            })
        }

        for (let portLink of portLinks) {
            processConnection('portLink', portLink.from, portLink.to)
            processConnection('portLink', portLink.to, portLink.from)
        }

        // function process

        for (let patch of patches) {
            // string string // uh
            // string port // to --> from
            // port string // from --> to
            // port port // ok




            if (typeof patch.from !== 'string') {
                // if (contains(patch.from, usedPorts)) {
                //     throw new Error(`${patch.from} was already assigned`)
                // }
                processConnection('patch', patch.from, patch.to)
            }
            if (typeof patch.to !== 'string') {
                // if (contains(patch.to, usedPorts)) {
                //     throw new Error(`${patch.to} was already assigned`)
                // }
                processConnection('patch', patch.to, patch.from)
            }

        }

        // console.log(connections);

        // TODO - figure out resolving devices (string)
        function follow(address: PortAddress) {
            function resolve(node: PortAddress, path: PortAddress[] = []) {
                const [location, panel, port] = node

                let nodes = connections[location][panel][port].map(({ connection }) => connection)
                if (nodes.length > 2) {
                    throw new Error("More than 2 nodes???")
                }

                let remainingNodes = nodes.filter(node => {
                    if (typeof node === 'string') {
                        return true
                    } else {
                        return !contains(node, path)
                    }
                })

                let results: (string | (string | PortAddress)[])[] = []

                if (remainingNodes.length === 0) {
                    results.push([...path.slice(1), node])
                }

                if (remainingNodes.length >= 1) {
                    if (typeof remainingNodes[0] === 'string') {
                        results.push([...path.slice(1), node, remainingNodes[0]])
                    } else {
                        results.push(...resolve(remainingNodes[0], [...path, node]))
                    }
                }

                if (remainingNodes.length === 2) {
                    if (typeof remainingNodes[1] === 'string') {
                        throw "not an error but need to flag here"
                        results.push([...path.slice(1), node, remainingNodes[1]])
                        // results.push([...path.slice(1), remainingNodes[1]])
                    } else {
                        results.push(...resolve(remainingNodes[1], [...path, node]))
                    }
                }

                return results
            }

            return resolve(address).map(v => [address, ...v].map(o => {
                if (Array.isArray(o)) {
                    return formatPortAddress(o)
                } else {
                    return o
                }
            }))
        }

        console.log(follow(["Hall", "StageRack", "6"]));
        // console.log(follow([ "Hall", "StageRack-AVB-Switch", "1" ]));


        for (let [locationName, panels] of Object.entries(connections)) {
            for (let [panelName, ports] of Object.entries(panels)) {
                console.log(locationName, panelName);
                console.table(Object.fromEntries(Object.entries(ports).map(([portName, connections]) => {
                    let patch = connections.find(({ type }) => type === 'patch')?.connection
                    let link = connections.find(({ type }) => type === 'portLink')?.connection

                    return [
                        portName,
                        {
                            Patch: patch ? formatPortAddress(patch) : '',
                            Link: link ? formatPortAddress(link) : ''
                        }
                    ]
                })))
            }
        }
    }

    walk()
}