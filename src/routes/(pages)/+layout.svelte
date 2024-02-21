<script>
  //TODO Add BackToTop
  import NavBar from '$lib/components/common/navbar.svelte';
  import ConfirmDeleteModal from '$lib/components/common/confirmdeletemodal.svelte';
</script>

<header>
  <h1>Storer PM</h1>
  <NavBar />
</header>
<main>
  <slot />
  <ConfirmDeleteModal />
</main>


<style>
  header {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 1em;
        margin: 0.5em auto 1em auto;
        width: fit-content;
    }

    header > h1 {
        display: inline-flex;
        height: fit-content;
        width: fit-content;
        background-color: var(--background-button);
        color: var(--background-blue);
        box-shadow: 0em 0.875em 1.75em rgba(0, 0, 0, 0.25),
        0 0.625em 0.625em rgba(0, 0, 0, 0.28);
        font-size: var(--step-2);
        margin-left: 0.25em;
        padding-right: 0.5em; /* 0.5em .5em 0 .75em; */
        overflow: hidden;
    }

    header > h1::before {
        content: "";
        box-sizing: content-box;
        display: inline;
        padding: 0 0.75em;
        color: var(--color-black);
        background: transparent var(--logo) left/1em auto no-repeat;
        opacity: 1;
        position: relative;
    }
</style>