<template>
  <q-page >
    <div class="q-pa-md">
    <div class="row full-width">
      <q-btn color="blue" label="Criar Usuário" icon="add" to="/usuarios/criar" />
    </div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">Data</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in users" :key="i">
          <td class="text-left">{{ item.id }}</td>
          <td class="text-left"> {{ item.name }}</td>
          <td class="text-left"> {{ item.email }}</td>
          <td class="text-left">
            {{ new Date(item.created_at).toLocaleString('pt-BR') }}
          </td>
          <td class="text-left">
            <div class="row items-start">
              <q-btn color="blue-6" icon="edit" :to="'/usuarios/editar' + item.id" />
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
import UserService from 'src/services/UserService';
import { ref } from 'vue';

export default{
  setup(){
    return {
      users: ref([])
    }

  },
  mounted(){
    this.getData()
  },
  methods: {
    async getData(){
      const users = await UserService.listAll()
      this.users = users
    },

    async deleting(id) {
      const confirmation = confirm('Tem certeza que deseja remover esse usuário?')
      if(confirmation) {
        const response = await UserService.deleting(id)
        if(response.status == '200') {
          alert('Usuário removido com sucesso!')
        }
        this.getData()
      }
    }

  }
};
</script>
