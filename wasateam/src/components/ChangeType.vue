<template>
    <div>
        <div class="edit-input" v-if="item === 'text'">
            <input type="text" v-model="inputText">
            <p> {{ inputText }} </p>
        </div>
        <div class="edit-input" v-else-if="item === 'radio'">
            <input type="radio" id="taipei" name="radio-input" value="taipei" v-model="inputRadio">
            <label for="taipei">taipei</label>
            <input type="radio" id="tokyo" name="radio-input" value="tokyo" v-model="inputRadio">
            <label for="tokyo">tokyo</label>
            <input type="radio" id="bangkok" name="radio-input" value="bangkok" v-model="inputRadio">
            <label for="bangkok">bangkok</label>
            <p> {{ inputRadio }} </p>
        </div>
        <div class="edit-input" v-else-if="item === 'select'">
            <select id="inputContent" v-model="inputSelect">
                <option value="">--Choose the direction--</option>
                <option value="north">north</option>
                <option value="east">east</option>
                <option value="south">south</option>
                <option value="west">west</option>
            </select>
            <p> {{ inputSelect }} </p>
        </div>        
    </div>
</template>

<script>
    export default {
        name: 'ChangeType',
        data(){
            return {
                inputText: '',
                inputRadio: '',
                inputSelect: ''
            }
        },
        props: ['item']
        
    }
</script>

<style lang="scss" scoped>
.edit-input {
    margin-top: 15px;
    p {
        font-size: 1.5rem;
    }
}
</style>