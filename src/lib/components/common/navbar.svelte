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
      title: 'PWs'
    },
    {
      path: '/creditcards',
      title: 'CCs'
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

<style>
  nav {
    height: fit-content;
  }
  nav ul {
      display: block;
      background: var(--background-white);
      height: fit-content;
      list-style-type: none;
      width: fit-content;
  }
  nav li {
      display: inline-block;
      margin: 0 0.125em;
  }
  nav a,
  nav p {
      background-color: var(--color-white);
      color: var(--color-black);
      font-family: var(--font-sans-serif);
      font-size: var(--step-2);
      font-weight: 500;
      line-height: 1.5em;
      margin-top: 0;
      outline: 0;
      overflow-wrap: break-word;
      padding: 0 0.25em;
      text-align: center;
      text-decoration: none;
      text-size-adjust: 100%;
  }
  nav a:link,
  nav a:visited {
      color: var(--color-black);
  }
  nav a:hover,
  nav a.inactive:hover {
      background-color: var(--color-link-hover);
      color: var(--color-white);
  }
  nav a.active,
  .active {
      background: var(--color-link-active);
      color: var(--color-white);
  }
  nav a.inactive,
  .inactive {
      background: var(--color-white);
      color: var(--color-black);
  }
  
  /*. dropdown = nav > ul > li:last-of-type*/

  nav > ul > li:last-of-type {
      position: relative;
      display: inline-block;
  }

  /*.content = nav > ul > li:last-of-type > ul*/

  nav > ul > li:last-of-type > ul {
      display: none;
      position: absolute;
      background-color: var(--background-button);
      margin-left: -8.5em;
      padding: 0.75em 1em;
      width: 15em;
      z-index: 2;
  }
  nav > ul > li:last-of-type:hover ul {
      display: flex;
      flex-direction: column;
      text-align: left;
  }

  nav > ul > li:last-of-type ul > li > button,
  nav > ul > li:last-of-type ul > li > a {
      background-color: var(--background-button);
      border: none;
      font-size: inherit;
      font-weight: normal;
      text-align: left;
  }
  nav > ul > li:last-of-type ul div + li {
      font-weight: 700;
  }
</style>