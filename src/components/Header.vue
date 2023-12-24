<template>
    <header>
        <router-link to="/">Main</router-link>
        <router-link to="/fantasy">Fantasy</router-link>
        <router-link to="/royale">Royale</router-link>
        <router-link to="/rpg">RPG</router-link>
        <router-link to="/shooter">Shooter</router-link>
        <router-link to="/strategy">Strategy</router-link>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    color: #aaa;
    font-size: 30px;
    background: black;
}
a {
    text-decoration: none;
    color: aqua;
}
.router-link-active {
    color: aliceblue;
}
</style>