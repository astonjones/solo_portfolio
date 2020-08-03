<template>
    <div class="contact-form-container">
        <form name="contact-form" @submit.prevent="sendEmail">
            <fieldset>
                <div class="small-input-container">
                    <input class="small-input" type="text" name="name" placeholder="Your name" required>
                    <input class="small-input" type="text" name="companyName" placeholder="Company name (optional)">
                </div>
                <div class="small-input-container">
                    <input class="small-input" type="email" name="email" id="email" placeholder="Email" required>
                    <input class="small-input" type="tel" name="phoneNumber" placeholder="Phone number(optional)">
                </div>
                <div class="text-area-container">
                    <textarea placeholder="Tell me anything!" class="text-area" name="message"/>
                </div>
                <div class="submit-button-container">
                    <button type="submit">Submit</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { store } from '@/store.js'

export default {
    name: 'ContactForm',
    methods: {
        sendEmail: e => {
            //changes component to animation when loading
            console.log(e);
            store.changeComponent('ContactFormAnimation')
            //sends email
            emailjs.sendForm('gmail', 'solo_portfolio', e.target, 'user_9uUk2CarKyhfbMdeVcx4V')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    store.changeComponent('ContactFormNotification')

                }, (error) => {
                    console.log('FAILED...', error);
                    //need to put error notification here!
                });
        },
    },
}
</script>

<style scoped>
    /* containers and inside of contact form */

    .small-input-container,
    .text-area-container,
    .submit-button-container {
        margin: var(--size6) 0;
    }

    .small-input,
    .text-area,
    button {
        border: none;
    }

    .small-input,
    .text-area {
        border-bottom: var(--border0) solid var(--cool-gray3);
    }

    .small-input-container {
        display: flex;
        justify-content: space-between;
    }

    .small-input {
        width: 46%;
        padding: var(--size0);
    }

    textarea {
        width: 100%;
        height: var(--size8);
    }

    .submit-button-container button{
        width: 100%;
        background-color: var(--cool-gray4);
        padding: var(--size0);
    }

     @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .loadAnimate{
        animation: spin 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    .hideAnimate{
        display: none !important;
    }

    .notification {
        display: none;
        margin: auto var(--size4);
        text-align: center;
        background-color: var(--cool-gray2);
        padding: var(--size2) 0;
    }

    /* MEDIA */

    @media only screen and (max-width: 576px) {

        .small-input-container,
        .text-area-container,
        .submit-button-container {
            margin: var(--size5) 0;
    }

        .small-input-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .small-input {
            width: 100%;
        }

        .small-input:first-of-type {
            margin-bottom: var(--size5)
        }
    }

    @media only screen and (min-width: 576px) (max-width: 768px){

    }

    @media only screen and (min-width: 768px) (max-width: 992px){

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px){

    }

    @media only screen and (min-width: 1200px){

    }
</style>