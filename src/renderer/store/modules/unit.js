import * as firebase from 'firebase'

const state = {
    all: [],
}

const mutations = {
    WATCH_UNITS(state, units) {
        state.all = units
    }
}

const actions = {
    getUnits({ commit }) {
        firebase.database().ref('units').on('value', function (snapshot) {
            if (snapshot.val()) {
                commit('WATCH_UNITS', snapshot.val())
            }
        })
    }
}

export default {
    state,
    mutations,
    actions
}
