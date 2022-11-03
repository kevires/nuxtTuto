<template>
    <div>
        <div class="ct">
            <div class="d_flex justify_content_between my_3">
                <h3>List of your decks:</h3>
                <button class="btn btn_success" @click.prevent="openModal">Create a deck</button>
            </div>
            <ul class="decks-list">
                <DeckListVue v-for="deck in decks" :key="deck._id" :id="deck._id" :name="deck.name"
                    :description="deck.description" :thumbnail="deck.thumbnail" />
            </ul>
        </div>
        <v-modal name="createDeckModal">
            <div class="modal_body">
                <h2>Create a new Deck</h2>
                <deck-form @submit="onSubmit"/>
            </div>
        </v-modal>
    </div>
</template>

<script>
// import axios from 'axios'
import DeckForm from '../../components/Decks/DeckForm.vue'
import DeckListVue from '../../components/Decks/DeckList.vue'
export default {
    components: {
        DeckListVue,
        DeckForm
    },
    // Solution 1: call API
    // fetch(context) {
    //     return new Promise((resolve, reject) => {
    //         // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    //         setTimeout(() => {
    //             resolve({
    //                 decks: [
    //                     {
    //                         _id: 1,
    //                         name: 'Learn English',
    //                         description: "Description 1",
    //                         thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
    //                     },
    //                     {
    //                         _id: 2,
    //                         name: 'Learn VietNam',
    //                         description: "Description 2",
    //                         thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
    //                     },
    //                     {
    //                         _id: 3,
    //                         name: 'Learn laos',
    //                         description: "Description 3",
    //                         thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
    //                     }
    //                 ]
    //             })
    //         }, 1500)
    //         // reject(new Error("error"))
    //     }).then((data) => {
    //         context.store.dispatch('setDecks', data.decks)
    //     }).catch((e) => {
    //         // // eslint-disable-next-line no-console
    //         // console.log(e)
    //         context.error(e);
    //     })
    // },
    computed: {
        decks() {
            return this.$store.getters.decks
        }
    },
    methods: {
        openModal() {
            this.$modal.open({ name: 'createDeckModal' })
        },
        onSubmit(deckData){
            this.$axios.post('https://nuxt-learn-english-3798e-default-rtdb.firebaseio.com/decks.json/', deckData)
            .then((data)=>{
                // eslint-disable-next-line no-console
                console.log(data)
            })
            .catch((e)=>{
                // eslint-disable-next-line no-console
                console.log(e)
            })
        }
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
