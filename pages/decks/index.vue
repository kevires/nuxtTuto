<template>
    <div>
        <div class="ct">
            <h3>List of your decks:</h3>
            <ul class="decks-list">
                <li>
                    <div class="card deck-card">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA" alt="Thumnail card">
                        <div class="card_body">
                            <h3>Title card</h3>
                            <p>Description card</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card deck-card">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA" alt="Thumnail card">
                        <div class="card_body">
                            <h3>Title card</h3>
                            <p>Description card</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card deck-card">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA" alt="Thumnail card">
                        <div class="card_body">
                            <h3>Title card</h3>
                            <p>Description card</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deckID: '1'
        }
    },
    methods: {
        showDeck() {
            // this.$router.push("/decks/"+this.deckID)

            this.$router.push(`/decks/${this.deckID}`)

        }
    }
}
</script>

<style lang="scss">
    .decks-list{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            margin-bottom: 1rem;
            &:last-child{
                margin-bottom: 0;
            }
        }
        .deck-card{
            display: flex;
            flex-direction: row;
            height: 250px;
            img{
                width: 250px;
                height: auto;
            }
        }
    }

</style>
