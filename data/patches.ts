import { __validatePatches } from "../utils"

const patches: Patch[] = __validatePatches([
    {
        from: 'Router',
        to: ['Office', 'Switch', '1']
    },
    {
        from: ['Office', 'Panel2', '11'],
        to: ['Office', 'Switch', '3']
    },
    {
        from: ['Office', 'Switch', '4'],
        to: 'Office AP',
        features: {
            hasPOE: true
        }

    },
    {
        from: ['Office', 'Switch', '8'],
        to: 'Jeremy X1E Laptop'
    },
    {
        from: 'Server Computer',
        to: ['Office', 'Switch', '18']
    },
    {
        from: 'Server Computer (iDRAC)',
        to: ['Office', 'Switch', '20']
    },
    {
        from: ['Office', 'Switch', '22'],
        to: 'M93p Computer'
    },
    {
        from: ['Office', 'Switch', '24'],
        to: 'Printer',
    },
    {
        from: ['Office', 'Panel3', '1'],
        // avdesk console
        to: ['Office', 'Panel3', '9'],
        features: {
            media: 'AVB'
        }
    },
    {
        from: ['Office', 'Panel3', '2'],
        // avdesk laptop
        to: ['Office', 'Panel3', '10'],
        features: {
            media: 'AVB'
        }
    },
    {
        // TODO: something for AVB in music room
        from: ['Office', 'Panel3', '3'],
        to: [],
        features: {
            media: 'AVB'
        }
    },
    {
        from: ['Office', 'Panel3', '4'],
        to: ['Office', 'Switch', '5'],
    },
    {
        from: ['Office', 'Panel3', '11'],
        to: ['Office', 'Switch', '6']
    },
    {
        // Hall AP
        from: ['Office', 'Panel3', '8'],
        to: ['Office', 'Switch', '7'],
        features: {
            hasPOE: true
        }
    },
    {
        from: ['Office', 'Panel3', '5'],
        to: ['Office', 'Switch', '9']
    },
    {
        from: ['Office', 'Panel3', '6'],
        to: ['Office', 'Switch', '10']
    },
    {
        from: ['Office', 'Panel3', '7'],
        to: ['Office', 'Switch', '11']
    },
    {
        from: ['Office', 'Panel3', '12'],
        to: ['Office', 'Switch', '12']
    },
    {
        from: ['Office', 'Panel3', '13'],
        to: ['Office', 'NVR', '2']
    },
    {
        from: ['Office', 'Panel3', '14'],
        to: ['Office', 'Switch', '14']
    },

    {
        from: ['Office', 'Panel3', '15'],
        to: ['Office', 'Switch', '15']
    },
    {
        from: ['Office', 'Panel3', '16'],
        to: ['Office', 'Switch', '16']
    },

    {
        from: 'Mac Mini (ArtNet for Hall)',
        to: ['Office', 'Switch', '17'],
    },
    {
        from: 'StudioLive 32SC',
        to: ['Hall', 'AVRack', '1'],
        features: {
            media: 'AVB'
        }
    },
    {
        from: 'AVB Laptop',
        to: ['Hall', 'AVRack', '2'],
        features: {
            media: 'AVB'
        }
    },
    {
        from: ['Hall', 'AVRack', '3'],
        to: ['Hall', 'AVRack-Switch', '1'],
    },
    {
        from: ['Hall', 'AVRack-Switch', '2'],
        to: 'Stream PC',
    },
    {
        from: ['Hall', 'AVRack-Switch', '4'],
        to: 'Presentation PC',
    },
    {
        from: ['Hall', 'AVRack-Switch', '6'],
        to: 'Sound Utility PC',
    },
    {
        from: ['Hall', 'AVRack-Switch', '8'],
        to: 'Blackmagic ATEM Constellation 2 M/E',
    },
    {
        from: ['Hall', 'AVRack-Switch', '10'],
        to: 'StudioLive 32SC',

    },
    {
        // Patch for Global Cache IR blaster
        from: ['Hall', 'AVRack', '4'],
        to: ['Hall', 'AVRack', '12'],
    },
    {
        // Security Camera
        from: ['Hall', 'AVRack', '5'],
        to: ['Hall', 'AVRack', '10'],
        features: {
            hasPOE: true
        }
    },
    {
        from: ['Hall', 'RearWall', '1'],
        to: 'Hall Camera',
    },
    {
        from: ['Hall', 'RearWall', '3'],
        to: 'Global Cache IR',
    },
    {
        from: ['Hall', 'StageRack-AVB-Switch', '1'],
        to: 'PreSonus NSB8.8 -> PreSonus AVB-D16',
        features: {
            media: 'AVB'
        }
    },
    {
        from: ['Hall', 'StageRack-AVB-Switch', '2'],
        to: 'PreSonus NSB16.8 Stagebox',
        features: {
            media: 'AVB',
        }
    },
    {
        // Goes to office for something
        from: ['Hall', 'StageRack-AVB-Switch', '3'],
        to: ['Hall', 'StageRack', '6'],
        features: {
            media: 'AVB'
        }
    },
    {
        from: ['Hall', 'StageRack-AVB-Switch', '4'],
        to: ['Hall', 'StageRack', '7'],
        features: {
            media: 'AVB'
        }
    },
    {
        from: ['Hall', 'StageRack-AVB-Switch', '5'],
        to: ['Hall', 'StageRack', '8'],
        features: {
            media: 'AVB'
        }
    },
    


    {
        // Uplink
        from: ['Hall', 'StageRack', '9'],
        to: ['Hall', 'StageRack-Switch', '1'],
    },
    {

        from: ['Hall', 'StageRack-Switch', '2'],
        to: 'QSYS Core Flex 8',
    },


    {
        from: ['Hall', 'StageRack-Switch', '4'],
        to: ['Hall', 'StageRack', '4'],
    },

    {
        from: ['Hall', 'LightBar2', '1'],
        to: 'Hall AP',
        features: {
            hasPOE: true
        }

    },
    {
        from: ['Hall', 'LightBar2', '2'],
        to: 'Projector'
    },
    {
        from: ['Hall', 'StageRack-Switch', '6'],
        to: ['Hall', 'StageRack', '5'],
        // Projector Screen
    },

    {
        from: 'Entec ODE MK3',
        to: ['Hall', 'StageRack', '10'],
    },
    {
        // Hall AP
        from: ['Hall', 'StageRack', '13'],
        // Currently directory connected to AP
        to: ['Hall', 'StageRack', '3'],
        features: {
            hasPOE: true,
        }
    },





    {
        from: 'QSYS Core Flex 8',
        to: ['Hall', 'StageRack-Dante-Switch', '10'],
        features: {
            media: 'Dante'
        }
    },
    {
        from: 'Dante AVIO 2x0',
        to: ['Hall', 'StageRack-Dante-Switch', '12'],
        features: {
            media: 'Dante',
            hasPOE: true
        }
    },
    {
        from: 'PreSonus AVB-D16',
        to: ['Hall', 'StageRack-Dante-Switch', '14'],
        features: {
            media: 'Dante'
        }
    },


    {
        from: ['Office', 'Switch', '25'],
        to: ['Office', 'SwitchB', '25'],

        
    },

    {
        from: ['Office', 'Switch', '23'],
        to: ['Office', 'NVR', 'Uplink']
    }
])

export default patches