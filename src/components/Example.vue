<template>
    <div>
        <h1>Build something awesome!</h1>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('Example component mounted...')
})
</script>

<style scoped>
div {
    width: 400px;
}
</style>