import defaultCosimcTypes from '$lib/cosmictype/default-data';
import { cosmicTypeTableName } from '$lib/cosmictype/dtos';
import { getDatabaseClient } from '$lib/database';

const addDefaultData = async () => {
    const db = await getDatabaseClient();
    for (let i = 0; i < defaultCosimcTypes.length; i++) {
        const queryReturn: [{ result: [{ id: string }] }] = await db.query(`SELECT * FROM ${cosmicTypeTableName} WHERE name = $name`, {
            name: defaultCosimcTypes[i].name
        });
        const inboundDCosmicTypeData = {
            name: defaultCosimcTypes[i].name,
            description: defaultCosimcTypes[i].description
        };
        if (queryReturn[0].result.length > 0) {
            await db.update(queryReturn[0].result[0].id, inboundDCosmicTypeData);
        } else {
            await db.create(cosmicTypeTableName, inboundDCosmicTypeData);
        }
    }
};

addDefaultData();