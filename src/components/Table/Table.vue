<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0);
const nane = ref();

const getData = () => {
  fetch('/collection', {
    headers: { 'Content-type': 'application/json' },
  }).then(res=>res.json()).then((response) => {
    console.log({ response });
    name = response.response.data[0].name;
  }).catch((error) => {
    console.log('Looks like there was a problem: \n', error);
  });
}

getData();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>{{ name.value }}</h3>
  <div v-if="post" class="content">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <table>
  <tr>
    <th>Дата</th>
    <th>Название</th>
    <th>Количество</th>
    <th>Расстояние</th>
  </tr>
  <tr>
    <td>15.12.2021</td>
    <td>Бремен</td>
    <td>2</td>
    <td>456 км</td>
  </tr>
  <tr>
    <td>16.12.2002</td>
    <td>Лейпциг</td>
    <td>6</td>
    <td>120 км</td>
  </tr>
</table>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
