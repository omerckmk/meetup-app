import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imgurl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
                id: '1',
                title: 'Meetup in New York',
                date: '2020-03-16'

            },
            {
                imgurl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
                id: '2',
                title: 'Meetup in Paris',
                date: '2020-03-17'
            },
            {
                imgurl: 'https://i.hurimg.com/i/hdn/75/0x0/5ab0ff9ad3806d12540aada2.jpg',
                id: '3',
                title: 'Meetup in Istanbul',
                date: '2020-03-23'
            }
        ],
        user: {
            id: 'adana',
            registeredMeetups: ['asdasd']
        }
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        LoadedMeetups: state => {
            return state.loadedMeetups.sort(
                (meetupA, meetupB) =>
                    meetupA.title > meetupB.title )
        },
        featuredMeetups: (state, getters) => {
            return getters.LoadedMeetups.slice(0, 5)
        },
        loadedMeetup: (state) => (meetupId) => {
            return state.loadedMeetups.find(meetup => meetup.id === meetupId)
        },

    }
});
