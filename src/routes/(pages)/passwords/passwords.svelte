<script>
	import { goto } from '$app/navigation';
	let { handleDelete, handleClickPassword, handleClickCopyPW } = $props;
	import generateGroupedPWs from '$lib/utils/generateGroupedPWs';
	const { pws, groups, groupCounts } = generateGroupedPWs();
	console.log('😊😊 pws', pws);
	console.log('😊😊 groups', groups);
	console.log('😊😊 groupCounts', groupCounts);
	let innerHeight = window.innerHeight;
	let availableHeight = innerHeight - 67;
	let groupCount = groups.length;
	let lineHeight = Math.floor(availableHeight / groupCount).toString() + 'px';
	let fontSize = Math.floor(((availableHeight / groupCount) * 2) / 3).toString() + 'px';
</script>

<div id="passwords">
	<h2>Passwords Component</h2>
	<!-- <div>
      <GroupedVirtuoso
        ref={virtuoso}
        groupCounts={groupCounts}
        groupContent={(index) => {
          return (
            <div id='groupContent'>
              {groups[index]}
            </div>
          );
        }}
        itemContent={(index) => {
          return (
            <details>
              <summary>{pws[index].name}</summary>
              <table>
                <tbody>
              {pws[index].url && (
                <tr>
                  <th>
                    Url:
                  </th>
                  <td>
                    <a
                      href={pws[index].url}
                      target='_blank'
                      rel='noreferrer'>
                      {pws[index].url}
                    </a>
                  </td>
                </tr>                        
              )}
              {pws[index].username && (
                <tr>
                  <th>Username:</th>
                  <td>{pws[index].username}</td>
                </tr>
              )}
              {pws[index].password && (
                <tr>
                  <th> Password:</th>
                  <td
                    onClick={() => handleClickPassword(index)}
                    >
                    {pws[index].password}
                  </td>
                </tr>
              )}
              {pws[index].notes && (
                <tr>
                  <th>Notes:</th>
                  <td>
                    {pws[index].notes}</td>
                </tr>
              )}
                </tbody>
              </table>
              
              <footer>
                <button onClick={() => navigate('/pages/editpassword/' + index)}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(index)}>
                  Delete
                </button>
                <button
                  onClick={() => handleClickCopyPW(index)}>
                  Copy
                </button>
              </footer>
            </details>
          );
        }}
      />
    </div>
  <ul>
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
    lineHeight: lineHeight,
    fontSize: fontSize,
  }
</stlye> -->
