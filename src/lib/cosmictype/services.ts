import { cosmicTypeTableName, type CosmicTypeDTO } from './dtos';
import { getDatabaseClient } from '$lib/database';

export async function getAllCosmicTypes(): Promise<CosmicTypeDTO[]> {
    const db = await getDatabaseClient();
    return await db.select(cosmicTypeTableName);
}