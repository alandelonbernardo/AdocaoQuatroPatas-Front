<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="q-pa-md q-pb-xl">
        <q-card-header class="justify">
          <q-toolbar-title>
            <q-icon name="help" class="q-m-sm"/>
            Cadastrar Animal
          </q-toolbar-title>
        </q-card-header>
        <q-card-content>
          <div class="row full-width">
            <q-form
            class="row full-width"
            >
              <div class="col-md-12 col-sm-12 col-xs-12 q-pa-xs q-mt-md q-mb-md">
                <q-uploader
                    @uploaded="arquivoEnviado"
                    url="http://localhost:8000/api/upload"
                    class="full-width"
                    max-files="1"
                    auto-upload
                />
              </div>
              <div class="col-md-6 col-xs-6 q-pa-xs">
                <q-input
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'O nome não pode ser vazio!']"
                        label="Nome"
                        type="text"
                        v-model="form.name"
                        filled
                />
              </div>
              <div class="col-md-6 col-xs-6 q-pa-xs">
                <q-input
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'A espécie não pode ser vazia!']"
                        label="Espécie"
                        type="text"
                        v-model="form.specie"
                        filled
                />
              </div>
              <div class="col-md-12 col-xs-6 q-pa-xs">
                <q-input
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'A raça não pode ser vazia!']"
                        label="Raça"
                        type="text"
                        v-model="form.breed"
                        filled
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-6 col-xs-3 q-pa-xs">
                <q-input
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'O tamanho não pode ser vazio!']"
                        label="Tamanho"
                        type="text"
                        suffix="Cm"
                        v-model="form.size"
                        filled
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-6 col-xs-3 q-pa-xs">
                <q-input
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'A idade não pode ser vazia!']"
                        label="Idade"
                        type="text"
                        suffix="Anos"
                        v-model="form.age"
                        filled
                />
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12 q-pa-xs">
                <q-select
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'O status não pode ser vazio!']"
                        label="Status"
                        v-model="form.status"
                        :options="optionsSatus"
                        filled
                />
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12  col-xs-3 q-pa-xs">
                <q-input
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'A descrição não pode ser vazia!']"
                        label="Descrição"
                        v-model="form.description"
                        filled
                />
              </div>
              <div class="col-md-12 col-xs-12 q-pa-xs">
                <q-btn
                      @click="saveData()"
                      type="submit"
                      color="green-6"
                      label="SALVAR"
                      class="full-width"
                />
              </div>
            </q-form>
          </div>
        </q-card-content>
      </q-card>
    </div>
  </q-page>
</template>


<script>
import { ref } from 'vue';
import AnimalService from 'src/services/AnimalService'
import { useQuasar } from 'quasar';

export default {
  setup () {
    const $q = useQuasar()
    const optionsSatus = [
      'Disponível',
      'Adotado',
    ]

    const form = ref({
      name: '',
      specie: '',
      breed: '',
      size: '',
      age: '',
      photo: '',
      status: 'Selecione...',
      description: '',

    })

    return {
      $q,
      form,
      optionsSatus,
    }
  },
  // mounted() {
  //   this.getUsers()
  // },
  methods: {
    arquivoEnviado(info) {
      const formatedData = JSON.parse(info.files[0].xhr.response);
      this.form.photo = formatedData.file;

      this.$q.notify({
        'type': 'positive',
        'message': 'O arquivo foi enviado com sucesso!',
        'position': 'top-right'
      })
    },
    // axios
    async saveData() {
      const response = await AnimalService.create(this.form)
      if(response.status == '201'){
        this.$router.push('/animais')
      }
    }
  }
};
</script>
