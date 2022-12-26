import type { PageServerLoad } from './$types';

import { getDatabaseClient } from '$lib/database';

export const load = (async () => {
    const db = await getDatabaseClient();
    const objects = db.select('objects');
    return { objects };
}) satisfies PageServerLoad;