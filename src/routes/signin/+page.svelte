<script lang="ts">
	import type { ActionData } from '../shop/products/$types';
	import { Input, PasswordInput } from '$lib/components';

	export let form: ActionData;
</script>

<main>
	<form action="POST" class="my-4 mx-auto">
		<div>
			<Input
				type="email"
				id="email"
				placeholder="yourname@email.com"
				label="Email"
				value={form?.data?.email ?? ''}
				required={true}
				errors={form?.errors?.email}
			/>
		</div>

		<div>
			<PasswordInput
				id="password"
				type="password"
				placeholder="Enter password"
				label="Password"
				required={true}
				value={form?.data?.password ?? ''}
				autocomplete=""
				enterKeyHint="send"
				errors={form?.errors?.password}
			/>
		</div>

		<div class="flex items-center justify-between">
			<div>
				<Checkbox class="font-normal text-gray-400">Remember me</Checkbox>
			</div>
			<div>
				<a href="/reset-password" class="block text-sm text-blue-500 hover:text-gray-500"
					>Forgot password?</a
				>
			</div>
		</div>
	</form>
</main>
