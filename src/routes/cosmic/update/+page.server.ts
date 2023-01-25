/* /update */

import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

import { getDatabaseClient } from '$lib/database';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const name = data.get('name');
            const id = data.get('id');
            if (id === null || id.toString().trim().length === 0 || name === null ||
                name.toString().trim().length === 0) throw redirect(300, '/cosmic/read');
            const db = await getDatabaseClient();
            await db.update(id.toString(), {
                name: name,
                cosmicType: data.get('cosmicType')
            });
        } catch (ex) {
            console.log(ex);
            throw redirect(300, '/cosmic/update');
        }
        throw redirect(300, '/cosmic/');
    }
};
