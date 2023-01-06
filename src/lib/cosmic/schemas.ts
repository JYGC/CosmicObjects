export interface Cosmic {
    id: string
    name: string
    type: string
}

export function newCosmic(): Cosmic {
    return {
        id: "",
        name: "",
        type: ""
    };
}

export function isCosmicValid(cosmic: Cosmic): Boolean {
    return (typeof cosmic.name !== 'undefined') && cosmic.name !== null && cosmic.name.trim().length > 0;
}