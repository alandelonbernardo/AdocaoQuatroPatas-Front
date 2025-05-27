<template>
  <q-page >
    <div class="q-pa-md">
      <h6 class="q-ma-xs">Atualizar Usuário #{{ id }}</h6>
      <div class="row full-width">
        <div class="col-md-12 col-xs-6 q-pa-xs">
          <q-input label="Nome" type="text" v-model="form.name" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="E-mail" type="text" v-model="form.email" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Senha" type="text" v-model="form.password"  filled />
        </div>
        <div class="col-md-12 col-xs-12 q-pa-xs">
          <q-btn @click="updateData()" color="green-6" label="ATUALIZAR" class="full-width" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import UserService from 'src/services/UserService';

export default {
  setup () {
    const form = ref({
      name: '',
      email: '',
      password: '',
    })
      return {
        form,
        id: ref(null)
      }
  },
  async mounted(){
    this.id = this.$route.params.id
    const response = await UserService.show(this.id)
    this.form.name = response.data.name
    this.form.email = response.data.email
    this.form.password = response.data.password
  },
  methods: {
    async updateData () {
      const response = await UserService.update(this.id, this.form)
      if(response.status == '200'){
        this.$router.push('/usuarios')
      }
    }
  }
};
</script>
