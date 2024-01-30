import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import posts from '../data/posts.json';

export const usePostsStore = defineStore('PostsStore', ()=>{
    //state
    const postsList = ref(posts);
    //getters
    const postCount = computed(()=> postsList.value.length);
    const postsArray = computed(()=> postsList.value);
    //actions
    function addPost(post){
        postsList.value.push(post);
    }

    return{postsArray, postCount, addPost}
})

// export const useCounterStore = defineStore('counter', ()=>{
//     //state
//     const count = ref({ count: 2 })
//     // getters
//     const doubleCount = computed(()=> count.value.count * 2);
//     // actions
//     function increment(){
//         count.value.count++;
//     }
//     return {doubleCount, increment}
//   })