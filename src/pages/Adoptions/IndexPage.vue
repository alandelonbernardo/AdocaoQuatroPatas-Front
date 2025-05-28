<template>
  <q-page >
    <div class="q-pa-md">
    <div class="row full-width">
      <q-btn color="blue" label="Criar Adoção" icon="add" to="/adocoes/criar" />
    </div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Id da Adoção</th>
          <th class="text-left">Id do Animal</th>
          <th class="text-left">Status</th>
          <th class="text-left">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in adoptions" :key="i">
          <td class="text-left">{{ item.id }}</td>
          <td class="text-left"> {{ item.user_id }}</td>
          <td class="text-left"> {{ item.animal_id }}</td>
          <td class="text-left">{{ item.status }}</td>
          <td class="text-left">{{ item.created_at }}</td>
          <td class="text-left">
            <div class="row items-start">
              <q-btn color="blue-6" icon="edit" :to="'/adocoes/editar' + item.id" />
              <q-btn class="q-ml-sm" @click="deleting(item.id)" color="red" icon="delete" />
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  </q-page>
</template>

<script>
import AdoptionService from 'src/services/AdoptionService';
import { ref } from 'vue';

export default{
  setup(){
    return {
      adoptions: ref([])
    }

  },
  mounted(){
    this.getData()
  },
  methods: {
    async getData(){
      const adoptions = await AdoptionService.listAll()
      this.adoptions = adoptions
    },

    async deleting(id) {
      const confirmation = confirm('Tem certeza que deseja remover esse Adoção?')
      if(confirmation) {
        const response = await AdoptionService.deleting(id)
        if(response.status == '200') {
          alert('Adoção removida com sucesso!')
        }
        this.getData()
      }
    }

  }
};
</script>
