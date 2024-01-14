<script setup>
import * as api from "../api/api.js";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const detail = ref();
const route = useRoute();

onMounted(async () => {
    detail.value = await api.DetailGame(route.params.id);
    console.log("route:", route);
});

</script>


<template>
    <section>
        <div v-if="detail">
            <nav>
                <img 
                    v-for="(screen, index) in detail.screenshots"
                    :src="screen.image" 
                    :key="index"
                />
            </nav>
            <p>{{detail.description}}</p>
        </div>
    </section>                                              
</template>


<style scoped>
div {
    padding: 20px;
}
nav{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-gap: 30px;
}
img{
    width: 40%;
    aspect-ratio: 16/9;
}
p{
    font-size: 24px;
    margin-top: 20px;
    color: aliceblue;
    text-align: center;
}
</style>