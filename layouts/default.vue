<template>
    <div>
        <default-header-vue />
        <Nuxt />
        <v-modal v-slot="payload" name="DeckFormModal">
            <div class="modal_body">
                <h2>
                    {{ payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck' }}
                </h2>
                <DeckFormVue :deck="payload.payload" @submit="onSubmit" />
            </div>
        </v-modal>
        <default-footer-vue />
    </div>
</template>


<script>
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
            if (deckData && !deckData.id) {
                this.$store.dispatch("addDeck", deckData).then(()=>
                    this.$modal.close({name:'DeckFormModal'})
                )
            } else {
                this.$store.dispatch("editDeck", deckData).then(()=>{
                    this.$modal.close({name:'DeckFormModal'})
                    this.$router.push("/decks")
                })
            }

        }


    }
}
</script>