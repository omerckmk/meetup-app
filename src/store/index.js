import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loadedMeetups: [],
        user: null,
        loading : false,
        error : null
    },
    mutations: {
        setLoadedMeetups (state , payload) {
            state.loadedMeetups = payload
        },
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError (state, payload ) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }

    },
    actions: {
        loadMeetups ({commit}) {
            commit('setLoading' , true)
            firebase.database().ref('meetups').once('value')
                .then((data) => {
                    const meetups = []
                    const obj = data.val()
                    for (let key in obj){
                        meetups.push({
                            id : key ,
                            title : obj[key].title,
                            description : obj[key].description,
                            imageUrl: obj[key].imageUrl,
                            date : obj[key].date
                        })
                    }
                    commit('setLoadedMeetups' , meetups)
                    commit('setLoading' , false)
                })
                .catch(
                    (error) => {
                        console.log(error)
                        commit('setLoading' , true)
                    }
                )

        },
        createMeetup({commit}, payload) {
            const formModel = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date
            }
            firebase.database().ref("meetups" ).push(formModel)
                .then((data) => {
                    const key = data.key
                    commit('createMeetup', {
                        ...formModel,
                        id : key
                    })

                })
                .catch((error) =>{
                    console.log(error)
                })

        },
        signUserup({commit}, payload) {
            commit('setLoading' , true);
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading' , false);
                        commit('clearError');
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser);
                    }
                )
                .catch(
                    error => {
                        commit('setLoading' , false);
                        commit('setError' , error);
                        console.log(error);
                    }
                )
        },
        signUserin({commit}, payload) {
            commit('setLoading' , true);
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading' , false)
                        commit('clearError')
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser);
                    }
                )
                .catch(
                    error => {
                        commit('setLoading' , false);
                        commit('setError' , error);
                    }
                )
        },
        clearError({commit}){
            commit('clearError')
        }


    },
    modules: {},
    getters: {
        loadedMeetups: state => {
            return state.loadedMeetups.sort((a, b) => new Date(a.date)- new Date(b.date))
        },
        featuredMeetups: (state, getters) => {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup: (state) => (id) => {
            return state.loadedMeetups.find(meetup => meetup.id === id)
        },
        user: state => state.user,
        loading : state => state.loading,
        error : state => state.error


    },


});
