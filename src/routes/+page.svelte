<script>
    //TODO Add required
    import { goto } from '$app/navigation'
    import { initializeApp } from 'firebase/app';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    import { firebaseConfig } from '$lib/services';
    import { userId } from '$lib/store';
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const onsubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const email = 'pm@storer.net' //formJson.email;
        const password = 'Pasit6347boled!'  //formJson.password;
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            $userId = user.uid;
            goto('/passwords');
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
        };
</script>

<header>
    <h1>Storer PM</h1>
</header>
<main>
<form id='sign-in' onsubmit={onsubmit}>
    <fieldset>
    <label>
        Email:
        <input
        autoComplete='email'
        type='email'
        name='email'
        />
    </label>
    <label>
        Password:
        <input
        autoComplete='current-password'
        type='password'
        name='password'
        />
    </label>
    <button class={'not-stacked'} type='submit'>
        Sign In
    </button>
    </fieldset>
</form>
</main>