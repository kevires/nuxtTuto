import Vuex from 'vuex'
import axios from 'axios'
// const axios = require('axios')

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: []
        },
        mutations: {
            setDecks(state, decks) {
                state.decks = decks
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios
                    .get('http://nuxt-learn-english-3798e-default-rtdb.firebaseio.com/decks.json')
                    .then(res =>{
                        const decksArr = []
                        for (const key in res.data) {
                            decksArr.push({ ...res.data[key], id: key })
                        }
                        vuexContext.commit('setDecks', decksArr)
                    })

                // return axios.get('http://nuxt-learn-english-3798e-default-rtdb.firebaseio.com/decks.json').then((response)=>{
                //     console.log(response.data);
                // })
                // return context.app.$axios
                //     .$get('http://nuxt-learn-english-3798e-default-rtdb.firebaseio.com/decks.json')
                //     .then((data) => {
                //         const decksArr = []
                //         for (const key in data) {
                //             decksArr.push({ ...data[key], id: key })
                //         }
                //         vuexContext.commit('setDecks', decksArr)
                //     }).catch((e)=>{
                //         context.error(e)
                //     })

                // return new Promise((resolve, reject) => {
                //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
                //     setTimeout(() => {
                //         resolve({
                //             decks: [
                //                 {
                //                     _id: 1,
                //                     name: 'Learn English',
                //                     description: "Description 1",
                //                     thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
                //                 },
                //                 {
                //                     _id: 2,
                //                     name: 'Learn VietNam',
                //                     description: "Description 2",
                //                     thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
                //                 },
                //                 {
                //                     _id: 3,
                //                     name: 'Learn laos',
                //                     description: "Description 3",
                //                     thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA'
                //                 }
                //             ]
                //         })
                //     }, 1500)
                //     // reject(new Error("error"))
                // }).then((data) => {
                //     vuexContext.commit('setDecks', data.decks)
                // })

            },
            setDecks(vuexContext, decks) {
                vuexContext.commit('setDecks', decks)
            }
        },
        getters: {
            decks(state) {
                return state.decks
            }
        }
    })
}

export default createStore