<template>
    <div v-if="posts.length > 0">
        <h3>Список поcтов</h3>
        <transition-group name="post-list">
            <post-item 
        v-for="post in posts" 
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        />
        </transition-group>
       
    </div>

    <h2 v-else style="color: red;">
        Список постов пуст
    </h2>

</template>


<script>
import PostItem from"@/components/PostItem.vue";

export default {
    components: {
        PostItem
    },

    props: {
        posts: {
            type: Array,
            required: true
        }
    }

}


</script>


<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease-in-out;
}
.post-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(10px);
}
.post-list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  filter: blur(10px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>
