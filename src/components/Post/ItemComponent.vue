<template>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
</template>
<script>
export default {
    props:{
        title:String,
        content:String
    }
}
</script>