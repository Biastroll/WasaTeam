<template>
    <div>
        <h3>Input page</h3>
        <div class="type-select">
            <input type="radio" id="text" name="input" value="text" v-model="inputType">
            <label for="text">Text</label>
            <input type="radio" id="radio" name="input" value="radio" v-model="inputType">
            <label for="radio">Radio</label>
            <input type="radio" id="select" name="input" value="select" v-model="inputType">
            <label for="select">Select</label>
        </div>
        <change-type :item="inputType"></change-type>
    </div>
</template>

<script>
import ChangeType from '../components/ChangeType.vue';

    export default {
        name: 'Input',
        data(){
            return {
                inputType: ''
            }
        },
        components: {
            ChangeType
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
.type-select {
  padding: 20px;
  
  label {
      padding-right: 5px;
  }
}
</style>