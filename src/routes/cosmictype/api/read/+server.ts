/* /cosmictype/api/read */

import { cosmicTypesFromCache } from '$lib/cosmictype/cache';
import type { RequestHandler } from '@sveltejs/kit';

export const GET = (async () =>
    new Response(JSON.stringify(cosmicTypesFromCache))) satisfies RequestHandler;
