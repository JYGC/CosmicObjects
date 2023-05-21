import { cosmicTypeTableName, type CosmicTypeDTO } from './dtos';
import { getDatabaseClient } from '$lib/database';

export const getAllCosmicTypes = async (): Promise<CosmicTypeDTO[]> => {
    const db = await getDatabaseClient();
    return await db.select(cosmicTypeTableName);
}