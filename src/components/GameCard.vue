<template>
    <div>
        <img src="https://img.goodfon.ru/original/2880x1800/c/ca/zvezdy-svechenie-tumannosti.jpg" />
        <h1>Game</h1>
        <p>Text</p>
        <nav>
            <i class="fas fa-desktop"></i>
            <h4>Windows</h4>
        </nav>
        <nav>
            <i class="far fa-clock"></i>
            <h4>Date</h4>
        </nav>
        <router-link to="/">See more</router-link>
    </div>
</template>

<style scoped>
div {
    width: 500px;
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