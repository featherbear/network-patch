type Location = string
const ports: { [location: Location]: { [panelId: string]: Panel } } = {
    Hall: {
        StageRack: {
            name: 'Stage Rack',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9',

                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                }
            ]
        },
        'StageRack-Switch': {
            name: "Switch (Ports 1-8)",
            features: {
                isSwitch: true
            },
            ports: [
                { id: '1' },
                { id: '2' },
                { id: '3' },
                { id: '4' },
                { id: '5' },
                { id: '6' },
                { id: '7' },
                { id: '8' },
            ]
        },
        'StageRack-Dante-Switch': {
            name: 'Switch (Ports 9-16)',
            features: {
                isSwitch: true
            },
            ports: [
                { id: '9' },
                { id: '10' },
                { id: '11' },
                { id: '12' },
                { id: '13' },
                { id: '14' },
                { id: '15' },
                { id: '16' },
            ]
        },
        'StageRack-AVB-Switch': {
            name: 'AVB Switch (Stage Rack)',
            features: {
                isSwitch: true
            },
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                }
            ]
        },
        AVRack: {
            name: 'AV Rack',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                }
            ]
        },

        'AVRack-Switch': {
            name: 'Switch',
            features: {
                isSwitch: true
            },
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
            ]
        },
        RearWall: {
            name: 'Rear Wall',
            ports: [
                {
                    id: '1',
                    features: {
                        isHanging: true
                    },
                },
                {
                    id: '2',
                    features: {
                        isHanging: true
                    },
                },
                {
                    id: '3',
                    features: {
                        isHanging: true
                    },
                },
            ]
        },
        LightBar1: {
            name: 'Lighting Bar 1',
            ports: [
                {
                    id: '1',
                    features: {
                        isHanging: true
                    },
                },
                {
                    id: '2',
                    features: {
                        isHanging: true
                    },
                },
            ]
        },
        LightBar2: {
            name: 'Lighting Bar 2',
            ports: [
                {
                    id: '1',
                    features: {
                        isHanging: true
                    },
                },
                {
                    id: '2',
                    features: {
                        isHanging: true
                    },
                },
            ]
        },
        ProjectorScreen: {
            name: 'Projector Screen',
            ports: [
                {
                    id: '1',
                    features: {
                        isHanging: true
                    },
                },
            ]
        },

    },
    Chapel: {
        AVRack: {
            name: 'AV Rack',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                }
            ]
        },
        'AVRack-Switch': {
            name: 'Switch',
            features: {
                isSwitch: true
            },
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
            ]
        },
        'AVRack-AVB-Switch': {
            name: 'AVB Switch (AV Rack)',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                }
            ]
        },
        StageRack: {
            name: 'Stage Rack',
            ports: [
                {
                    id: '1',
                    features: {
                        isHanging: true
                    },
                },
                {
                    id: '2',
                    features: {
                        isHanging: true
                    }
                }
            ]
        }
    },
    Office: {
        Switch: {
            name: 'Switch',
            features: {
                isSwitch: true
            },
            ports: [
                {
                    id: '1',
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                },
                {
                    id: '25',
                    description: 'SFP'
                }
            ]
        },
            SwitchB: {
                name: 'Switch B',
                features: {
                    isSwitch: true
                },
                ports: [
                    {
                        id: '1',
                    },
                    {
                        id: '2'
                    },
                    {
                        id: '3'
                    },
                    {
                        id: '4'
                    },
                    {
                        id: '5'
                    },
                    {
                        id: '6'
                    },
                    {
                        id: '7'
                    },
                    {
                        id: '8'
                    },
                    {
                        id: '9'
                    },
                    {
                        id: '10'
                    },
                    {
                        id: '11'
                    },
                    {
                        id: '12'
                    },
                    {
                        id: '13'
                    },
                    {
                        id: '14'
                    },
                    {
                        id: '15'
                    },
                    {
                        id: '16'
                    },
                    {
                        id: '17'
                    },
                    {
                        id: '18'
                    },
                    {
                        id: '19'
                    },
                    {
                        id: '20'
                    },
                    {
                        id: '21'
                    },
                    {
                        id: '22'
                    },
                    {
                        id: '23'
                    },
                    {
                        id: '24'
                    },
                    {
                        id: '25',
                        description: 'SFP'
                    }
                ]
            },
        Panel1: {
            name: 'Building',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                }
            ]
        },
        Panel2: {
            name: 'Chapel',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                }
            ]
        },
        Panel3: {
            name: 'Hall',
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                },
                {
                    id: '9'
                },
                {
                    id: '10'
                },
                {
                    id: '11'
                },
                {
                    id: '12'
                },
                {
                    id: '13'
                },
                {
                    id: '14'
                },
                {
                    id: '15'
                },
                {
                    id: '16'
                },
                {
                    id: '17'
                },
                {
                    id: '18'
                },
                {
                    id: '19'
                },
                {
                    id: '20'
                },
                {
                    id: '21'
                },
                {
                    id: '22'
                },
                {
                    id: '23'
                },
                {
                    id: '24'
                }
            ]
        },

        NVR: {
            name: 'Security NVR',
            ports: [
                {
                    id: 'Uplink'
                },
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                },
                {
                    id: '6'
                },
                {
                    id: '7'
                },
                {
                    id: '8'
                }
            ]
        }
    },
    // The room next to the kitchen
    Kids: {
        TV: {
            name: "TV Wall",
            ports: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                }
            ]
        }
    },
    // The small room near the front of the church
    CryRoom: {

    },
    Creche: {
        TV: {
            name: "TV Wall",
            ports: [
                { id: '1' }
            ]
        }
    }
}

export default ports