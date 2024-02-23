<script>
	let { handleDelete, handleClickPassword, handleClickCopyPW } = $props;
	import generateGroupedPWs from '$lib/utils/generateGroupedPWs';
	const { pws, groupedPWs, groups } = generateGroupedPWs();
	let innerHeight = window.innerHeight;
	let availableHeight = innerHeight - 67;
	let groupCount = groups.length;
	let lineHeight = Math.floor(availableHeight / groupCount).toString() + 'px';
	let fontSize = Math.floor(((availableHeight / groupCount) * 2) / 3).toString() + 'px';
	$effect(() => {
		document.getElementById('groupList').style.lineHeight = lineHeight;
		document.getElementById('groupList').style.fontSize = fontSize;
	});
</script>

<section>
	<div>
		{#each Object.keys(groupedPWs) as group}
			<div id={group} class="groupName">
				{group}
				{#each groupedPWs[group] as pw, index}
					<details>
						<summary>{pw.name}</summary>
						<table>
							<tbody>
								{#if pw.url}
									<tr>
										<th> Url: </th>
										<td>
											<a href={pws[index].url} target="_blank" rel="noreferrer">
												{pw.url}
											</a>
										</td>
									</tr>
								{/if}
								{#if pw.username}
									<tr>
										<th>Username:</th>
										<td>{pw.username}</td>
									</tr>
								{/if}
								{#if pw.password}
									<tr>
										<th> Password:</th>
										<td on:click={() => handleClickPassword(index)}>
											{pw.password}
										</td>
									</tr>
								{/if}
								{#if pw.notes}
									<tr>
										<th>Notes:</th>
										<td> {pws[index].notes}</td>
									</tr>
								{/if}
							</tbody>
						</table>

						<footer>
							<button on:click={() => navigate('/pages/editpassword/' + index)}> Edit </button>
							<button on:click={() => handleDelete(index)}> Delete </button>
							<button on:click={() => handleClickCopyPW(index)}> Copy </button>
						</footer>
					</details>
				{/each}
			</div>
		{/each}
	</div>
	<ul id="groupList">
		{#each groups as group}
			<li>
				<a
					href="*"
					on:click={(e) => {
						e.preventDefault();
						document.getElementById(group).scrollIntoView(true);
					}}>{group}</a
				>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		justify-content: center;
		/* phone only 599px */
		@media screen and (max-width: 37.4375em) {
			width: 100%;
		}
		/* tablet portrait up 600px */
		@media screen and (min-width: 37.5em) {
			width: 50%;
		}
		/* table landscape up 900px */
		@media screen and (min-width: 56.25em) {
			width: 40%;
		}
		/* desktop up 1200px */
		@media screen and (min-width: 75em) {
			width: 40%;
		}
		/* big desktop up 1800px */
		@media screen and (min-with: 112.5em) {
			width: 40%;
		}
	}

	section > div {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding-left: 0.5em;
	}

	ul {
		display: flex;
		flex-direction: column;
		height: fit-content;
		list-style: none;
		margin: 0 0.5em;
	}

	ul > li,
	ul > li > a {
		font-size: inherit;
		line-height: inherit;
	}

	.groupName {
		color: var(--color-black);
		font-size: var(--step--1);
		font-weight: bold;
		background-color: var(--background-white);
		text-align: left;
		min-width: 21.875em;
	}
</style>
