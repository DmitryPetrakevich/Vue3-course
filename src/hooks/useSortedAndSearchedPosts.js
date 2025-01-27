import {computed, ref} from "vue"

export default function userSortedPosts(sortedPosts) {
    const searchQuery = ref('')
    const sortedAndSearchedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]))
    })

    return {
        searchQuery, sortedAndSearchedPosts
    }

};