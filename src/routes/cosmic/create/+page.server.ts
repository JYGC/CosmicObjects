/* /create */

import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

import { getDatabaseClient } from '$lib/database';
import { cosmicTableName } from '$lib/cosmic/dtos';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const name = data.get('name');
            if (name === null ||  name.toString().trim().length === 0) return;
            const db = await getDatabaseClient();
            await db.create(cosmicTableName, {
                name: name,
                cosmicType: data.get('cosmicType')
            });
        } catch (ex) {
            console.log(ex);
            throw redirect(300, '/cosmic')
        }
        throw redirect(300, '/cosmic');
    }
};