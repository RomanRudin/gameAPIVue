<script setup>
defineProps({
    game: {
        type: Object,
        default: {
            id: 1,
            title: "Game",
            short_description: "Placeholder Text",
            release_date: "31.12.2023",
            platform: "Windows",
            thumbnail: "https://img.goodfon.ru/original/2880x1800/c/ca/zvezdy-svechenie-tumannosti.jpg"
        }
    },
})
</script>

<template>
    <div>
        <img :src="game.thumbnail" />
        <h1>{{ game.title }}</h1>
        <p>{{ game.short_description }}</p>
        <nav>
            <i class="fas fa-desktop"></i>
            <h4>{{ game.platform }}</h4>
        </nav>
        <nav>
            <i class="far fa-clock"></i>
            <h4>{{ game.release_date }}</h4>
        </nav>
        <router-link :to="{ name: 'detail', params: { id: game.id }}">See more</router-link>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: aliceblue;
    border-radius: 10px;
}
img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
}
h1{
    font-size: 30px;
    margin-top: 20px;
}
p {
    font-size: 20px;
    margin-top: 20px;
    line-height: 120%;
}
nav {
    display: flex;
    margin-top: 20px;
}
h4, i{
    font-size: 20px;
    margin-right: 10px;
}
a {
    padding: 10px 20px;
    margin-left: auto;
    font-size: 24px;
    background-color: #4799eb;
    color: aliceblue;
    border-radius: 10px;
    text-decoration: none;
}
</style>