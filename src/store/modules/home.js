export default {
    namespaced: true,
    state: {
        number: 1
    },
    mutations: {
        addNumber (state, number) {
            state.number = ++state.number
        },
        toZero (state, number) {
            state.number = number
        }
    }
}