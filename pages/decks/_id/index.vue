<template>
    <section>
        <div class="r">
            <div class="ct text_center">
                <h3>Deck: {{deck.name}}</h3>
                <div class="tools">
                    <button class="btn btn_success">Learn now</button>
                    <button class="btn btn_primary" @click.prevent="openModal">Create a card</button>
                    <button class="btn btn_warning" @click.prevent="openModal('DeckFormModal')">Edit Deck</button>
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
                        <button 
                        class="btn btn_success ml_3" 
                        @click.prevent="createDeck">
                        Create
                    </button>
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
    asyncData(context) {
        return context.app.$axios
        .$get(`${process.env.baseApiUrl}/decks/${context.params.id}.json`)
        .then(data =>{
            return {
                deck: data
            }
        })
        .catch((e)=>{
            context.error(e);
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
    head(){
        return {
            title: `Deck ${this.deck.name}`
        }
    },
    methods: {
        openModal(name) {
            if(name === 'DeckFormModal'){
                this.$modal.open({ name: 'DeckFormModal', payload: {...this.deck, id: this.$route.params.id} })
            }else if(name === ''){
                this.$modal.open({ name: 'createCardModal' })
            }
        },
        closeModal() {
            this.$modal.close({ name: 'createCardModal' })
        }
    },
   
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