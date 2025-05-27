<template>
  <q-page>
    <div class="q-pa-md">
      <h6 class="q-ma-xs">Criar Usuário</h6>
      <div class="row full-width">
        <div class="col-md-12 col-xs-6 q-pa-xs">
          <q-input label="Nome" type="text" v-model="form.name" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="E-mail" type="text" v-model="form.email" filled />
        </div>
        <div class="col-md-6 col-xs-6 q-pa-xs">
          <q-input label="Senha" type="text" v-model="form.password" filled />
        </div>
        <div class="col-md-12 col-xs-12 q-pa-xs">
          <q-btn @click="saveData()" color="green-5" label="SALVAR" class="full-width" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import UserService from 'src/services/UserService'

export default {
  setup () {
    const form = ref({
      name: '',
      email: '',
      password: '',
    })

    return {
      form
    }
  },
  methods: {
    // axios
    async saveData () {
      const response = await UserService.create(this.form)
      if(response.status == '201'){
        this.$router.push('/usuarios')
      }
    }
  }
};
</script>
