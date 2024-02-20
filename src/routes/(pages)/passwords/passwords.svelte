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
  })
</script>

<div id="passwords">
  <div>
    {#each Object.keys(groupedPWs) as group}
    <div id={group} class='groupName'>
    {group}
    {#each groupedPWs[group] as pw, index}
    <details>
              <summary>{pw.name}</summary>
              <table>
                <tbody>
              {#if pw.url}
                <tr>
                  <th>
                    Url:
                  </th>
                  <td>
                    <a
                      href={pws[index].url}
                      target='_blank'
                      rel='noreferrer'>
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
                  <td
                    on:click={() => handleClickPassword(index)}
                    >
                    {pw.password}
                  </td>
                </tr>
              {/if}
              {#if pw.notes}
                <tr>
                  <th>Notes:</th>
                  <td>
                    {pws[index].notes}</td>
                </tr>
              {/if}
                </tbody>
              </table>
              
              <footer>
                <button on:click={() => navigate('/pages/editpassword/' + index)}
                >
                  Edit
                </button>
                <button on:click={() => handleDelete(index)}>
                  Delete
                </button>
                <button
                  on:click={() => handleClickCopyPW(index)}>
                  Copy
                </button>
              </footer>
    </details>
    {/each}
    </div>
    {/each}
  </div>
  <ul id='groupList'>
    {#each groups as group}
      <li><a href='*' on:click={(e) => {e.preventDefault(); document.getElementById(group).scrollIntoView(true)}}>{group}</a></li>
    {/each}
  </ul>
</div>