<script>
	import { goto } from '$app/navigation';
	let { handleDelete, handleClickPassword, handleClickCopyPW } = $props;
	import generateGroupedPWs from '$lib/utils/generateGroupedPWs';
	const { pws, groups, groupCounts } = generateGroupedPWs();
	let innerHeight = window.innerHeight;
	let availableHeight = innerHeight - 67;
	let groupCount = groups.length;
	let lineHeight = Math.floor(availableHeight / groupCount).toString() + 'px';
	let fontSize = Math.floor(((availableHeight / groupCount) * 2) / 3).toString() + 'px';
</script>

<div id="passwords">
  <div id='groupContent'>
    {#each groups as group}
    {group}
    {/each}
  </div>
  <div>
    {#each pws as pw, index}
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
  <!-- <ul>
    {groupCounts
      .reduce(
        ({ firstItemsIndexes, offset }, count) => {
          return {
            firstItemsIndexes: [...firstItemsIndexes, offset],
            offset: offset + count,
          };
        },
        { firstItemsIndexes: [], offset: 0 }
      )
      .firstItemsIndexes.map((itemIndex, index) => (
        <li key={index}>
          {/*eslint-disable-next-line*/}
          <a
            href='#'
            onclick={(e) => {
              e.preventDefault();
              virtuoso.current.scrollToIndex({
                index: itemIndex,
              });
            }}>
            {groups[index]}
          </a>
        </li>
      ))}
  </ul> -->
</div>

<!-- <stlye>
  ul {
    line-height: lineHeight;
    font-size: fontSize;
  }
</stlye> -->
