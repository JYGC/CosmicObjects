/* /update */

import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

import { getDatabaseClient } from '$lib/database';

export const load = (async (page) => {
    const db = await getDatabaseClient();
    const id = page.params.id;
    const cosmics = await db.select(id)

    return {
        cosmic: cosmics[0]
    }
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }) => {
        let data = await request.formData();
        const db = await getDatabaseClient();
        let record = await db.update(data.get('id'), {
            name: data.get('name'),
            type: data.get('type')
        });
        throw redirect(300, '/');
    }
};