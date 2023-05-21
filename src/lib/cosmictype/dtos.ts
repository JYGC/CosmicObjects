export interface CosmicTypeDTO {
    id: string
    name: string
    description: string
}

export const newCosmicTypeDTO = (name: string, description: string): CosmicTypeDTO => ({
    id: "",
    name: name,
    description: description
});

export const cosmicTypeTableName = "cosmictypes";
