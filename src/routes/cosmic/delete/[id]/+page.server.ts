/* /delete */

import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

import { getDatabaseClient } from '$lib/database';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const db = await getDatabaseClient();
            const id = data.get('id');
            if (id === null || isFinite.toString().trim().length === 0) return;
            await db.delete(id.toString());
        } catch (ex) {
            throw redirect(300, '/cosmic');
        }
        throw redirect(300, '/cosmic');
    }
};