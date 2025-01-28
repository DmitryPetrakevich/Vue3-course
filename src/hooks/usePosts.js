import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const page = ref(1);

  const fetching = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: page.value,
          _limit: limit,
        },
      });
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = [...posts.value, ...response.data];
    } catch {
      alert("Ошибка");
    } finally {
      isPostsLoading.value = false;
    }
  };

  const loadMorePosts = async () => {
    try {
      page.value += 1; // Увеличиваем страницу
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: page.value,
          _limit: limit,
        },
      });
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = [...posts.value, ...response.data];
    } catch {
      alert("Ошибка");
    }
  };

  onMounted(fetching);

  return {
    posts,
    totalPages,
    isPostsLoading,
    loadMorePosts, // Экспортируем метод подгрузки
  };
}
