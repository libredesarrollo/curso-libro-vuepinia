<template>
  <div>
    <input v-model="title" type="text" />
    <br>
    <textarea v-model="content"/>
    <br>
    <button @click="save()">Add</button>
  </div>
</template>

<script>
import { usePostsStore } from '@/stores/PostsStore'
export default {
    mounted() {
        this.usePostsStore = usePostsStore()
    },
    data(){
        return {
            usePostsStore,
            title:"",
            content:""
        };
    },
    methods: {
        save() {
            this.usePostsStore.addPost({
                id: this.usePostsStore.postCount + 1,
                title:this.title,
                body:this.content
            });
        }
    },  
}
</script>