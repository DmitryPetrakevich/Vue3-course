<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск ..."
        v-focus
        />
        <div class="app__btns">
        <my-button
        @click="showDialog"
        >
            Создать пост
        </my-button>

        <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
        <div v-intersection="loadMorePosts" class="observer"></div>
        <div class="page__wrapper">
            <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"

            >
            {{ pageNumber }}

            </div>

        </div>
        
    </div>

</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {      
            dialogVisible: false,       
        }
    },

    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),

        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),

        createPost(post) {
            const newPosts = [...this.posts, post];
            this.$store.commit('post/setPosts', newPosts);
            this.dialogVisible = false;
        },

        removePost(post) {
            this.$store.commit('post/setPosts', this.posts.filter(p => p.id !== post.id));
        },

        showDialog() {
            this.dialogVisible = true;
        },

        // changePage(pageNumber) {
        //     this.page = pageNumber
        // },

       
    },

    mounted() {
        this.fetchPosts();
    },

    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post. page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
           

        }),

        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        }),
        
        },

    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    
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