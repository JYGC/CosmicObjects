import { cosmicTypesFromCache } from "$lib/cosmictype/cache";

export interface CosmicDTO {
    id: string
    name: string
    cosmicType: string
}

export function newCosmicDTO(): CosmicDTO {
    return {
        id: "",
        name: "",
        cosmicType: ""
    };
}

export function isCosmicDTOValid(cosmic: CosmicDTO): boolean {
    return typeof cosmic.name !== "undefined" && cosmic.name !== null && cosmic.name.trim().length > 0 &&
            typeof cosmic.cosmicType !== "undefined" && cosmicTypesFromCache.some(ct => ct.id === cosmic.cosmicType);
}

export const cosmicTableName = "cosmics";
