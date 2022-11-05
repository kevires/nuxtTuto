<template>
    <div>
        <div class="ct">
            <div class="d_flex justify_content_between my_3">
                <h3>List of your decks:</h3>
                <button class="btn btn_success" @click.prevent="openModal">Create a deck</button>
            </div>
            <ul class="decks-list">
                <DeckListVue v-for="deck in decks" :id="deck.id" :key="deck.id" :name="deck.name"
                    :description="deck.description" :thumbnail="deck.thumbnail" />
            </ul>
        </div>
    </div>
</template>

<script>
import DeckListVue from '../../components/Decks/DeckList.vue'
export default {
    components: {
        DeckListVue,
    },
    middleware: ['check-auth', 'auth'],
    head: {
        title: "Decks list"
    },
    computed: {
        decks() {
            return this.$store.getters.decks
        }
    },
    methods: {
        openModal() {
            this.$modal.open({ name: 'DeckFormModal' })
        },

    }
}
</script>

<style lang="scss">
.modal_body {
    background-color: #ffff;
    padding: 1rem;
}

.decks-list {
    li {
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .deck {
        display: block;
    }

    .deck-card {
        display: flex;
        flex-direction: row;
        height: 250px;

        img {
            width: 250px;
            height: auto;
        }
    }
}
</style>
