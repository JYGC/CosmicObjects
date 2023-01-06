import type { PageServerLoad } from './$types';

import { getDatabaseClient } from '$lib/database';

export const load = (async () => {
    const db = await getDatabaseClient();
    const cosmics = db.select('cosmics');
    return { cosmics };
}) satisfies PageServerLoad;