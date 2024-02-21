<script>
  import { goto } from '$app/navigation';
  import { deleteItem } from '$lib/services';
  import { showModal, page, currentKey, userId, pwData, rowIndex, ccData } from '$lib/store';

  
  function handleDelete(){
    switch ($page) {
      case 'passwords': 
        deleteItem($userId, $currentKey);
        $pwData = $pwData.filter((_, i) => i !== $rowIndex);
        $showModal = false;
        goto('/passwords');
        break;
      case 'creditcards':
        deleteItem($userId, $currentKey);
        $ccData = $ccData.filter((_, i) => i !== $rowIndex);
        $showModal = false;
        goto('/creditcards');
        break;
      default:
        break;
    }
    
  };
  
  function closeModal(e){
    e.preventDefault();
    $showModal= false;
    let path;
    switch ($page) {
      case 'passwords':
        path = '/passwords';
        break;
      case 'creditcards':
        path = '/creditcards';
        break;
      default:
        break;
    }
    goto(path);
  }

  const className = $showModal ? 'open modalClose' : 'modalClose'
  </script>

    <div id='modal' class={className} {closeModal}>
      <section>
        <header>
          <h2>Heads up!</h2><a className='modalClose' {closeModal} hidden></a>
        </header>
        <p>Are you sure you want to delete this item?</p>
        <footer>
          <button className='not-stacked modalClose' {closeModal}>
            Cancel
          </button>
          <button className='not-stacked' {handleDelete}>
            Delete
          </button>
        </footer>
      </section>
    </div>

<style>
  
#modal > section > footer > button:last-child:hover {
    appearance: none;
    background-color: var(--background-white);
    border-radius: 0.5em;
    color: var(--color-link-hover);
    -webkit-appearance: none;
}
/* START MODALS  */
/* This is the modal overlay. */
#modal {
    align-items: center;
    background: var(--color-modal-fader);
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    left: -100%;
    opacity: 0;
    overflow: auto;
    padding: 0;
    position: fixed;
    transition: left 0s 0.5s, opacity 0.5s;
    width: 100%;
    z-index: 1;
}

#modal > section {
    background: var(--background-white);
    border: var(--border-hairline);
    border-radius: var(--borderRadius-outer);
    box-shadow: var(--shadow-chrome);
    display: flex;
    flex-direction: column;
    left: 0%;
    height: fit-content;
    opacity: 1;
    outline: 0;
    overflow: auto;
    padding: 0.5em 1em;
    position: relative;
    transition: left 0.5s;
    width: fit-content;

    /*One big thing to pay attention to is the  on the inner DIV. If you omit auto margin on the VERTICAL (a direction that normally ignores margin!) flex will chop off the top of your content and you won’t be able to scroll up to it. Grid often drops the ball on this worse which is why I favor flex here. If you’re going to use a container to center its children, I really suggest using flex with margin on an inner container. Failing to do so can really screw you over.*/
}

#modal > section > header {
    border-bottom: 0.0625em solid rgb(222, 226, 230);
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
    width: 100%;
}

#modal section > header > h2 {
    font-size: var(--step-0);
    font-weight: 700;
    margin-left: 0.5em;
} /* This link is the X to close the modal.*/

#modal section > header > h2 + a.modalClose {
    box-sizing: content-box;
    display: inline;
    width: 1em;
    height: 1em;
    padding: 0.25em 1em;
    color: var(--color-black);
    background: transparent var(--x) center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
    position: relative;
}


#modal
    section
    > form
    > fieldset
    > label
    > input[type="number"] {
    margin-top: 0.5em;
}


#modal footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75em;
}

#modal footer {
    border-top: 0.0625em solid rgb(222, 226, 230);
}


#modal section > footer button {
    align-items: flex-start;
    display: inline-block;
    margin: 0.25em;
    position: relative;
}


#modal
    section
    > footer
    > button:first-child {
    color: var(--color-white);
    background-color: var(--background-button-secondary);
    border-color: var(--background-button-secondary);
}

#modal
    section
    > footer
    > button:last-child {
    color: var(--color-white);
    background-color: var(--background-button-primary);
    border-color: var(--background-button-primary);
}

#modal.open > section {
    left: 0;
}
#modal.open {
    left: 0;
    opacity: 1;
    transition: left 0s, opacity 0.5s;
}


</style>
