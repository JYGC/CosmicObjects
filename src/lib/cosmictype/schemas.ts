export interface CosmicType {
    id: string
    name: string
    description: string
}

export function newCosmicType (name: string, description: string): CosmicType {
    return {
        id: "",
        name: name,
        description: description
    }
}

export const cosmicTypeTableName = "cosmictypes";
