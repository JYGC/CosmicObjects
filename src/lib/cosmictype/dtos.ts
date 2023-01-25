export interface CosmicTypeDTO {
    id: string
    name: string
    description: string
}

export function newCosmicTypeDTO (name: string, description: string): CosmicTypeDTO {
    return {
        id: "",
        name: name,
        description: description
    }
}

export const cosmicTypeTableName = "cosmictypes";
