<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled value="" >Выбериите из спска</option>
        <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        >
        {{ option.name }}
        </option>
    </select>


</template>


<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
    },
    options: {
        type: Array,
        default:() => []
    }
},
    methods: {
        changeOption(option) {
            this.$emit('update:modelValue', option)
        }
    }
}

</script>



<style scoped>

</style>