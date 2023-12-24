<script setup>
import GameCard from "../components/GameCard.vue";
</script>

<template>
    <section>
        <h1 class="title">Shooter</h1>
        <div class="block">
            <GameCard v-for="(item, index) in 3" :key="index"/>
        </div>
    </section>
</template>

<style scoped>
.title {
    font-size: 40px;
    text-align: center;
    margin: 20px 0;
    color: aliceblue;
}
.block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin: 0 50px;
}

</style>