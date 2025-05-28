<template>
  <q-page>
    <div class="q-pa-md">
      <h6 class="q-ma-xs">Editar Adoção {{ id }}</h6>
      <div class="row full-width">
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Id do usuário" type="text" v-model="form.user_id" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Id do animal" type="text" v-model="form.animal_id" filled />
        </div>
        <div class="col-md-12 col-xs-6 q-pa-xs">
          <q-input label="Status" type="text" v-model="form.status" filled />
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
import AdoptionService from 'src/services/AdoptionService';

export default {
  setup () {
    const form = ref({
      user_id: '',
      animal_id: '',
      status: '',
    })
      return {
        form,
        id: ref(null)
      }
  },
  async mounted(){
    this.id = this.$route.params.id
    const response = await AdoptionService.show(this.id)
    this.form.user_id = response.data.user_id
    this.form.animal_id = response.data.animal_id
    this.form.status = response.data.status
  },
  methods: {
    async updateData() {
      const response = await AdoptionService.update(this.id, this.form)
      if(response.status == '200'){
        this.$router.push('/adocoes')
      }
    }
  }
};
</script>
