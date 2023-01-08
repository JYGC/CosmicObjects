export interface Cosmic {
    id: string
    name: string
    cosmicType: string
}

export function newCosmic(): Cosmic {
    return {
        id: "",
        name: "",
        cosmicType: ""
    };
}

export function isCosmicValid(cosmic: Cosmic): Boolean {
    return (typeof cosmic.name !== "undefined") && cosmic.name !== null && cosmic.name.trim().length > 0;
}

export const cosmicTableName = "cosmics";
