<script>
    import {Card} from '../components/card.svelte';
    import {dataStore} from '../stores//dataStore';
</script>

<svelte:head>
    <title>Data Diary</title>
</svelte:head>

<h1>Data Diary</h1>

{#each $dataStore as user}
<Card user={user}/>
{/each}