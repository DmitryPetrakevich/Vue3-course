<template>
    <div>
        <h1>{{ likes }}</h1>
        <my-button @click="addLike">Like</my-button>
        <h1>Страница с постами</h1>
        <!-- <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Поиск ..."

        />
        <div class="app__btns">
        <my-button
        @click="showDialog"
        >
            Создать пост
        </my-button>

        <my-select
        v-model="selectedSort"
        :options="sortOptions"
        >

        </my-select>
        </div>
       
        <my-dialog v-model:show="dialogVisible">
            <post-form
            @create="createPost"
            />
        </my-dialog>
       
        
        <post-list 
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
        />
        <div v-else >Идет загрузка ...</div>
        <div v-intersection="loadMorePosts" class="observer"></div> -->
    </div>

</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
import {ref} from "vue"

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По загаловку'},
                {value: 'body', name: 'По содержимому'}
            ]
            
        }
    },
    setup(props) {
        const likes = ref(0)
        const addLike = () => {
            likes.value += 1
        }

        return {
            likes,
            addLike
        }
    }
}


</script>

<style>


.app__btns {
    display: flex;
    margin: 15px 0;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}

.observer {
    height: 30px;
    background-color: green;
}
</style>