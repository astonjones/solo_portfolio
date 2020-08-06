<template>
    <div class="notification-container">
        <div class="notification-message-div">
            <b-alert show variant="success">Message Sent Successfully! I'll get back to you shortly, and thanks for reaching out!</b-alert>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactForm',
}
</script>

<style scoped>
    .notification-container{
        height: 440px;
        display: flex;
        align-items: center;
    }
    .notification-message-div{
        margin: auto;
    }
    @media only screen and (max-width: 576px) {
        .notification-container {
            height: 490px;
        }
    }
</style>