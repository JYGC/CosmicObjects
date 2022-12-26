/* /delete */

import type { Actions } from '$/types';
import { redirect } from '@sveltejs/kit';

import { getDatabaseClient } from '$lib/database';

export const actions: Actions = {
    default: async ({ request }) => {
        let data = await request.formData();
        const db = await getDatabaseClient();
        let record = await db.delete(data.get('id'));
        throw redirect(300, '/');
    }
};