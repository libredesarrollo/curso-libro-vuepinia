<template>
 <h1>Posts</h1>
 <List />
 <Insert />
</template>

<script>
import Insert from '@/components/Post/InsertComponent.vue';
import List from '@/components/Post/ListComponent.vue';

export default {
    components:{
        List,
        Insert
    }
}
</script>
