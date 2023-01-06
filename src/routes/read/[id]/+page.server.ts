/* /read */

import type { PageServerLoad } from './$types';

import { getDatabaseClient } from '$lib/database';

export const load = (async (page) => {
    const db = await getDatabaseClient();
    const id = page.params.id;
    const cosmics = await db.select(id)

    return {
        cosmic: cosmics[0]
    }
}) satisfies PageServerLoad;
