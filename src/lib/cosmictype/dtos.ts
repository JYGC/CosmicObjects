export interface CosmicTypeDTO {
    id: string
    name: string
    description: string
}

export function newCosmicType (name: string, description: string): CosmicTypeDTO {
    return {
        id: "",
        name: name,
        description: description
    }
}

export const cosmicTypeTableName = "cosmictypes";
