<template>
    <div class="api">
        <h3>Api page</h3>
        <select id="person" @click.once="importApi" @change="showApi" v-model="personName">
            <option value="">--Choose a name--</option>
        </select>
        <div class="api-container"></div>
    </div>
</template>

<script>
    export default {
        name: 'Api',
        data(){
            return {
                names: [],
                cities: [],
                personName: '',
                selectedIndex: 0
            }
        },
        methods: {
            importApi() {
                let url = 'https://mocki.io/v1/022b94c3-f0d0-4a8e-b587-29a70a09ea47';
                let options = document.querySelector('#person');
        
                fetch(url)
                .then(res => res.json())
                .then(data => {
                        let optionId = data.map(item => item.name);
                        this.names = optionId;

                        let optionCity = data.map(item => item.city);
                        this.cities = optionCity;

                        optionId.forEach(function(item){
                            let opts = document.createElement('option');
                            opts.setAttribute("value", `${item}`);
                            opts.append(item);
                            options.append(opts);
                        });
                })
            }
        },
        computed: {
            showApi(){
                let container = document.querySelector('.api-container');
                container.textContent = '';

                let idx = this.names.indexOf(this.personName);
                if(this.personName == ''){
                    container.textContent = '';
                }
                else{
                    let theName = document.createElement('div');
                    theName.setAttribute('class','person');
                    theName.append('Name: '+this.personName);
                    let theCity = document.createElement('div');
                    theCity.setAttribute('class','city');
                    theCity.append('City: '+this.cities[idx]);
                    container.append(theName,theCity)
                }
                return console.log('success');
            }
        }
    }
</script>

<style lang="scss" scoped>
.api-container {
        margin: 20px auto;
        width: 150px;
        text-align: initial;
    }
</style>