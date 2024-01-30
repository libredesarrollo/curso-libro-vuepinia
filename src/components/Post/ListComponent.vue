<template>
    <Item v-for="post in usePostsStore.postsArray" :key="post.id" :title="post.title" :content="post.body" />
    <p>Total posts: {{ usePostsStore.postCount }}</p>
</template>

<script>
    import {usePostsStore} from '@/stores/PostsStore';
    import Item from '@/components/Post/ItemComponent.vue';

export default {
    data() {
        return {
            usePostsStore,
        }
    },
    mounted() {
        this.usePostsStore = usePostsStore()
    },
    components:{
        Item
    }
}
</script>
