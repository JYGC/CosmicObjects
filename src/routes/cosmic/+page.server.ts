import type { PageServerLoad } from '../$types';

import { getDatabaseClient } from '$lib/database';

export const load = (async () => {
    const db = await getDatabaseClient();
    const dbReturn: [{ result: [] }] = await db.query('SELECT id, name, cosmicType.name as cosmicType FROM cosmics');
    const cosmics = dbReturn[0].result
    return { cosmics };
}) satisfies PageServerLoad;
