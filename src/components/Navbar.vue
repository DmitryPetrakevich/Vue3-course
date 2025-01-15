<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">Пользователи</my-button>
        <my-button style="margin-left: 20px;" @click="$router.push('/about')">О нас</my-button>
    </div>

  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar {
    display: flex;
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px grey;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
}


</style>