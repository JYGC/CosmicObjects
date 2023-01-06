/* /update */

import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

import { getDatabaseClient } from '$lib/database';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            let data = await request.formData();
            let name = data.get('name');
            if (name === null || name.trim().length === 0) throw redirect(300, '/update');
            const db = await getDatabaseClient();
            let record = await db.update(data.get('id'), {
                name: name,
                type: data.get('type')
            });
            throw redirect(300, '/');
        } catch (ex) {
            throw redirect(300, '/');
        }
    }
};
