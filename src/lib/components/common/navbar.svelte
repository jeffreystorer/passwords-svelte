<script>
  import { page } from '$app/stores';
  import createRandomPW from '$lib/utils/createRandomPW';
  function handleRandom(e){
    e.preventDefault();
    const copyToClipboard = (str) => {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(str)
      return Promise.reject("The Clipboard API is not available.")
    }
    const randomPW = createRandomPW()
    copyToClipboard(randomPW)
  }
  const routes = [
    {
      path: '/passwords',
      title: 'Passwords'
    },
    {
      path: '/creditcards',
      title: 'Credit Cards'
    },
  ];
</script>

<nav>
  <ul>        
  {#each routes as route}
    <li>
      <a
        class={$page.url.pathname === route.path ? 'active' :  ''} 
        href={route.path}>{route.title}
      </a>
    </li>
  {/each}
    <li>
      <p>More...</p>
      <ul>
        <li>                 
          <a
          href="/addpassword"
          >
            Add Password
          </a>
        </li>
        <li>                 
          <a
          href="/addcreditcard"
          >
            Add Card
          </a>
        </li>
        <li>
          <button on:click={handleRandom}>Random PW href Clipboard</button>
        </li>
        <li class='divider'></li>
        <li>                  
          <a
          href="/" 
          >
            Sign Out
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>