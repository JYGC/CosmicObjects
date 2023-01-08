/* /cosmictype/api/read */

import { cosmicTypeTableName } from '$lib/cosmictype/schemas';
import { getDatabaseClient } from '$lib/database';
import type { RequestHandler } from '@sveltejs/kit';

export const GET = (async () => {
    const db = await getDatabaseClient();
    const cosmicTypes = await db.select(cosmicTypeTableName);
    return new Response(JSON.stringify(cosmicTypes));
}) satisfies RequestHandler;
