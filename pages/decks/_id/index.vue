<template>
    <section>
        <div class="r">
            <div class="ct text_center">
                <h3>Deck #{{ $route.params.id }}: {{deck.name}}</h3>
                <div class="tools">
                    <button class="btn btn_success">Learn now</button>
                    <button class="btn btn_primary" @click.prevent="openModal">Create a card</button>
                </div>

                <hr class="devide" />
                <div class="r">
                    <card-list-vue v-for="card in cards" :key="card._id" :picture="card.picture"
                        :keyword="card.keyword" />
                </div>
            </div>
        </div>
        <v-modal name="createCardModal">
            <div class="modal_body">
                <h2>Create a new Deck</h2>
                <form action="">
                    <div class="form_group">
                        <label for="">Name:</label>
                        <input class="form_control" type="text" placeholder="Please enter name deck">
                    </div>
                    <div class="form_group">
                        <label for="">Description:</label>
                        <textarea class="form_control" placeholder="Please enter description" />
                    </div>
                    <div class="form_group">
                        <label for="">Thumbnail:</label>
                        <input type="file">
                        <div class="preview"></div>
                    </div>
                    <div class="form_group d_flex justify_content_end">
                        <button class="btn btn_danger" @click.prevent="closeModal">Close Modal</button>
                        <button class="btn btn_success ml_3" @click.prevent="createDeck">Create</button>

                    </div>
                </form>
            </div>
        </v-modal>
    </section>
</template>


<script>
import CardListVue from '../../../components/Cards/CardList.vue'
export default {
    components: {
        CardListVue
    },
    validate({ params }) {
        return /^[0-9]$/.test(params.id)
    },
    asyncData(context) {
        // // eslint-disable-next-line no-console
        // console.log(context)
        return new Promise((resolve, reject)=>{
            // eslint-disable-next-line nuxt/no-timing-in-fetch-data
            setTimeout(() => {
            resolve({
                deck: {
                    _id: 1,
                    name: `Learn English by decks ${context.params.id}`,
                    description: "Description 1",
                    thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
                }
            })
        }, 1500)
        }).then((data)=>{
            return data
        }).catch((e)=>{
            // eslint-disable-next-line no-console
            console.log(e)
        })
       
    },
    data() {
        return {
            cards: [
                {
                    _id: 1,
                    picture: 'https://dony.vn/wp-content/uploads/2021/08/mau-thiet-ke-shop-quan-ao-nho-2.jpg',
                    keyword: 'shop 1'
                },
                {
                    _id: 2,
                    picture: 'https://dony.vn/wp-content/uploads/2021/08/mau-thiet-ke-shop-quan-ao-nho-2.jpg',
                    keyword: 'shop 2'
                },
                {
                    _id: 3,
                    picture: 'https://dony.vn/wp-content/uploads/2021/08/mau-thiet-ke-shop-quan-ao-nho-2.jpg',
                    keyword: 'shop 3'
                }
            ]
        }
    },

    methods: {
        openModal() {
            this.$modal.open({ name: 'createCardModal' })
        },
        closeModal() {
            this.$modal.close({ name: 'createCardModal' })
        }
    }
}
</script>


<style lang="scss">
.modal_body {
    background-color: #ffff;
    padding: 1rem;
}

section {
    padding-top: 3rem;

    .card {
        padding: 1rem;

        img {
            width: 60%;
        }
    }

    .devide {
        margin: 2rem;
    }
}
</style>