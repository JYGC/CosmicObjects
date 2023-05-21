import { cosmicTypesFromCache } from "$lib/cosmictype/cache";

export interface CosmicDTO {
    id: string
    name: string
    cosmicType: string
}

export const newCosmicDTO = (): CosmicDTO => ({
    id: "",
    name: "",
    cosmicType: ""
});

export const isCosmicDTOValid = (cosmic: CosmicDTO): boolean =>
    typeof cosmic.name !== "undefined" && cosmic.name !== null && cosmic.name.trim().length > 0 &&
    typeof cosmic.cosmicType !== "undefined" && cosmicTypesFromCache.some(ct => ct.id === cosmic.cosmicType);

export const cosmicTableName = "cosmics";
