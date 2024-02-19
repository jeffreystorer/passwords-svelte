<script>
  import { goto } from '$app/navigation';
  let loading = $state(true);
  import Passwords from '/src/routes/(pages)/passwords/passwords.svelte';
  import { getItems } from '$lib/services';
  import { showModal, currentKey, rowIndex, page, pwData, userId}  from '$lib/store';
  let passwordArray = $state([]);
  $effect(() => {
    getItems($userId).then((data) => {
      for (const [key, value] of Object.entries(data)) {
        if (value.type === 'pw') {
          passwordArray.push({
            key: key,
            name: value.name,
            url: value.url,
            username: value.username,
            password: value.password,
            notes: value.notes,
          });
        }
      }
      passwordArray.sort((a, b) => (a.name > b.name ? 1 : -1));
      $pwData = passwordArray;
      loading = false;
    });
  });

  function handleDelete(i){
    $page = 'passwords';
    $currentKey = $pwData[i].key;
    $rowIndex = i;
    $showModal = true;
    goto('/pages/confirmdelete')
  };

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  const handleClickPassword = (i) => {
    copyToClipboard($pwData[i].password);
  };

  const handleClickCopyPW = (i) => {
    copyToClipboard($pwData[i].password);
  };
</script>

  {#if loading}
   <h2>Loading . . . </h2>
  {:else}
    <Passwords
      handleDelete={handleDelete}
      handleClickPassword={handleClickPassword}
      handleClickCopyPW={handleClickCopyPW}
    />
  {/if}