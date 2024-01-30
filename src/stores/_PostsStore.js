import {defineStore} from 'pinia';
import posts from '../data/posts.json';

export const usePostsStore = defineStore('PostsStore', {

    state: () => (
        {
            // posts: posts,
            posts,
          }
    ),
    getters: {
        postCount: (state) => state.posts.length,
        postsArray: (state) => state.posts,
    },
    actions: {
        addPost(post){
            this.posts.push(post);
        },
    },
})

// export const useCounterStore = defineStore('counter', {
//     state: () => ({ count: 2 }),
//     getters: {
//       doubleCount: (state) => state.count * 2,
//     },
//     actions: {
//       increment() {
//         this.count++
//       },
//     },
//   })
  