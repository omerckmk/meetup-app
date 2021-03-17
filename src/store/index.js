import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
                id: "1",
                title: 'Meetup in New York',
                date: '2020-03-16',
                location: 'New York',
                description: 'adasdöasödaösdasdasd'
            }
        ],
        user: null,
        loading : false,
        error : null

    },
    mutations: {
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
        createMeetup({commit}, payload) {
            const formModel = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: "123"
            }
            commit('createMeetup', formModel)
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
                        console.log(error)
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
            return state.loadedMeetups.sort(
                (meetupA, meetupB) =>
                    meetupA.date > meetupB.date)
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
