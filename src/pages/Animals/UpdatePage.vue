<template>
  <q-page>
    <div class="q-pa-md">
      <h6 class="q-ma-xs">Editar Animal {{ id }}</h6>
      <div class="row full-width">
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Nome" type="text" v-model="form.name" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Espécie" type="text" v-model="form.specie" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Raça" type="text" v-model="form.breed" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Tamanho" type="text" v-model="form.size" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Idade" type="text" v-model="form.age" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Foto" type="text" v-model="form.photo" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Status" type="text" v-model="form.status" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Descrição" type="text" v-model="form.description" filled />
        </div>
        <div class="col-md-12 col-xs-12 q-pa-xs">
          <q-btn @click="updateData()" color="green-5" label="SALVAR" class="full-width" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import AnimalService from 'src/services/AnimalService';

export default {
  setup () {
    const form = ref({
      name: '',
      specie: '',
      breed: '',
      size: '',
      age: '',
      photo: '',
      status: '',
      description: '',
    })
      return {
        form,
        id: ref(null)
      }
  },
  async mounted(){
    this.id = this.$route.params.id
    const response = await AnimalService.show(this.id)
    this.form.name = response.data.name
    this.form.specie = response.data.specie
    this.form.breed = response.data.breed
    this.form.size = response.data.size
    this.form.age = response.data.age
    this.form.photo = response.data.photo
    this.form.status = response.data.status
    this.form.description = response.data.description
  },
  methods: {
    async updateData() {
      const response = await AnimalService.update(this.id, this.form)
      if(response.status == '200'){
        this.$router.push('/animais')
      }
    }
  }
};
</script>
