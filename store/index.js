import Vuex from 'vuex'
import Cookie from 'js-cookie'
const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: [],
            token: null
        },
        mutations: {
            addDeck(state, newDeck) {
                state.decks.push(newDeck)
            },
            editDeck(state, editDeck) {
                const deckIndex = state.decks.findIndex(deck => deck.id === editDeck.id)
                state.decks[deckIndex] = editDeck
            },
            setDecks(state, decks) {
                state.decks = decks
            },
            clearToken(state) {
                state.token = null
            },
            setToken(state, token) {
                state.token = token
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get(process.env.baseApiUrl + '/decks.json')
                    .then(data => {
                        console.log('serverInit')
                        const decksArr = []
                        for (const key in data) {
                            decksArr.push({ ...data[key], id: key })
                        }
                        vuexContext.commit('setDecks', decksArr)
                    }).catch((e) => {
                        context.error(e);
                    })
            },
            addDeck(vuexContext, deckData) {
                this.$axios.$post(process.env.baseApiUrl + '/decks.json?auth=' + vuexContext.state.token, deckData)
                    .then((data) => {
                        vuexContext.commit('addDeck', { ...deckData, id: data.name })
                    })
                    .catch((e) => {
                        // eslint-disable-next-line no-console
                        console.log(e)
                    })
            },
            authenticateUser(vuexContext, credentials) {
                return new Promise((resolve, reject) => {
                    let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApikey}`
                    if (!credentials.isLogin) {
                        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApikey}`
                    }
                    this.$axios.$post(authUrlApi, {
                        email: credentials.email,
                        password: credentials.password,
                        returnSecureToken: true
                    }).then((result) => {
                        vuexContext.commit('setToken', result.idToken)
                        localStorage.setItem('token', result.idToken)
                        localStorage.setItem('tokenExpiration', new Date().getTime() + result.expiresIn * 1000)
                        
                        Cookie.set('token', result.idToken)
                        Cookie.set('tokenExpiration', new Date().getTime() + result.expiresIn * 1000)

                        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
                        resolve({ success: true })
                    }).catch((error) => {
                        reject(error.response)
                    })
                })
            },
            editDeck(vuexContext, deckData) {
                const deckId = deckData.id
                delete deckData.id
                return this.$axios.$put(process.env.baseApiUrl + '/decks/' + deckId + '.json?auth=' + vuexContext.state.token, deckData)
                    .then((data) => {
                        // eslint-disable-next-line no-console
                        vuexContext.commit("editDeck", { ...data, id: deckId })
                    })
                    .catch((e) => {
                        // eslint-disable-next-line no-console
                        console.log(e)
                    })
            },
            setDecks(vuexContext, decks) {
                vuexContext.commit('setDecks', decks)
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            },
            initAuth(vuexContext, req){
                let token, tokenExpiration
                if(req){
                    // handle first time
                    if(!req.headers.cookie) return false
                    const tokenKey = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
                    const tokenExpirationKey = req.headers.cookie
                        .split(';')
                        .find((c) => c.trim().startsWith('tokenExpiration='))
                    if(!tokenKey || !tokenExpirationKey) {
                        vuexContext.dispatch('logout')
                        return false
                    }
                    token = tokenKey.split('=')[1]
                    tokenExpiration = tokenExpirationKey.split('=')[1]

                }else{
                    token = localStorage.getItem('token')
                    tokenExpiration = localStorage.getItem('tokenExpiration')
                    if(new Date().getTime() > tokenExpiration || !token) {
                        vuexContext.dispatch('logout')
                        return false
                    }
                }
                vuexContext.dispatch('setLogoutTimer', tokenExpiration - new Date().getTime())
                vuexContext.commit('setToken', token)
            },
            logout(vuexContext){
                vuexContext.commit('clearToken')
                Cookie.remove('token')
                Cookie.remove('tokenExpiration')
                localStorage.removeItem('token')
                localStorage.removeItem('tokenExpiration')
            }
        },
        getters: {
            decks(state) {
                return state.decks.reverse()
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore