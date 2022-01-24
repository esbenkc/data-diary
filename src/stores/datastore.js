import {writable} from 'svelte/store';

export const dataStore = writable([]);

const fetchData = async() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    dataStore.set(data);
    return data;
};

fetchData();
