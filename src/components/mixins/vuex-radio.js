import merge from "merge"
import VuexField from "./vuex-field"

export default () => merge.recursive(true, VuexField, {
    props: {
        options: {type: [String, Object, Array], default: () => []},
        option_name: {type: [String], default: 'id'},
        option_value: {type: [String], default: 'id'},
    },
    methods: {
        handleRadio(event) {
            this.emitEvent('input', this.createEvent(event, 'input'))
        },
    }
})