<script lang="ts">
	import type { ActionData } from './$types'
	import { Button } from 'flowbite-svelte'
	import { Input, TextArea } from '$lib/components'
	export let form
</script>

<form method="post">
	<div class="mb-6 space-y-5">
		<div class="mb-6">
			<Input
				id="name"
				placeholder="Name"
				label="Name"
				required={true}
				type="text"
				errors={form?.errors?.name}
			/>
		</div>

		<div class="mb-6">
			<Input
				id="email"
				placeholder="yourname@gmail.com"
				label="Email"
				required={true}
				type="email"
				errors={form?.errors?.email}
			/>
		</div>

		<div class="mb-6">
			<Input
				id="subject"
				placeholder="Subject"
				label="Subject"
				required={true}
				type="text"
				errors={form?.errors?.subject}
			/>
		</div>

		<div class="mb-6">
			<TextArea
				id="message"
				placeholder="Type your message here..."
				label="Message"
				required={true}
				type="textarea"
				errors={form?.errors?.message}
			/>
		</div>
		<div>
			<Button type="submit" color="green" class="flex-between flex w-full">
				<span class="mx-auto">Send Message</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
						/>
					</svg>
				</span>
			</Button>
		</div>
	</div>
</form>
