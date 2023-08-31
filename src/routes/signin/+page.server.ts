import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// const session = await locals.validate()
	// if (session) {
	// 	throw redirect(303, '/dashboard')
	// }
	return {};
};

export const actions: Actions = {
	login: async () => {
		return {};
	}
};
