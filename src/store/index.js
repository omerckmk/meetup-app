import Vue from "vue";
import Vuex from "vuex";

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
        user: {
            id: 'adana',
            registeredMeetups: ['asdasd']
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
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
        }


    },


});
