<template>
    <div class="loading-container">
        <h4>Loading...</h4>
        <div class="spinner-container">
            <b-spinner label="Loading..."></b-spinner>
        </div>
        <h4>Please wait</h4>
    </div>
</template>

<script>
export default {
    name: 'ContactFormAnimation',
}
</script>

<style scoped>
    .loading-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 440px;
    }
    .spinner-container{
        margin: var(--size4);
    }
    h4{
        text-align: center;
    }

    @media only screen and (max-width: 576px) {
        .loading-container {
            height: 490px;
        }
    }
</style>