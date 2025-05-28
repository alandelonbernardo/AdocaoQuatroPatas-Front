<template>
  <q-page >
    <div class="q-pa-md">
    <div class="row full-width">
      <q-btn color="blue" label="Criar Animal" icon="add" to="/animais/criar" />
    </div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Espécie</th>
          <th class="text-left">Raça</th>
          <th class="text-left">Tamanho</th>
          <th class="text-left">Idade</th>
          <th class="text-left">Foto</th>
          <th class="text-left">Status</th>
          <th class="text-left">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in animals" :key="i">
          <td class="text-left">{{ item.id }}</td>
          <td class="text-left"> {{ item.name }}</td>
          <td class="text-left"> {{ item.specie }}</td>
          <td class="text-left">{{ item.breed }}</td>
          <td class="text-left">{{ item.size }}</td>
          <td class="text-left">{{ item.age }}</td>
          <td class="text-left">{{ item.photo }}</td>
          <td class="text-left">{{ item.status }}</td>
          <td class="text-left">{{ item.description }}</td>
          <td class="text-left">
            <div class="row items-start">
              <q-btn color="blue-6" icon="edit" :to="'/animais/editar' + item.id" />
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
import AnimalService from 'src/services/AnimalService';
import { ref } from 'vue';

export default{
  setup(){
    return {
      animals: ref([])
    }

  },
  mounted(){
    this.getData()
  },
  methods: {
    async getData(){
      const animals = await AnimalService.listAll()
      this.animals = animals
    },

    async deleting(id) {
      const confirmation = confirm('Tem certeza que deseja remover esse Animal?')
      if(confirmation) {
        const response = await AnimalService.deleting(id)
        if(response.status == '200') {
          alert('Animal removido com sucesso!')
        }
        this.getData()
      }
    }

  }
};
</script>
