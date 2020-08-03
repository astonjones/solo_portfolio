<template>
    <div class="loading-container">
        <b-spinner label="Loading..."></b-spinner>
    </div>
</template>

<script>
export default {
    name: 'ContactFormAnimation',
}
</script>

<style scoped>
    .loading-container {
        display: flex;
        justify-content: center;
    }
</style>