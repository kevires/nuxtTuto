<template>
    <div>
        <default-header-vue />
        <Nuxt />
        <v-modal v-slot="payload" name="DeckFormModal">
            <div class="modal_body">
                <h2>
                    {{payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck' }}
                </h2>
                <DeckFormVue :deck="payload.payload" @submit="onSubmit" />
            </div>
        </v-modal>
        <default-footer-vue />
    </div>
</template>


<script>
import axios from 'axios'
import DeckFormVue from '../components/Decks/DeckForm.vue';
import DefaultHeaderVue from '../components/Header/DefaultHeader.vue';
import DefaultFooterVue from '../components/Footer/DefaultFooter.vue';
export default {
    components: {
        DeckFormVue,
        DefaultHeaderVue,
        DefaultFooterVue,

    },
    methods: {
        onSubmit(deckData) {
            axios.post('https://nuxt-learn-english-3798e-default-rtdb.firebaseio.com/decks.json/', deckData)
                .then((data) => {
                    // eslint-disable-next-line no-console
                    console.log(data)
                })
                .catch((e) => {
                    // eslint-disable-next-line no-console
                    console.log(e)
                })
        }
    }
}
</script>