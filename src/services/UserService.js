import client from 'src/services/http.js'

const UserService = {
  async listAll () {
  //GET http://127.0.0.1:8000/api/user
    return await client.get('users/index').then(( response) => {
      return response.data
    }).catch(( error ) => {
      return error
    })

  },

  async create(data){
    //axios POST em http://127.0.0.1:8000/api/user/create
    return await client.post('/users/create', data).then( ( response ) => {
      alert('Usuário criado com sucesso!')
      return response;
    }).catch((error) => {
      alert('Erro ao criar o usuário! ' + error.message)
      console.log('Deu ruim ao criar', error);
      return error;
    })
  },

  async update(id, data){
    //POST http://127.0.0.1:8000/api/user/update/1
    return await client.post('/users/update/' + id , data).then( ( response ) => {
      alert('Usuário atualizado com sucesso!')
      return response;
    }).catch((error) => {
      alert('Erro ao atualizar o usuário! ' + error.message)
      console.log('Deu ruim ao atualizar', error);
      return error;
    })
  },

  async show(id){
    // GET http://127.0.0.1:8000/api/user/1
    return await client.get(`/users/show/${id}`).then((response) => {
      console.log('USUARIO', response)
      return response;
    }).catch((error) => {
      alert('Erro ao obter o usuário ' + id);
      return error;
    })
  },

  async deleting(id){
    // DELETE http://127.0.0.1:8000/api/user/delete/1
    return await client.delete('/users/delete/' + id).then((response) => {
      return response;
    }).catch((error) => {
      alert('Erro ao remover o usuário ' + id)
      return error;
    })
  }

}

export default UserService
