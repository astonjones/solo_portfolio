<template>
    <b-container>
        <b-row cols="1" cols-lg="2" id="contact-section" class="contact-section">
            <b-col class="contact-text">
                <h2>Reach Out to Me</h2>
                <h4>Let me know if I can help you out in anyway, or if you just want to chat!</h4>
            </b-col>
            <b-col class="contact-form">
                <component :is="storeState.dynamicComponent"></component>
            </b-col>
        </b-row>
    </b-container>
</template>



<script>
import { store } from '@/store.js'
import ContactForm from '@/components/ContactForm'
import ContactFormAnimation from '@/components/ContactFormAnimation.vue'
import ContactFormNotification from '@/components/ContactFormNotification.vue'

export default {
    name: 'HomeContactSection',
    components: {
        ContactForm,
        ContactFormAnimation,
        ContactFormNotification
    },
    data: function() {
        return {
            storeState: store.state
        }
    },
    created(){
        store.changeComponent('ContactForm')
    }
}
</script>

<style scoped>

    .bg-color {
        background-color: var(--cool-gray5);
    }

    .contact-section {
        display: flex;
        justify-content: space-around;
        margin: var(--size8) 0;
    }

    .contact-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .contact-text h4 {
        font-weight: var(--font-weight0);
        font-size: var(--font-size7);
        margin-bottom: var(--size3);
    }

    .contact-text h2{
        font-weight: var(--font-weight1);
        font-size: var(--font-size42);
        margin-bottom: var(--size4);
    }

    .contact-form {
        margin: auto;
    }

    .notification {
        display: none;
        margin: auto var(--size4);
        text-align: center;
        background-color: var(--cool-gray2);
        padding: var(--size2) 0;
    }

    /* MEDIA QUERIES */

    @media only screen and (max-width: 576px) {
        .contact-section {
            padding: 0 var(--size3);
        }
    }

    @media only screen and (max-width: 992px) {
  
    .contact-text h2 {
        font-size: var(--font-size8);
    }
    .contact-text h4 {
        font-size: var(--font-size6);
    }
    }

    @media only screen and (min-width: 1200px) {
    .contact-section {
        display: flex;
        justify-content: space-around;
    }
    .contact-form {
        max-width: var(--size14);
    }
}
</style>